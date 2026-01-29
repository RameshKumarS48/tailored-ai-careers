import { motion } from "framer-motion";
import { HelpCircle, Mail, Chrome, MessageSquare } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CHROME_STORE_URL } from "@/config/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Getting Started",
    faqs: [
      {
        question: "How do I install Resume Tailor?",
        answer: "Visit the Chrome Web Store, search for 'Resume Tailor', and click 'Add to Chrome'. The extension will be installed automatically.",
      },
      {
        question: "Is Resume Tailor really free to try?",
        answer: "Yes! Every new user gets 5 free credits to try the extension. No credit card required.",
      },
      {
        question: "What browsers are supported?",
        answer: "Resume Tailor works on Chrome, Edge, Brave, and other Chromium-based browsers.",
      },
    ],
  },
  {
    title: "Using the Extension",
    faqs: [
      {
        question: "How does Resume Tailor work?",
        answer: "Simply upload your resume once, then visit any job posting. Click the extension icon, choose your rewrite intensity, and get a tailored resume in seconds.",
      },
      {
        question: "What job sites does it work with?",
        answer: "Resume Tailor works with any website that displays a job description, including LinkedIn, Indeed, Glassdoor, ZipRecruiter, and company career pages.",
      },
      {
        question: "Will my resume still sound like me?",
        answer: "Absolutely! Resume Tailor optimizes and tailors your existing experience—it doesn't fabricate information. Your authentic voice is preserved.",
      },
      {
        question: "What file formats are supported?",
        answer: "You can upload PDF or DOCX files. Tailored resumes can be downloaded in either format.",
      },
    ],
  },
  {
    title: "Credits & Pricing",
    faqs: [
      {
        question: "How do credits work?",
        answer: "Each resume generation uses credits. Light and Balanced rewrites use 1 credit, while Strong Enhancement and Full Rewrite use 2 credits.",
      },
      {
        question: "Do credits expire?",
        answer: "No, credits never expire. Buy them when you need them and use them at your own pace.",
      },
      {
        question: "Can I get a refund?",
        answer: "Yes, we offer refunds for unused credits within 30 days of purchase. Contact our support team for assistance.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We use Paddle for payment processing, which supports all major credit cards, PayPal, and various local payment methods worldwide.",
      },
    ],
  },
  {
    title: "Privacy & Security",
    faqs: [
      {
        question: "Is my resume data secure?",
        answer: "Yes! Your resume is encrypted and stored securely. We use industry-standard security practices to protect your data.",
      },
      {
        question: "Do you sell my data?",
        answer: "Never. Your data is only used to generate tailored resumes. We never sell or share your information with third parties.",
      },
      {
        question: "What data does the AI process?",
        answer: "The AI only processes your resume text and the job description to generate tailored content. No other personal data is accessed.",
      },
      {
        question: "Can I delete my data?",
        answer: "Yes, you can request complete data deletion at any time by contacting our support team.",
      },
    ],
  },
  {
    title: "Troubleshooting",
    faqs: [
      {
        question: "The extension isn't detecting the job posting",
        answer: "Make sure the job description is fully loaded on the page. Try refreshing the page or scrolling to ensure all content is visible.",
      },
      {
        question: "My resume formatting looks different",
        answer: "While we preserve most formatting, some complex layouts may be slightly adjusted. For best results, use clean, professional resume templates.",
      },
      {
        question: "Generation is taking too long",
        answer: "Generation typically takes 10-30 seconds. If it's taking longer, check your internet connection and try again.",
      },
    ],
  },
];

const FAQ = () => {
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
            <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about Resume Tailor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${categoryIndex}-${index}`}
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
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-accent/30">
        <div className="container-narrow mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our support team is here to help. Reach out anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:support@resumetailor.app">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Support
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a
                  href={CHROME_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Chrome className="w-5 h-5 mr-2" />
                  Chrome Web Store Reviews
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
