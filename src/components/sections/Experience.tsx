import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Follow The Plan",
    description:
      "Get a personalized workout plan tailored to your fitness goals and current level. Our experts design programs that evolve with you.",
  },
  {
    number: "02",
    title: "Train Hard",
    description:
      "Push your limits with guidance from certified trainers. Every session is designed to challenge you and maximize results.",
  },
  {
    number: "03",
    title: "See Results",
    description:
      "Track your progress and celebrate your achievements. Watch your body transform as you consistently put in the work.",
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display uppercase tracking-[0.3em] text-sm mb-4 block">
            How It Works
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
            Experience Fitness
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="relative z-10">
                <span className="font-display text-6xl lg:text-7xl font-bold text-primary/20 mb-4 block">
                  {step.number}
                </span>
                <h3 className="font-display text-2xl font-semibold uppercase tracking-wide mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
