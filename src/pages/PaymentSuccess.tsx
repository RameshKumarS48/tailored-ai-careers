import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Chrome } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CHROME_STORE_URL } from "@/config/constants";

const PaymentSuccess = () => {
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

            {/* Message */}
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              Your credits have been added to your account. Return to the Resume Tailor
              extension to start generating tailored resumes.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a
                  href={CHROME_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-3"
                >
                  <Chrome className="w-5 h-5" />
                  Open Extension
                </a>
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
              Credits not showing? Try refreshing the extension popup or wait a few moments for processing.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PaymentSuccess;
