import { useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Dumbbell, Heart, Apple, Zap } from "lucide-react";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -10 }}
      className="glass-card p-5 group flex flex-col justify-center items-center text-center relative overflow-hidden transition-all duration-300 ease-in-out rounded-full aspect-square"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <motion.div
        whileHover={{ rotate: 15, scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        className="w-20 h-20 shadow-lg rounded-2xl flex items-center justify-center mb-6 z-10  transition-colors"
      >
        <Icon className="w-10 h-10 text-primary drop-shadow-[0_0_10px_rgba(255,0,51,0.5)]" />
      </motion.div>
      <h3 className="font-display text-2xl font-bold uppercase tracking-wide mb-3 z-10 text-white">
        {title}
      </h3>
      <p className="text-muted-foreground/90 text-base leading-relaxed z-10">
        {description}
      </p>
    </motion.div>
  );
};

const features = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description:
      "Build muscle and increase strength with our comprehensive weight training programs and expert guidance.",
  },
  {
    icon: Heart,
    title: "Cardio Excellence",
    description:
      "Improve your cardiovascular health with high-intensity interval training and endurance workouts.",
  },
  {
    icon: Apple,
    title: "Nutrition Plans",
    description:
      "Fuel your body right with personalized nutrition plans designed by certified dietitians.",
  },
  {
    icon: Zap,
    title: "HIIT Workouts",
    description:
      "Maximize calorie burn and boost metabolism with our intense high-intensity training sessions.",
  },
];

export const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="features" className="section-padding bg-background relative overflow-hidden text-center md:text-left">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none opacity-50" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-display uppercase tracking-[0.2em] text-xs md:text-sm mb-6">
            Features
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-[5rem] font-bold uppercase tracking-tight">
            What We <span className="text-primary">Offer</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          {/* Left Features */}
          <div className="space-y-8">
            <FeatureCard {...features[0]} />
            <FeatureCard {...features[1]} />
          </div>

          {/* Center Image */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block group"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,0,51,0.15)] ring-1 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1470&auto=format&fit=crop"
                alt="Athlete training"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>
            {/* Center Floating Badge */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center rotate-[-5deg] border-4 border-background"
            >
              <span className="font-display text-4xl font-bold text-white leading-none">10+</span>
              <span className="text-xs font-bold text-white/80 uppercase mt-1">Years<br />Exp</span>
            </motion.div>
          </motion.div>

          {/* Right Features */}
          <div className="space-y-8">
            <FeatureCard {...features[2]} />
            <FeatureCard {...features[3]} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
