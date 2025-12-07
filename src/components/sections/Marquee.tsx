import { motion } from "framer-motion";

const marqueeItems = [
  "TRAIN HARD",
  "•",
  "RECOVER SMART",
  "•",
  "REPEAT",
  "•",
  "PUSH LIMITS",
  "•",
  "STAY STRONG",
  "•",
  "NEVER QUIT",
  "•",
];

export const Marquee = () => {
  return (
    <section className="bg-primary py-6 overflow-hidden">
      <div className="flex">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={index}
              className="font-display text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-primary-foreground"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={`duplicate-${index}`}
              className="font-display text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-primary-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
