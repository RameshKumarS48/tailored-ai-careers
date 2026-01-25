import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const Privacy = () => {
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
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
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
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8">
              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Resume Tailor ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our Chrome extension and services.
                </p>
              </div>

              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Resume Data</h3>
                    <p className="leading-relaxed">
                      When you upload your resume, we store it securely to enable the resume tailoring functionality. Your resume content is only used to generate tailored versions when you explicitly request them.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Job Descriptions</h3>
                    <p className="leading-relaxed">
                      When you use the extension on a job posting, we temporarily process the job description text to tailor your resume. We do not permanently store job descriptions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Account Information</h3>
                    <p className="leading-relaxed">
                      We collect your email address and payment information (processed by Paddle) when you create an account or purchase credits.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Usage Data</h3>
                    <p className="leading-relaxed">
                      We collect anonymous usage statistics to improve our service, such as feature usage and error logs. This data cannot be used to identify you personally.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>To provide the resume tailoring service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>To process payments and manage your account</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>To send important service updates and notifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>To improve our service based on anonymized usage data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>To respond to support requests</span>
                  </li>
                </ul>
              </div>

              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Storage & Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your data is stored securely using Supabase, a trusted cloud database platform. We implement industry-standard security measures including:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                    <span>Encryption at rest and in transit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                    <span>Regular security audits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                    <span>Access controls and authentication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                    <span>Secure backup procedures</span>
                  </li>
                </ul>
              </div>

              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">AI Processing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use Claude AI (by Anthropic) to process your resume and job descriptions for tailoring. When you request a tailored resume, your data is sent securely to the AI for processing. The AI does not store your data after processing is complete.
                </p>
              </div>

              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">We do not sell your data.</strong> We only share data with:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Paddle</strong> – for payment processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Anthropic (Claude AI)</strong> – for resume tailoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Supabase</strong> – for secure data storage</span>
                  </li>
                </ul>
              </div>

              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Access your personal data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Request correction of inaccurate data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Request deletion of your data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Export your data</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise these rights, contact us at <a href="mailto:privacy@resumetailor.app" className="text-primary hover:underline">privacy@resumetailor.app</a>.
                </p>
              </div>

              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at <a href="mailto:privacy@resumetailor.app" className="text-primary hover:underline">privacy@resumetailor.app</a>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
