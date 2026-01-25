import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How does Resume Tailor work?",
    answer: "Resume Tailor uses Claude AI to analyze job postings and intelligently tailor your resume to match the requirements. Simply upload your resume once, visit any job posting, and click to generate a customized version that highlights your most relevant experience.",
  },
  {
    question: "What job sites does it work with?",
    answer: "Resume Tailor works with any job posting website including LinkedIn, Indeed, Glassdoor, ZipRecruiter, company career pages, and more. If you can view the job description in your browser, our extension can analyze it.",
  },
  {
    question: "Will the tailored resume still sound like me?",
    answer: "Absolutely! Resume Tailor enhances your existing resume by reorganizing and emphasizing relevant experience. It doesn't fabricate skills or experience—it optimizes what you already have to better match job requirements.",
  },
  {
    question: "What are the rewrite intensity levels?",
    answer: "We offer four levels: Light Refresh (minor keyword optimization), Balanced (thoughtful restructuring), Strong Enhancement (significant tailoring), and Full Rewrite (complete restructure for maximum match). Light and Balanced use 1 credit; Strong and Full use 2 credits.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes! Your resume is encrypted and stored securely. We never sell your data or share it with third parties. Your resume is only used to generate tailored versions when you request them.",
  },
  {
    question: "Do credits expire?",
    answer: "No, your credits never expire. Buy them when you need them and use them at your own pace. There are no subscriptions or recurring charges.",
  },
];

export const FAQSection = () => {
  return (
    <section className="section-padding bg-background" id="faq">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elevated px-6 border rounded-xl"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <div className="text-center mt-8">
          <Link
            to="/faq"
            className="text-primary hover:text-primary/80 font-medium text-sm underline-offset-4 hover:underline"
          >
            View all FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
};
