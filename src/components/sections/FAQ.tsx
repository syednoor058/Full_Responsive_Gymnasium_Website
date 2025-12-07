import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are your operating hours?",
    answer:
      "We're open 24/7 for our premium members. Regular members can access the gym from 5 AM to 11 PM, seven days a week. Our staffed hours are from 6 AM to 10 PM.",
  },
  {
    question: "Do you offer personal training?",
    answer:
      "Yes! We have a team of certified personal trainers available for one-on-one sessions. Each trainer specializes in different areas including strength training, weight loss, sports performance, and rehabilitation.",
  },
  {
    question: "Is there a trial period?",
    answer:
      "Absolutely! We offer a free 7-day trial for first-time visitors. This includes full access to all gym equipment, group classes, and a complimentary fitness assessment.",
  },
  {
    question: "What classes do you offer?",
    answer:
      "We offer a wide variety of classes including HIIT, yoga, spin, boxing, Pilates, Zumba, and strength training. Check our schedule for class times and availability.",
  },
  {
    question: "Can I freeze my membership?",
    answer:
      "Yes, members can freeze their membership for up to 3 months per year. This is perfect for extended vacations or medical reasons. Contact our front desk to arrange this.",
  },
  {
    question: "Do you have showers and lockers?",
    answer:
      "Yes, we provide clean, spacious locker rooms with showers, saunas, and complimentary toiletries. Lockers are available for daily use, with premium lockers available for rent.",
  },
];

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display uppercase tracking-[0.3em] text-sm mb-4 block">
            Got Questions?
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
            FAQ
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(0, 3).map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card/50 border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left font-display uppercase tracking-wide text-sm hover:text-primary hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(3).map((faq, index) => (
                <AccordionItem
                  key={index + 3}
                  value={`item-${index + 3}`}
                  className="bg-card/50 border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left font-display uppercase tracking-wide text-sm hover:text-primary hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
