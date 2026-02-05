import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import PlasmaGlobe from "./PlasmaGlobe";

const Contact = () => {
  return (
    <section id="contact" className="relative w-full py-10 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-white mb-4">
            Get In Touch
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-full max-w-xl mx-auto aspect-square min-h-[260px] sm:min-h-[320px] flex items-center justify-center"
          >
            <PlasmaGlobe intensity={0.6} speed={0.5} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SocialLinks />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
