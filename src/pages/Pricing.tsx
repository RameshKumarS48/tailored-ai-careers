import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Crown, Zap, Sparkles, HelpCircle, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CHROME_STORE_URL } from "@/config/constants";
import { isLoggedIn, getToken } from "@/lib/auth";
import { apiRequest } from "@/lib/api";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    variant: "heroOutline" as const,
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
    variant: "heroOutline" as const,
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
    variant: "hero" as const,
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
    variant: "heroOutline" as const,
    popular: false,
    isFree: false,
  },
];

const rewriteLevels = [
  {
    level: 1,
    name: "Light Refresh",
    credits: 1,
    description: "Minor keyword optimization",
    details: "Adjusts terminology and adds relevant keywords while keeping your content nearly identical.",
  },
  {
    level: 2,
    name: "Balanced",
    credits: 1,
    description: "Thoughtful restructuring",
    details: "Reorders sections, enhances bullet points, and optimizes phrasing for the specific role.",
  },
  {
    level: 3,
    name: "Strong Enhancement",
    credits: 2,
    description: "Significant tailoring",
    details: "Rewrites most content to strongly align with job requirements while maintaining your experience.",
  },
  {
    level: 4,
    name: "Full Rewrite",
    credits: 2,
    description: "Complete restructure",
    details: "Comprehensive rewrite for maximum match. Best for career transitions or highly competitive roles.",
  },
];

const pricingFaqs = [
  {
    question: "Do credits expire?",
    answer: "No! Your credits never expire. Buy them when you need them and use them at your own pace.",
  },
  {
    question: "Can I get a refund?",
    answer: "We offer refunds for unused credits within 30 days of purchase. Contact support for assistance.",
  },
  {
    question: "Why do some rewrites cost 2 credits?",
    answer: "Levels 3 and 4 (Strong Enhancement and Full Rewrite) require significantly more AI processing to deliver a comprehensive rewrite, hence the higher credit cost.",
  },
  {
    question: "How do I purchase credits?",
    answer: "You can purchase credits right here on this page or within the Chrome extension. Sign in, pick a pack, and complete secure checkout via DodoPayments.",
  },
  {
    question: "Is there a subscription option?",
    answer: "We intentionally chose a credit-based model to give you full control. No recurring charges—only pay when you need credits.",
  },
];

const Pricing = () => {
  const navigate = useNavigate();
  const [loadingPack, setLoadingPack] = useState<number | null>(null);
  const [error, setError] = useState("");

  const handlePurchase = async (credits: number) => {
    setError("");

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
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Checkout failed";
      setError(message);
    } finally {
      setLoadingPack(null);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-accent/50 to-background">
        <div className="container-wide mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No subscriptions. No hidden fees. Buy credits when you need them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Error banner */}
      {error && (
        <div className="container-wide mx-auto px-4 -mb-4 mt-4">
          <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive text-center">
            {error}
          </div>
        </div>
      )}

      {/* Pricing Cards */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
                    variant={plan.variant}
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
                    variant={plan.variant}
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
        </div>
      </section>

      {/* Rewrite Levels Comparison */}
      <section className="section-padding bg-accent/30">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Rewrite Intensity Levels
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose how much you want your resume tailored for each application.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewriteLevels.map((level, index) => (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold gradient-text">
                    Level {level.level}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium text-primary bg-accent px-2 py-1 rounded-full">
                    {level.credits === 1 ? (
                      <Zap className="w-4 h-4" />
                    ) : (
                      <Sparkles className="w-4 h-4" />
                    )}
                    {level.credits} {level.credits === 1 ? "credit" : "credits"}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {level.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {level.description}
                </p>
                <p className="text-sm text-muted-foreground/80">
                  {level.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <HelpCircle className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pricing Questions
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {pricingFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elevated px-6 border rounded-xl"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
