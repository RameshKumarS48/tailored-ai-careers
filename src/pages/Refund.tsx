import { motion } from "framer-motion";
import { RotateCcw, Mail, Clock, CheckCircle2, XCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const Refund = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-accent/50 to-background">
        <div className="container-narrow mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <RotateCcw className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Refund Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 26, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Overview */}
            <div className="card-elevated p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Resume Tailor, we want you to be completely satisfied with your purchase. We offer a fair and transparent refund policy for credit purchases. Please read the following guidelines carefully.
              </p>
            </div>

            {/* Refund Eligibility */}
            <div className="card-elevated p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Clock className="w-6 h-6 text-primary" />
                Refund Eligibility
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  You are eligible for a full refund if:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>You request a refund within <strong className="text-foreground">30 days</strong> of your purchase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>You have <strong className="text-foreground">unused credits</strong> remaining in your account</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>You have not violated our Terms of Service</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Partial Refunds */}
            <div className="card-elevated p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Partial Refunds</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have used some credits from your purchase, you may be eligible for a <strong className="text-foreground">partial refund</strong> for the unused portion:
              </p>
              <div className="bg-accent/50 rounded-lg p-4 text-sm">
                <p className="text-foreground font-medium mb-2">Calculation:</p>
                <p className="text-muted-foreground">
                  Refund Amount = (Unused Credits / Total Credits Purchased) × Original Purchase Price
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                For example, if you purchased 10 credits for $8.99 and used 3 credits, you would be eligible for a refund of approximately $6.29 (7 unused credits).
              </p>
            </div>

            {/* Non-Refundable */}
            <div className="card-elevated p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <XCircle className="w-6 h-6 text-destructive" />
                Non-Refundable Situations
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <span>Free trial credits (3 credits provided at signup)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <span>Credits that have already been used for resume generation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <span>Refund requests made more than 30 days after purchase</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <span>Accounts found to be in violation of our Terms of Service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <span>Promotional or discounted credits (unless otherwise stated)</span>
                </li>
              </ul>
            </div>

            {/* How to Request */}
            <div className="card-elevated p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">How to Request a Refund</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  To request a refund, please follow these steps:
                </p>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
                    <span>Send an email to <a href="mailto:support@resumetailor.app" className="text-primary hover:underline">support@resumetailor.app</a> with the subject line "Refund Request"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
                    <span>Include your account email address and the date of purchase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
                    <span>Provide a brief reason for your refund request (optional but helpful)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">4</span>
                    <span>We will review your request and respond within 2-3 business days</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Processing Time */}
            <div className="card-elevated p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Processing Time</h2>
              <p className="text-muted-foreground leading-relaxed">
                Once your refund is approved, it will be processed within <strong className="text-foreground">5-10 business days</strong>. The refund will be credited to the original payment method used for the purchase. Please note that your bank or payment provider may take additional time to reflect the refund in your account.
              </p>
            </div>

            {/* Technical Issues */}
            <div className="card-elevated p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Technical Issues</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you experienced technical issues that prevented you from using the service properly, please contact us at <a href="mailto:support@resumetailor.app" className="text-primary hover:underline">support@resumetailor.app</a>. We will work with you to resolve the issue or provide appropriate compensation, including potential credit restoration or refunds on a case-by-case basis.
              </p>
            </div>

            {/* Contact */}
            <div className="card-elevated p-8 text-center">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">Questions?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have any questions about our refund policy, please don't hesitate to reach out.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:support@resumetailor.app">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Support
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Refund;
