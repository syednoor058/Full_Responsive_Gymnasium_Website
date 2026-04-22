import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Crossfit Athlete",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    quote: "Pulse Fitness completely transformed my approach to fitness. The trainers are exceptional, and the community keeps me motivated every single day.",
    span: "md:col-span-2 lg:col-span-1 md:row-span-2"
  },
  {
    name: "David Rodriguez",
    role: "Powerlifter",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    quote: "The equipment here is top-notch. As a competitive athlete, I need facilities that can push me to the limit, and Pulse delivers constantly.",
    span: "lg:col-span-2"
  },
  {
    name: "Emily Chen",
    role: "Yoga Enthusiast",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    quote: "The recovery zones and yoga classes are the perfect balance to my intense week. It's truly a holistic approach to wellbeing.",
    span: "lg:col-span-1"
  },
  {
    name: "Marcus Johnson",
    role: "Marathon Runner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    quote: "Endurance training requires the right atmosphere. The energy in this gym is unmatched, pushing me to break my PRs every month.",
    span: "lg:col-span-1"
  },
  {
    name: "Jessica Vance",
    role: "Lifestyle Member",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    quote: "I've never felt so welcomed in a gym. The staff knows my name, the machines are clean, and the vibe is pure luxury. A 10/10 experience.",
    span: "lg:col-span-2"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-display uppercase tracking-[0.2em] text-xs mb-6">
            Clients Feedback
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-[5rem] font-bold uppercase tracking-tighter mb-4">
            Wall of <span className="text-primary">Glory</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto uppercase tracking-widest">
            Hear from the athletes who forged their legacy with us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              className={`glass-card p-8 md:p-10 rounded-3xl flex flex-col justify-between border border-white/5 hover:border-primary/50 relative group overflow-hidden ${t.span}`}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 pointer-events-none" />
              <div className="absolute -inset-x-20 -inset-y-20 bg-primary/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />

              <div className="relative z-10 flex-1">
                <div className="flex gap-1.5 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-primary text-primary filter drop-shadow-[0_0_8px_rgba(255,0,51,0.6)]" />
                  ))}
                </div>
                <blockquote className="text-white/90 font-display text-xl md:text-2xl leading-[1.6] tracking-wide mb-8">
                  "{t.quote}"
                </blockquote>
              </div>

              <div className="relative z-10 flex items-center gap-5 mt-auto pt-6 border-t border-white/10">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-primary shrink-0 transition-colors duration-500">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-xl uppercase tracking-wider">{t.name}</h4>
                  <p className="text-primary text-sm font-semibold tracking-widest uppercase mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
