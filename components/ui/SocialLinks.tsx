import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import PlasmaGlobe from "./PlasmaGlobe";

interface SocialLink {
  name: string;
  icon: React.ElementType;
  url: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/yourusername",
    color: "hover:text-[#333] dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/yourusername",
    color: "hover:text-[#0077b5]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/yourusername",
    color: "hover:text-[#E4405F]",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:sharathgowdagr08@gmail.com",
    color: "hover:text-primary",
  },
];

const SocialLinks = () => {
  return (
    <div className="backdrop-blur-xl bg-gradient-card rounded-3xl p-8 border border-border shadow-card">
      <h3 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">Connect With Me</h3>
      <p className="text-muted-foreground mb-8 text-center lg:text-left">
        Find me on these platforms or send a direct email
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex flex-col items-center gap-3 p-4 rounded-xl
                bg-background/50 border border-border
                transition-all duration-300
                hover:border-primary hover:shadow-glow
                ${social.color}
              `}
              aria-label={`Visit my ${social.name} profile`}
            >
              {/* <Icon className="w-6 h-6" /> */}
              <span className="text-xs font-medium text-center">{social.name}</span>
            </motion.a>
          );
        })}
      </div>

      {/* Additional Contact Info */}
      <div className="mt-8 pt-8 border-t border-border space-y-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
          <a
            href="mailto:sharathgowdagr08@gmail.com"
            className="text-white hover:text-primary transition-colors"
          >
            sharathgowdagr08@gmail.com
          </a>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1">Availability</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-white">Available for projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;