import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const FreeTrial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-12 md:py-24 overflow-hidden flex items-center justify-center">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 bg-secondary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/40 via-background to-background" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[100px] pointer-events-none"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex justify-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-3xl w-full"
        >
          <div className="glass-card p-8 md:p-14 lg:p-16 border border-white/10 shadow-[0_0_50px_rgba(255,0,51,0.15)] text-center relative overflow-hidden group">
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_2s_infinite]" />

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 leading-tight">
              Amaze Yourself.<br />
              Start Your <span className="text-primary">Free Trial</span>
            </h2>
            <p className="text-muted-foreground/90 text-lg mb-10 max-w-xl mx-auto">
              Experience the energy, the community, and the results at Pulse Fitness.
              Claim your 7-day all-access pass with zero commitments.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative z-20">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-background/80 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary h-14 rounded-xl px-6 text-lg shadow-inner"
              />
              <Button className="bg-primary hover:bg-white hover:text-primary text-white font-display uppercase tracking-widest h-14 px-8 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,0,51,0.5)] whitespace-nowrap group/btn">
                Claim Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </form>

            <p className="text-muted-foreground/50 text-xs mt-6 uppercase tracking-wider">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
