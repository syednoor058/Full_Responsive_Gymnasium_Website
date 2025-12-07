import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const FreeTrial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=2031&auto=format&fit=crop"
          alt="Gym interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background" />
      </div>

      <div className="relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-primary font-display uppercase tracking-[0.3em] text-sm mb-4 block">
            Start Today
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6">
            Join Us For A{" "}
            <span className="text-primary">Free Trial</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Experience everything Pulse Fitness has to offer with a complimentary 7-day trial. 
            No commitment required.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary h-12"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-display uppercase tracking-wider h-12 px-8 group whitespace-nowrap">
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <p className="text-muted-foreground/60 text-sm mt-4">
            By signing up, you agree to our Terms & Privacy Policy
          </p>
        </motion.div>
      </div>
    </section>
  );
};
