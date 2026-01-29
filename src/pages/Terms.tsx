import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const Terms = () => {
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
            <FileText className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 25, 2026
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
          >
            <div className="space-y-8">
              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By installing, accessing, or using Resume Tailor ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.
                </p>
              </div>

              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Resume Tailor is a Chrome browser extension that uses AI technology to help users tailor their existing resumes to match specific job descriptions. The Service does not create resumes from scratch or fabricate experience.
                </p>
              </div>

              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Credit System</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    The Service operates on a credit-based system:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>New users receive 5 free credits upon registration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Light and Balanced rewrite levels cost 1 credit per generation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Strong Enhancement and Full Rewrite levels cost 2 credits per generation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Credits do not expire</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Credits are non-transferable</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Payments and Refunds</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Payments are processed by Paddle, our merchant of record. Paddle handles all billing, taxes, and currency conversion.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Refund Policy:</strong> We offer refunds for unused credits within 30 days of purchase. To request a refund, contact <a href="mailto:support@resumetailor.app" className="text-primary hover:underline">support@resumetailor.app</a>. Used credits are non-refundable.
                  </p>
                </div>
              </div>

              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Acceptable Use</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree NOT to:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Upload resumes containing false or misleading information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Use the Service to generate fraudulent documents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Attempt to reverse engineer or exploit the Service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Share your account credentials with others</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Use automated tools to access the Service</span>
                  </li>
                </ul>
              </div>

              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You retain ownership of your resume content. By using the Service, you grant us a limited license to process your resume solely for the purpose of providing the tailoring service. Generated tailored resumes are your property.
                </p>
              </div>

              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Service is provided "as is" without warranties of any kind. We do not guarantee that using the Service will result in job interviews or employment. The AI-generated content should be reviewed for accuracy before submission to employers.
                </p>
              </div>

              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, Resume Tailor shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.
                </p>
              </div>

              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Account Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to suspend or terminate accounts that violate these Terms. You may delete your account at any time by contacting support.
                </p>
              </div>

              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update these Terms from time to time. We will notify you of significant changes via email or through the Service. Continued use of the Service after changes constitutes acceptance of the new Terms.
                </p>
              </div>

              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms, contact us at <a href="mailto:legal@resumetailor.app" className="text-primary hover:underline">legal@resumetailor.app</a>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
