import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  { icon: MapPin, title: "Location", detail: "123 Fitness Street, New York, NY 10001" },
  { icon: Phone, title: "Phone", detail: "+1 (555) 123-4567" },
  { icon: Mail, title: "Email", detail: "info@pulsefitness.com" },
  { icon: Clock, title: "Hours", detail: "24/7 for Premium Members" },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="contact" className="section-padding bg-background relative border-t border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-display uppercase tracking-[0.2em] text-xs mb-6">
          Contact Us
        </span>
        <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tight">
          Get In <span className="text-primary">Touch</span>
        </h2>
      </motion.div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-2 space-y-8"
          >
            <form className="glass-card p-8 md:p-10 space-y-6">
              <h3 className="font-display text-2xl font-bold uppercase mb-4 text-white">Send a Message</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-semibold text-white/50 tracking-widest pl-1">Name</label>
                  <Input
                    placeholder="John Doe"
                    className="bg-black/20 border-white/10 text-white placeholder:text-white/20 focus:border-primary h-12 rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-semibold text-white/50 tracking-widest pl-1">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-black/20 border-white/10 text-white placeholder:text-white/20 focus:border-primary h-12 rounded-lg"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-semibold text-white/50 tracking-widest pl-1">Subject</label>
                <Input
                  placeholder="Membership Inquiry"
                  className="bg-black/20 border-white/10 text-white placeholder:text-white/20 focus:border-primary h-12 rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-semibold text-white/50 tracking-widest pl-1">Message</label>
                <Textarea
                  placeholder="How can we help you?"
                  rows={4}
                  className="bg-black/20 border-white/10 text-white placeholder:text-white/20 focus:border-primary resize-none rounded-lg"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-white hover:text-primary text-white font-display uppercase tracking-widest h-14 group/btn transition-colors duration-300">
                <Send className="mr-2 w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                Submit Intention
              </Button>
            </form>
          </motion.div>

          {/* Info and Map */}
          <div className="lg:col-span-3 flex flex-col gap-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid sm:grid-cols-2 gap-6"
            >
              {contactInfo.map((info, i) => (
                <motion.div key={i} variants={itemVariants} className="flex gap-5 items-start p-6 rounded-2xl bg-secondary/50 border border-white/5 hover:border-primary/30 transition-colors group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold uppercase tracking-wider text-white mb-2">{info.title}</h4>
                    <p className="text-muted-foreground/80 leading-relaxed text-sm">
                      {info.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-[300px] md:h-[400px] rounded-3xl overflow-hidden relative shadow-2xl border border-white/10 group"
            >
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay z-10" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1699900000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fit Fusion Location"
                className="absolute inset-0"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
