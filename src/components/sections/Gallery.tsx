import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Plus } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    title: "Strength Zone",
    category: "Equipment",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop",
    title: "HIIT Arena",
    category: "Group Class",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800&auto=format&fit=crop",
    title: "Free Weights",
    category: "Training",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop",
    title: "Cardio Deck",
    category: "Facility",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop",
    title: "1-on-1 Coaching",
    category: "Personal Training",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=800&auto=format&fit=crop",
    title: "Boxing Ring",
    category: "Combat",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
    title: "Yoga Studio",
    category: "Recovery",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=800&auto=format&fit=crop",
    title: "Crossfit Box",
    category: "Group Class",
    span: "col-span-1 row-span-1",
  },
];

export const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="gallery" className="section-padding bg-background relative border-t border-white/5">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
      >
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-display uppercase tracking-[0.2em] text-xs mb-6">
            Our Space
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-[4rem] font-bold uppercase leading-none">
            Explore The <span className="text-primary">Facility</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm text-right hidden md:block">
          Take a look inside our state-of-the-art facility designed for elite performance.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px] lg:auto-rows-[300px]"
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`relative overflow-hidden rounded-2xl cursor-pointer group ${image.span}`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                <Plus className="text-white w-6 h-6" />
              </div>
              <p className="text-primary font-bold tracking-widest text-xs uppercase mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{image.category}</p>
              <h3 className="text-white font-display text-xl md:text-2xl font-semibold uppercase tracking-wide">{image.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
