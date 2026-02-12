import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Chrome, CreditCard, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CHROME_STORE_URL } from "@/config/constants";
import { isLoggedIn, getToken } from "@/lib/auth";
import { apiRequest } from "@/lib/api";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const creditsPurchased = searchParams.get("credits");
  const [balance, setBalance] = useState<number | null>(null);
  const [loadingBalance, setLoadingBalance] = useState(false);

  useEffect(() => {
    if (!isLoggedIn()) return;

    const fetchBalance = async () => {
      setLoadingBalance(true);
      try {
        const token = getToken();
        const data = await apiRequest<{ credits_remaining: number }>(
          "/credits/balance",
          "GET",
          undefined,
          token
        );
        setBalance(data.credits_remaining);
      } catch {
        // Balance fetch is non-critical
      } finally {
        setLoadingBalance(false);
      }
    };

    fetchBalance();
  }, []);

  return (
    <Layout>
      <section className="section-padding min-h-[70vh] flex items-center justify-center">
        <div className="container-narrow mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Success Icon */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-success" />
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Payment Successful!
            </h1>

            {/* Credit balance */}
            {loadingBalance ? (
              <div className="flex items-center justify-center gap-2 mb-6 text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin" />
                Loading balance...
              </div>
            ) : balance !== null ? (
              <div className="mb-6 inline-flex items-center gap-2 bg-accent/50 border border-border rounded-xl px-6 py-3">
                <CreditCard className="w-5 h-5 text-primary" />
                <span className="text-lg font-semibold text-foreground">
                  {balance} credits available
                </span>
              </div>
            ) : null}

            {/* Message */}
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              {creditsPurchased
                ? `Your ${creditsPurchased} credits have been added to your account.`
                : "Your credits have been added to your account."}{" "}
              Open the Resume Tailor extension in your browser toolbar to start generating tailored resumes.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/pricing" className="gap-3">
                  <CreditCard className="w-5 h-5" />
                  Buy More Credits
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/" className="gap-3">
                  Back to Home
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Help text */}
            <p className="mt-8 text-sm text-muted-foreground">
              Credits not showing in the extension? Try refreshing the extension popup or wait a few moments for processing.
            </p>

            {/* Install extension prompt */}
            <div className="mt-6 p-4 bg-accent/30 rounded-xl border border-border inline-block">
              <p className="text-sm text-muted-foreground mb-3">
                Don't have the extension yet?
              </p>
              <Button variant="gradient" size="default" asChild>
                <a
                  href={CHROME_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Chrome className="w-4 h-4" />
                  Install Chrome Extension
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PaymentSuccess;
