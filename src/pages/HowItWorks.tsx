import { motion } from "framer-motion";
import { 
  Upload, 
  Search, 
  Sparkles, 
  Download, 
  CheckCircle2,
  Chrome,
  Globe,
  FileText,
  Lightbulb
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    icon: Chrome,
    title: "Install the Extension",
    description: "Add Resume Tailor to Chrome from the Web Store. It takes just 30 seconds and is completely free to get started.",
    tips: ["Works with Chrome, Edge, and Brave browsers", "No account required to install"],
  },
  {
    number: 2,
    icon: Upload,
    title: "Upload Your Resume",
    description: "Upload your existing resume (PDF or DOCX). We'll securely store it and use it as the base for all tailored versions.",
    tips: ["Upload once, use for all applications", "Your formatting is preserved"],
  },
  {
    number: 3,
    icon: Search,
    title: "Visit Any Job Posting",
    description: "Browse jobs on LinkedIn, Indeed, Glassdoor, or any job site. Our extension automatically detects the job details.",
    tips: ["Works on any website with job descriptions", "No copy-pasting required"],
  },
  {
    number: 4,
    icon: Sparkles,
    title: "Choose Your Intensity",
    description: "Select how much tailoring you want—from light keyword optimization to a complete rewrite.",
    tips: ["Light & Balanced: 1 credit", "Strong & Full: 2 credits"],
  },
  {
    number: 5,
    icon: Download,
    title: "Download & Apply",
    description: "Get your tailored resume instantly as PDF or DOCX. Submit directly to the job application.",
    tips: ["Instant generation", "Multiple format options"],
  },
];

const supportedSites = [
  "LinkedIn",
  "Indeed",
  "Glassdoor",
  "ZipRecruiter",
  "Monster",
  "CareerBuilder",
  "AngelList",
  "Dice",
  "SimplyHired",
  "Company Career Pages",
];

const tips = [
  {
    icon: FileText,
    title: "Start with a Strong Base Resume",
    description: "The better your original resume, the better the tailored output. Make sure your base resume is well-structured and comprehensive.",
  },
  {
    icon: Lightbulb,
    title: "Use the Right Intensity Level",
    description: "For similar roles, use 'Light' or 'Balanced'. For career changes or highly competitive positions, use 'Strong' or 'Full'.",
  },
  {
    icon: CheckCircle2,
    title: "Review Before Submitting",
    description: "Always review the tailored resume before submitting. The AI is powerful, but a human review ensures everything is perfect.",
  },
];

const HowItWorks = () => {
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
              How Resume Tailor Works
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Get personalized resumes in seconds. Here's a step-by-step guide.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://chrome.google.com/webstore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Chrome className="w-5 h-5 mr-2" />
                Add to Chrome — It's Free
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-full gradient-bg text-primary-foreground font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                    <h2 className="text-2xl font-bold text-foreground">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.tips.map((tip) => (
                      <li key={tip} className="flex items-center gap-2 justify-center lg:justify-start">
                        <CheckCircle2 className="w-5 h-5 text-success" />
                        <span className="text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-3xl gradient-bg flex items-center justify-center shadow-xl">
                    <step.icon className="w-16 h-16 text-primary-foreground" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Sites */}
      <section className="section-padding bg-accent/30">
        <div className="container-wide mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Works on All Job Sites
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Resume Tailor works on any website with a job description. Here are some popular ones:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {supportedSites.map((site) => (
              <span
                key={site}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground"
              >
                {site}
              </span>
            ))}
            <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
              + Any other site!
            </span>
          </motion.div>
        </div>
      </section>

      {/* Tips */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Tips for Best Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Get the most out of Resume Tailor with these pro tips.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-6 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <tip.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {tip.title}
                </h3>
                <p className="text-muted-foreground">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent/30">
        <div className="container-narrow mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Install the extension and start tailoring your resume in minutes.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://chrome.google.com/webstore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Chrome className="w-5 h-5 mr-2" />
                Add to Chrome — It's Free
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
