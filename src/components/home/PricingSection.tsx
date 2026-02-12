import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Crown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { CHROME_STORE_URL } from "@/config/constants";
import { isLoggedIn, getToken } from "@/lib/auth";
import { apiRequest } from "@/lib/api";

const pricingPlans = [
  {
    name: "Free Trial",
    price: "0",
    credits: 5,
    description: "Try it out risk-free",
    features: [
      "5 free resume generations",
      "All rewrite intensity levels",
      "PDF & DOCX downloads",
      "Works on all job sites",
    ],
    cta: "Get Started Free",
    ctaVariant: "heroOutline" as const,
    popular: false,
    isFree: true,
  },
  {
    name: "Starter Pack",
    price: "2.99",
    credits: 5,
    description: "Perfect for active job seekers",
    features: [
      "5 resume credits",
      "All rewrite intensity levels",
      "PDF & DOCX downloads",
      "Priority processing",
    ],
    cta: "Get 5 Credits",
    ctaVariant: "heroOutline" as const,
    popular: false,
    isFree: false,
  },
  {
    name: "Pro Pack",
    price: "4.99",
    credits: 10,
    description: "Best value for serious applicants",
    features: [
      "10 resume credits",
      "All rewrite intensity levels",
      "PDF & DOCX downloads",
      "Priority processing",
      "Email support",
    ],
    cta: "Get 10 Credits",
    ctaVariant: "hero" as const,
    popular: true,
    icon: Crown,
    isFree: false,
  },
  {
    name: "Power Pack",
    price: "7.99",
    credits: 20,
    description: "For heavy job application periods",
    features: [
      "20 resume credits",
      "All rewrite intensity levels",
      "PDF & DOCX downloads",
      "Priority processing",
      "Priority email support",
    ],
    cta: "Get 20 Credits",
    ctaVariant: "heroOutline" as const,
    popular: false,
    isFree: false,
  },
];

export const PricingSection = () => {
  const navigate = useNavigate();
  const [loadingPack, setLoadingPack] = useState<number | null>(null);

  const handlePurchase = async (credits: number) => {
    if (!isLoggedIn()) {
      navigate(`/login?redirect=/pricing&credits=${credits}`);
      return;
    }

    setLoadingPack(credits);
    try {
      const token = getToken();
      const data = await apiRequest<{ checkout_url: string; payment_link: string }>(
        "/credits/checkout",
        "POST",
        { credits },
        token
      );
      const checkoutUrl = data.checkout_url || data.payment_link;
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch {
      // On error, fall back to the dedicated pricing page
      navigate("/pricing");
    } finally {
      setLoadingPack(null);
    }
  };

  return (
    <section className="section-padding bg-background" id="pricing">
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simple, Credit-Based Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No subscriptions. Buy credits when you need them. 1 credit = 1 resume generation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative card-elevated p-6 flex flex-col ${
                plan.popular ? "border-2 border-primary glow-effect" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="gradient-bg text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Best Value
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                {plan.icon && (
                  <plan.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                )}
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-foreground">${plan.price}</span>
                  {plan.price !== "0" && (
                    <span className="text-muted-foreground">/pack</span>
                  )}
                </div>
                <p className="text-sm text-primary font-medium mt-1">
                  {plan.credits} credits
                </p>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.isFree ? (
                <Button
                  variant={plan.ctaVariant}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a
                    href={CHROME_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {plan.cta}
                  </a>
                </Button>
              ) : (
                <Button
                  variant={plan.ctaVariant}
                  size="lg"
                  className="w-full"
                  onClick={() => handlePurchase(plan.credits)}
                  disabled={loadingPack === plan.credits}
                >
                  {loadingPack === plan.credits ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    plan.cta
                  )}
                </Button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Credit explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-6 bg-accent/50 rounded-2xl border border-border max-w-3xl mx-auto"
        >
          <h4 className="font-semibold text-foreground mb-3 text-center">
            How Credits Work
          </h4>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Light & Balanced Rewrites</p>
                <p className="text-muted-foreground">1 credit per generation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-secondary flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Strong & Full Rewrites</p>
                <p className="text-muted-foreground">2 credits per generation</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-8">
          <Link
            to="/pricing"
            className="text-primary hover:text-primary/80 font-medium text-sm underline-offset-4 hover:underline"
          >
            View detailed pricing comparison →
          </Link>
        </div>
      </div>
    </section>
  );
};
