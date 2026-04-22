import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Follow The Plan",
    description: "Get a personalized workout plan tailored to your fitness goals and current level. Our experts design programs that evolve with you.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "Train Hard",
    description: "Push your limits with guidance from certified trainers. Every session is designed to challenge you and maximize results.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "See Results",
    description: "Track your progress and celebrate your achievements. Watch your body transform as you consistently put in the work.",
    image: "https://images.unsplash.com/photo-1641337221253-fdc7237f6b61?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

export const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={containerRef} className="section-padding bg-secondary relative overflow-hidden">
      {/* Decorative Text */}
      <h2 className="absolute top-10 left-1/2 -translate-x-1/2 text-[15vw] font-display font-bold text-transparent text-outline-white opacity-20 whitespace-nowrap pointer-events-none select-none uppercase z-0">
        Experience
      </h2>

      <div className="container mx-auto relative z-10 px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 justify-between mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%]"
          >
            <span className="text-primary font-display uppercase tracking-[0.3em] text-sm mb-6 block">
              How It Works
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-[4rem] font-bold uppercase leading-none">
              Experience <span className="text-primary">Fitness</span> Like Never Before
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[45%] flex items-end"
          >
            <p className="text-muted-foreground/80 leading-relaxed text-lg lg:text-xl border-l-2 border-primary pl-6">
              At Pulse Fitness, we prioritize your comfort and privacy. Our gym features separate sections to ensure a welcoming environment for everyone. Join us to discover a fitness journey tailored for you.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Images Parallax Side */}
          <div className="hidden lg:flex gap-6 h-[800px] relative">
            <motion.div style={{ y: y1 }} className="w-1/2 flex flex-col gap-6 pt-20">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl filter grayscale hover:grayscale-0 transition-all duration-500">
                <img src={steps[0].image} alt="Step 1" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-full overflow-hidden shadow-2xl filter grayscale hover:grayscale-0 transition-all duration-500">
                <img src={steps[2].image} alt="Step 3" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div style={{ y: y2 }} className="w-1/2 flex flex-col gap-6">
              <div className="aspect-square rounded-full overflow-hidden shadow-2xl filter grayscale hover:grayscale-0 transition-all duration-500">
                <img src={steps[1].image} alt="Step 2" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-primary/10 flex items-center justify-center p-8 border border-white/5">
                <p className="font-display text-4xl text-white uppercase text-center">Transform Your Limitations</p>
              </div>
            </motion.div>
          </div>

          {/* Steps Side */}
          <div className="flex flex-col gap-12 lg:gap-20 pt-10">
            {steps.map((step, index) => {
              const cardRef = useRef(null);
              const isCardInView = useInView(cardRef, { once: true, margin: "-100px" });

              return (
                <motion.div
                  key={step.number}
                  ref={cardRef}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isCardInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-1 bg-white/5">
                    <motion.div
                      className="absolute top-0 left-0 w-full bg-primary"
                      initial={{ height: 0 }}
                      animate={isCardInView ? { height: "100%" } : { height: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>

                  <div className="pl-6 md:pl-10">
                    <div className="flex items-center gap-6 mb-6">
                      <span className="font-display text-6xl md:text-8xl font-bold text-transparent text-outline transition-colors duration-300 group-hover:text-primary filter drop-shadow-lg">
                        {step.number}
                      </span>
                      <h3 className="font-display text-3xl md:text-4xl font-semibold uppercase tracking-wide text-foreground group-hover:text-white transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground/80 leading-relaxed text-lg max-w-lg">
                      {step.description}
                    </p>

                    {/* Mobile Image Fallback */}
                    <div className="lg:hidden mt-8 aspect-video rounded-xl overflow-hidden border border-white/10">
                      <img src={step.image} alt={step.title} className="w-full h-full object-cover grayscale" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
