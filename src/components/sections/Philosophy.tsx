import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

export const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-display uppercase tracking-[0.3em] text-sm mb-4 block">
              Our Philosophy
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-8 leading-tight">
              We Believe In
              <br />
              <span className="text-primary">Your Potential</span>
            </h2>

            <div className="relative">
              <Quote className="absolute -left-4 -top-4 w-12 h-12 text-primary/20" />
              <blockquote className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic pl-8 border-l-4 border-primary">
                "At Fit Fusion, we believe that fitness is not just about physical 
                transformation—it's about building mental strength, confidence, and 
                a lifestyle that empowers you to be your best self every single day."
              </blockquote>
            </div>

            <p className="text-muted-foreground mt-8">
              Our approach combines cutting-edge training methods with personalized attention. 
              Every member is unique, and so is every fitness journey. We're here to guide, 
              motivate, and celebrate every milestone with you.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-display font-semibold uppercase">Marcus Johnson</p>
                <p className="text-muted-foreground text-sm">Founder & Head Coach</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop"
                alt="Training session"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-lg">
              <p className="font-display text-4xl font-bold text-primary-foreground">10+</p>
              <p className="text-primary-foreground/80 text-sm uppercase tracking-wide">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
