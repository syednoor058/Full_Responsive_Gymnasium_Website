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
      className="relative min-h-[75vh] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY, opacity }}
      >
        <img
          src={headerCover}
          alt="Athlete training in gym"
          className="w-full h-full object-cover object-top transform scale-110 blur-[2px] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/20 to-background/60" />
      </motion.div>


      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start lg:justify-between">
          {/* Left Column: Text Content */}
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

          {/* Right Column: Showreel Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full lg:max-w-[480px]"
          >
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-[80px] animate-pulse" />

            {/* Video Container */}
            <div className="relative aspect-video  rounded-lg overflow-hidden glass-card group border border-white/10 shadow-2xl">
              <video
                src="https://res.cloudinary.com/de8g5laai/video/upload/v1777304558/202604272105_1_s60emk.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-5">
                  <div className="border-l-4 border-primary pl-3">
                    <p className="text-white font-display text-lg uppercase tracking-wider mb-0.5">Live Showreel</p>
                    <p className="text-white/60 text-xs uppercase tracking-[0.2em]">Pulse Experience 2024</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-4 right-4">
                <div className="glass-morphism px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  <span className="text-[10px] font-display uppercase tracking-widest text-white">Live Stream</span>
                </div>
              </div>
            </div>

            {/* Floating Stats Card - repositioned to float near video */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 md:-left-12 z-20"
            >
              <div className="glass-card p-5 flex items-center gap-4 shadow-2xl border border-white/20 hover:scale-105 transition-transform cursor-default">
                <div className="bg-primary/20 p-3 rounded-2xl text-primary">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-display leading-none mb-1">50+</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Expert Classes</p>
                </div>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
