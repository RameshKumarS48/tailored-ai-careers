import { motion } from "framer-motion";
import { 
  Sparkles, 
  MousePointerClick, 
  FileText, 
  Sliders, 
  Download, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Personalization",
    description: "Claude AI analyzes job requirements and intelligently tailors your resume to match key qualifications.",
  },
  {
    icon: MousePointerClick,
    title: "One-Click Generation",
    description: "Works seamlessly on LinkedIn, Indeed, Glassdoor, and any job posting site with a single click.",
  },
  {
    icon: FileText,
    title: "Format Preservation",
    description: "Your resume's professional formatting and structure stay intact. No more reformatting headaches.",
  },
  {
    icon: Sliders,
    title: "Multiple Intensity Levels",
    description: "Choose from light keyword updates to complete rewrites. You control how much changes.",
  },
  {
    icon: Download,
    title: "Instant PDF/DOCX Download",
    description: "Download your tailored resume immediately in your preferred format. Ready to submit.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is encrypted and never sold. We only use it to tailor your resumes.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="section-padding bg-accent/30">
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Stand Out</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you create the perfect resume for every opportunity.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group card-elevated p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
