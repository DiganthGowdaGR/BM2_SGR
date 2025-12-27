"use client";
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import NavTab from '@/components/ui/NavTab';
import ProfileCard from '@/components/ui/ProfileCard';
import Contact from '@/components/ui/Contact';
import { CardSpotlightDemo } from '@/components/ui/AboutText';
import { AppleCardsCarouselDemo } from '@/components/ui/ProjectSection';

export default function Page() {
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, []);

  const sectionVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-[100dvh] flex flex-col items-center bg-black dark:bg-black text-white overflow-hidden">
      <div className="fixed top-4 z-50">
        <NavTab />
      </div>
      <main ref={mainRef} className="w-full h-full overflow-y-auto snap-y snap-mandatory no-scrollbar">
        {/* "About" section is now first */}
        <motion.section
          id="profile"
          className="h-[100dvh] snap-start flex items-center justify-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          variants={sectionVariants}
        >
          <ProfileCard />
        </motion.section>
        <motion.section
          id="about"
          className="h-[100dvh] snap-start flex items-center justify-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          variants={sectionVariants}
        >
          <CardSpotlightDemo />
        </motion.section>
        <motion.section
          id="project"
          className="h-[100dvh] snap-start flex items-center justify-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          variants={sectionVariants}
        >
          <AppleCardsCarouselDemo />
        </motion.section>
        <motion.section id="contact" className="h-[100dvh] snap-start relative flex items-center justify-center">
          <Contact />
        </motion.section>
      </main>
    </div>
  );
}