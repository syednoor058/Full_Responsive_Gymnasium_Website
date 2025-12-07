import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Lottie from "lottie-react";
import { Dumbbell, Heart, Apple, Zap } from "lucide-react";

// Placeholder for Lottie animations - using simple icon fallbacks
const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-card/50 backdrop-blur-sm border border-border/50 rounded p-6 hover:border-primary/50 transition-all duration-300 group flex flex-col justify-center items-center text-center"
    >
      <motion.div
        animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
        transition={{ duration: 0.3 }}
        className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
      >
        <Icon className="w-8 h-8 text-primary" />
      </motion.div>
      <h3 className="font-display text-xl font-semibold uppercase tracking-wide mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="section-padding bg-background">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display uppercase tracking-[0.3em] text-sm mb-4 block">
            Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
            What We Offer
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5 items-center">
          {/* Left Features */}
          <div className="space-y-5">
            <FeatureCard {...features[0]} delay={0.2} />
            <FeatureCard {...features[1]} delay={0.4} />
          </div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[3/4] rounded overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1470&auto=format&fit=crop"
                alt="Athlete training"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-8 left-[50%] right-[50%] w-20 h-20 bg-primary rounded flex items-center justify-center">
              <span className="font-display text-3xl font-bold text-primary-foreground">10+</span>
            </div>
          </motion.div>

          {/* Right Features */}
          <div className="space-y-5">
            <FeatureCard {...features[2]} delay={0.3} />
            <FeatureCard {...features[3]} delay={0.5} />
          </div>
        </div>
    </section>
  );
};
