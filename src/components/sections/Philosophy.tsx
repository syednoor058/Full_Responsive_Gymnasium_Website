import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Philosophy = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" ref={targetRef} className="bg-secondary relative">
      <div className="section-padding">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">

          {/* Sticky Left Column */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-primary"></div>
                <span className="text-primary font-display uppercase tracking-[0.3em] text-sm">
                  Our Philosophy
                </span>
              </div>

              <h2 className="font-display text-5xl md:text-6xl lg:text-[5rem] font-bold uppercase mb-8 leading-[0.9] tracking-tighter">
                We Believe In
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-rose-600 to-primary">
                  Your Potential
                </span>
              </h2>

              <p className="text-muted-foreground/80 text-lg leading-relaxed mb-10 max-w-md">
                Our approach combines cutting-edge training methods with personalized attention. Every member is unique, and so is every fitness journey. We're here to guide, motivate, and celebrate every milestone with you.
              </p>

              <div className="flex items-center gap-6 pl-2 pr-2 py-2 rounded-full bg-card/30 border border-white/5 backdrop-blur-sm max-w-sm">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/50 shrink-0 shadow-[0_0_15px_rgba(255,0,51,0.3)]">
                  <img
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop"
                    alt="Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-display font-semibold text-xl uppercase tracking-wide text-white">Marcus Johnson</p>
                  <p className="text-primary text-sm uppercase font-semibold tracking-wider mt-1">Founder & Head Coach</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scrolling Right Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12 lg:gap-20 pb-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="relative p-10 md:p-14 rounded-3xl bg-background border border-white/5 shadow-2xl overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <blockquote className="relative z-10 text-2xl md:text-3xl lg:text-4xl text-white font-display leading-[1.3] font-light">
                "We believe that fitness is not just about physical
                transformation—it's about building <span className="text-primary font-bold">mental strength</span>, confidence, and
                a lifestyle that empowers you to be your best self."
              </blockquote>
            </motion.div>

            <div className="relative aspect-[4/5] rounded-xl overflow-hidden group border border-white/10 shadow-2xl shadow-primary/20">
              <motion.img
                style={{ y: imgY, scale: 1.1 }}
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop"
                alt="Training session"
                className="absolute inset-0 w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-primary/90 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-xl shadow-white/10 border border-white/20 pointer-events-auto"
              >
                <div className="flex items-baseline gap-2 mb-1">
                  <p className="font-display text-5xl md:text-6xl font-bold text-white drop-shadow-md">10</p>
                  <span className="font-display text-3xl font-bold text-white">+</span>
                </div>
                <p className="text-white/90 text-sm md:text-base uppercase font-semibold leading-none">Years of<br />Excellence</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
