import { Facebook, Instagram, Twitter, Youtube, ArrowUpRight } from "lucide-react";
import logo from "../../../public/logo.png";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Classes", href: "#features" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Personal Training", href: "#" },
    { name: "Group Classes", href: "#" },
    { name: "Nutrition Plans", href: "#" },
    { name: "Online Coaching", href: "#" },
    { name: "Corporate Wellness", href: "#" },
  ],
  support: [
    { name: "FAQ", href: "#faq" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Membership", href: "#" },
    { name: "Careers", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="bg-black relative overflow-hidden pt-20 pb-8 border-t border-white/10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-6 group">
              <img src={logo} alt="Pulse Fitness Logo" className="h-16 w-auto group-hover:scale-105 transition-transform duration-300 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
            </a>
            <p className="text-white/60 mb-8 max-w-sm leading-relaxed text-lg">
              Forge your legacy. State-of-the-art equipment, elite trainers, and a forged-in-fire community.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-primary hover:border-primary hover:shadow-[0_0_15px_rgba(255,0,51,0.6)] transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-white mb-6 flex items-center gap-2">
              Quick Links <div className="h-px bg-primary/50 flex-1 ml-4" />
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-wider flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 text-primary opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-white mb-6 flex items-center gap-2">
              Services <div className="h-px bg-primary/50 flex-1 ml-4" />
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-wider flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 text-primary opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-white mb-6 flex items-center gap-2">
              Support <div className="h-px bg-primary/50 flex-1 ml-4" />
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-wider flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 text-primary opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm tracking-wider uppercase ">
            © {new Date().getFullYear()} Pulse Fitness. Build Your Legacy.
          </p>
          <p className="text-white/40 text-sm tracking-wider uppercase ">
            Forge By <a href="https://syednoor.vercel.app/" target="_blank" className="text-primary hover:text-white transition-colors relative group"><span className="absolute bottom-0 left-0 w-full h-px bg-primary group-hover:bg-white transition-colors" />Syed Shaeduzzaman Noor</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
