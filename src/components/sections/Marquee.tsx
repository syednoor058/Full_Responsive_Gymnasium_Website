import { motion } from "framer-motion";

const marqueeItems = [
  "TRAIN",
  "HARD",
  "•",
  "RECOVER",
  "SMART",
  "•",
  "REPEAT",
  "•",
  "PUSH",
  "LIMITS",
  "•",
  "STAY",
  "STRONG",
  "•",
  "NEVER",
  "QUIT",
  "•",
  "BUILD",
  "LEGACY",
  "•",
];

const Row = ({ reverse, outline, darkText }: { reverse?: boolean, outline?: boolean, darkText?: boolean }) => {
  const content = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
      {content.map((item, index) => (
        <span
          key={index}
          className={`mx-4 font-display text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-widest ${outline ? "text-outline opacity-80 text-background" : darkText ? (item === "•" ? "text-primary mx-8" : "text-black") : (item === "•" ? "text-black mx-8" : "text-white")
            }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export const Marquee = () => {
  return (
    <section className="bg-background h-[400px] md:h-[500px] overflow-hidden flex flex-col justify-center items-center relative">
      <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none" />

      {/* Front row: White background, Dark Text */}
      <div className="absolute w-[110%] z-20 rotate-[-10deg] scale-105 bg-white py-6 shadow-[0_0_50px_rgba(0,0,0,0.5)] border-y border-white flex items-center">
        <Row darkText />
      </div>

      {/* Back row: Primary background, White Text */}
      <div className="absolute w-[110%] z-10 rotate-[10deg] scale-105 bg-primary py-6 shadow-[0_0_50px_rgba(255,0,51,0.4)] border-y border-primary/50 flex items-center">
        <Row reverse />
      </div>
    </section>
  );
};
