import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

export const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <Quote className="w-16 h-16 text-primary-foreground/30 mx-auto mb-6" />

          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary-foreground text-primary-foreground" />
            ))}
          </div>

          <blockquote className="text-2xl md:text-3xl lg:text-4xl text-primary-foreground font-display leading-relaxed mb-8">
            "Fit Fusion completely transformed my approach to fitness. The trainers are 
            exceptional, and the community keeps me motivated every single day. I've never 
            felt stronger or more confident in my life!"
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-foreground/30">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                alt="Sarah Mitchell"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-display text-xl font-semibold text-primary-foreground uppercase">
                Sarah Mitchell
              </p>
              <p className="text-primary-foreground/70">Member since 2022</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
