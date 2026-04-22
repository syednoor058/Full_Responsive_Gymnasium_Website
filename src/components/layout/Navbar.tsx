import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../../public/logo.png"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <img src={logo} alt="Logo" className="h-12 w-auto group-hover:scale-105 transition-transform duration-300" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-widest group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full filter drop-shadow-[0_0_5px_rgba(255,0,51,0.8)]" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
          <Button className="relative bg-primary hover:bg-white hover:text-primary text-white font-display uppercase tracking-widest px-8 transition-colors duration-300 shadow-[0_0_15px_rgba(255,0,51,0.3)] border border-primary/50">
            Join Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2 hover:text-primary transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden fixed top-full left-0 right-0 bg-black/95 backdrop-blur-3xl border-t border-white/10 overflow-hidden flex flex-col"
          >
            <div className="container mx-auto px-6 py-10 flex flex-col gap-6 flex-1 justify-center relative">
               <div className="absolute top-1/4 -right-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/70 hover:text-white hover:pl-4 transition-all duration-300 text-3xl font-display uppercase tracking-widest py-2 border-b border-white/5 flex items-center justify-between group"
                >
                  {link.name}
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </motion.a>
              ))}
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.6 }}
                 className="mt-8"
              >
                  <Button className="bg-primary hover:bg-white text-white hover:text-primary font-display uppercase tracking-widest w-full h-14 text-xl rounded-xl shadow-[0_0_20px_rgba(255,0,51,0.4)]">
                    Join Now For Free
                  </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
