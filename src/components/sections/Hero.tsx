import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowRight, Play, Users, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import headerCover from "@/assets/header-cover.jpg";
import { useRef } from "react";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY, opacity }}
      >
        <img
          src={headerCover}
          alt="Athlete training in gym"
          className="w-full h-full object-cover object-top transform scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/20 to-background/60" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute right-4 md:right-12 bottom-1/4 z-20 hidden lg:flex flex-col gap-6"
      >
        <div className="glass-card p-4 flex items-center gap-4 animate-bounce hover:scale-105 transition-transform" style={{ animationDuration: '4s' }}>
          <div className="bg-primary/20 p-3 rounded-full text-primary">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xl font-bold font-display">50+</p>
            <p className="text-xs text-muted-foreground uppercase">Expert Classes</p>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 pt-32 pb-20">
        <motion.div
          className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-display uppercase tracking-[0.2em] text-xs md:text-sm mb-6 backdrop-blur-md">
              Welcome to Pulse Fitness
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl md:text-6xl lg:text-[5rem] font-bold uppercase leading-[0.9] mb-6 tracking-tighter"
          >
            Forge Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-600 to-primary">
              Legacy
            </span>
            <br />
            With Us
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 mx-auto lg:mx-0 font-light"
          >
            Transcend your limits with elite coaching, cutting-edge equipment,
            and a relentless community built for champions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-display uppercase tracking-widest text-lg px-10 py-7 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center">
                Start Free Trial
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 font-display uppercase tracking-widest text-lg px-10 py-7 group backdrop-blur-sm"
            >
              <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300 text-primary" />
              Watch Anthem
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
