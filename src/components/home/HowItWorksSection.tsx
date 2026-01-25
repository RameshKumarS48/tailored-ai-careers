import { motion } from "framer-motion";
import { Upload, Search, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Your Resume",
    description: "Upload your existing resume once. We'll securely store it and preserve your formatting.",
  },
  {
    icon: Search,
    number: "02",
    title: "Visit Any Job Posting",
    description: "Browse jobs on LinkedIn, Indeed, Glassdoor, or any job site. Our extension detects job details automatically.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Generate & Download",
    description: "Click to generate a tailored resume. Download as PDF or DOCX in seconds.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-background" id="how-it-works">
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get a personalized resume in three simple steps. No more manual customization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-secondary/30" />
              )}

              <div className="text-center">
                {/* Icon */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center shadow-lg">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-primary text-primary text-sm font-bold flex items-center justify-center">
                    {step.number.slice(-1)}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow on mobile */}
        <div className="flex justify-center mt-8 md:hidden">
          <ArrowRight className="w-6 h-6 text-primary rotate-90" />
        </div>
      </div>
    </section>
  );
};
