import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import workoutShadow from "@/assets/workout_in_shadow.jpg";
import { BriefcaseBusiness, CircleCheck, Dumbbell, SquareUser } from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "Happy Clients", progress: 95, icon: <SquareUser /> },
  { value: 50, suffix: "+", label: "Expert Trainers", progress: 80, icon: <Dumbbell /> },
  { value: 10, suffix: "+", label: "Years Experience", progress: 100, icon: <BriefcaseBusiness /> },
  { value: 25, suffix: "K", label: "Workouts Completed", progress: 85, icon: <CircleCheck /> },
];

const CountUpNumber = ({
  value,
  suffix,
  isInView,
  label,
  progress,
  delay,
  icon
}: {
  value: number;
  suffix: string;
  isInView: boolean;
  label: string;
  progress: number;
  delay: number;
  icon: React.ReactNode;
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
    <div className="glass-card p-6 flex flex-col gap-3 group overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500 text-6xl font-bold font-display pointer-events-none">{icon}</div>
      <span className="font-display text-4xl md:text-5xl font-bold text-white group-hover:text-primary transition-colors duration-300 drop-shadow-lg">
        {count}
        <span className="text-primary group-hover:text-white transition-colors duration-300">{suffix}</span>
      </span>
      <p className="text-muted-foreground/80 font-medium uppercase tracking-wider text-sm mt-1 z-10">
        {label}
      </p>
      <div className="h-1.5 w-full bg-background rounded-full mt-2 relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${progress}%` } : { width: 0 }}
          transition={{ duration: 2, delay, ease: "easeOut" }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-rose-600 to-primary rounded-full shadow-[0_0_10px_rgba(255,0,51,0.5)]"
        />
      </div>
    </div>
  );
};

export const Statistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="grid lg:grid-cols-2 gap-16 items-center container mx-auto px-4 md:px-8 relative z-10">
        {/* Stats Grid */}
        <div className="flex flex-col gap-12 md:gap-20">
          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-display uppercase tracking-[0.2em] text-xs mb-6">
              Why Choose Us
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-[4rem] font-bold uppercase mb-6 leading-none">
              Results that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-600 to-primary">Speak</span> Volumes
            </h2>
            <p className="text-muted-foreground/90 text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We're not just a gym—we're a community dedicated to helping you
              achieve your fitness goals. With cutting-edge equipment, expert
              trainers, and a supportive environment, your transformation starts
              here.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              >
                <CountUpNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  isInView={isInView}
                  label={stat.label}
                  progress={stat.progress}
                  delay={0.4 + (index * 0.2)}
                  icon={stat.icon}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative group hidden lg:block"
        >
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
          <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
            <img
              src={workoutShadow}
              alt="Athlete in shadow"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-black/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-10 left-10 hidden lg:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-primary backdrop-blur-md pl-2 pr-4 py-2 rounded-full shadow-xl flex items-center justify-center gap-4 cursor-pointer"
              >
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                </div>
                <div>
                  <p className="text-white font-display uppercase tracking-widest text-xs mb-1">Live Tracking</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
