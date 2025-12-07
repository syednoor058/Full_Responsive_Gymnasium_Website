import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-secondary">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display uppercase tracking-[0.3em] text-sm mb-4 block">
            Contact Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="bg-transparent border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary h-12"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary h-12"
                />
              </div>
              <Input
                placeholder="Subject"
                className="bg-transparent border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary h-12"
              />
              <Textarea
                placeholder="Your Message"
                rows={5}
                className="bg-transparent border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary resize-none"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-display uppercase tracking-wider w-full h-12">
                Send Message
              </Button>
            </form>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold uppercase mb-1">Location</h4>
                  <p className="text-muted-foreground text-sm">
                    123 Fitness Street<br />New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold uppercase mb-1">Phone</h4>
                  <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold uppercase mb-1">Email</h4>
                  <p className="text-muted-foreground text-sm">info@pulsefitness.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold uppercase mb-1">Hours</h4>
                  <p className="text-muted-foreground text-sm">24/7 for Premium Members</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-[400px] lg:h-full min-h-[400px] rounded overflow-hidden"
          >
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1699900000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fit Fusion Location"
              />
            </div>
          </motion.div>
        </div>
    </section>
  );
};
