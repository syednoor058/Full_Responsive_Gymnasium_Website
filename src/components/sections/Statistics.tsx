import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import workoutShadow from "@/assets/workout_in_shadow.jpg";

const stats = [
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 50, suffix: "+", label: "Expert Trainers" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 25, suffix: "K", label: "Workouts Completed" },
];

const CountUpNumber = ({
  value,
  suffix,
  isInView,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span className="font-display text-5xl md:text-6xl font-bold text-primary">
      {count}
      {suffix}
    </span>
  );
};

export const Statistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Stats Grid */}
        <div className="flex flex-col gap-10 md:gap-14 lg:gap-20">
          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center lg:text-left"
          >
            <span className="text-primary font-display uppercase tracking-[0.3em] text-sm mb-4 block">
            Why Choose Us
          </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-6">
              Results that Speaks Volumes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're not just a gym—we're a community dedicated to helping you
              achieve your fitness goals. With cutting-edge equipment, expert
              trainers, and a supportive environment, your transformation starts
              here.
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center lg:text-left"
              >
                <CountUpNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
                <p className="text-muted-foreground font-medium uppercase tracking-wide mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded overflow-hidden">
            <img
              src={workoutShadow}
              alt="Athlete in shadow"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
