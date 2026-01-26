import { motion } from "framer-motion";
import { Chrome, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CHROME_STORE_URL } from "@/config/constants";

export const CTASection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative container-narrow mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Start with 3 free credits</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Land Your{" "}
            <span className="gradient-text">Dream Job?</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of job seekers who are getting more interviews with AI-tailored resumes. 
            Try it free today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-3"
              >
                <Chrome className="w-5 h-5" />
                Add to Chrome — It's Free
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required • Works on all job sites • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};
