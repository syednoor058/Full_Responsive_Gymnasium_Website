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
    <section className="section-padding bg-secondary">
      <div className="flex flex-col lg:flex-row gap-4 justify-between mb-12 lg:mb-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[50%] "
        >
          <span className="text-primary font-display uppercase tracking-[0.3em] text-sm mb-4 block">
            How It Works
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
            Experience Fitness Like Never Before
          </h2>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[50%]"
        >
          <p className="text-muted-foreground leading-relaxed">
            At Pulse Fitness, we prioritize your comfort and privacy. Our gym
            features seperate sections for male and female members, ensuring a
            welcoming environment for everyone. Join us ti discover a fitness
            journey tailored for you.{" "}
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
          >

            <div className="relative z-10">
              <span className="font-display text-6xl lg:text-7xl font-bold text-primary mb-4 block">
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
    </section>
  );
};
