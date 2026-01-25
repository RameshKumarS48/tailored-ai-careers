import { motion } from "framer-motion";
import { Chrome, Play, Sparkles, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/50 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative container-wide mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Resume Personalization</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Land More Interviews with{" "}
              <span className="gradient-text">AI-Tailored Resumes</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Automatically personalize your resume to match any job posting in seconds. 
              Stop sending generic resumes—start getting callbacks.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="xl" asChild>
                <a
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-3"
                >
                  <Chrome className="w-5 h-5" />
                  Add to Chrome — It's Free
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/how-it-works" className="gap-3">
                  <Play className="w-5 h-5" />
                  See How It Works
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-success" />
                <span>Privacy Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>3 Free Credits</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span>Powered by Claude AI</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Extension Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-lg">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              
              {/* Extension mockup */}
              <div className="relative card-elevated p-6 rounded-2xl">
                {/* Browser bar mockup */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                    <div className="w-3 h-3 rounded-full bg-success/70" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-7 bg-muted rounded-md flex items-center px-3">
                      <span className="text-xs text-muted-foreground">linkedin.com/jobs/view/...</span>
                    </div>
                  </div>
                </div>

                {/* Extension popup mockup */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Resume Tailor</h3>
                      <p className="text-xs text-muted-foreground">Ready to tailor your resume</p>
                    </div>
                  </div>

                  <div className="p-4 bg-accent/50 rounded-lg border border-primary/10">
                    <p className="text-sm text-foreground mb-2 font-medium">Detected Job:</p>
                    <p className="text-sm text-muted-foreground">Senior Product Designer at Tech Corp</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Rewrite Intensity:</p>
                    <div className="grid grid-cols-4 gap-2">
                      {["Light", "Balanced", "Strong", "Full"].map((level, i) => (
                        <button
                          key={level}
                          className={`text-xs py-2 px-3 rounded-md font-medium transition-all ${
                            i === 1
                              ? "gradient-bg text-primary-foreground"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button variant="gradient" className="w-full" size="lg">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Tailored Resume
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Uses 1 credit • 5 credits remaining
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 p-3 bg-card rounded-xl shadow-lg border border-border"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-success" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Instant PDF</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 p-3 bg-card rounded-xl shadow-lg border border-border"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Secure & Private</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
