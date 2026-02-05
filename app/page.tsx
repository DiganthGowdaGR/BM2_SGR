"use client";
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import NavTab from '@/components/ui/NavTab';
import ProfileCard from '@/components/ui/ProfileCard';
import Contact from '@/components/ui/Contact';
import { CardSpotlightDemo } from '@/components/ui/AboutText';
import { AppleCardsCarouselDemo } from '@/components/ui/ProjectSection';
import { Particles } from '@/components/ui/Particles';

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
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color="#ffffff"
          refresh
        />
      </div>
      <div className="fixed top-2 sm:top-4 z-50">
        <NavTab />
      </div>
      <main ref={mainRef} className="w-full h-full overflow-y-auto scroll-smooth no-scrollbar relative z-10">
        {/* Spacer to clear fixed NavTab */}
        <div className="h-14 sm:h-16" />
        {/* "About" section is now first */}
        <motion.section
          id="profile"
          className="min-h-[100dvh] flex items-start justify-center pt-0"
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
          className="min-h-[100dvh] flex items-center justify-center pt-20 md:pt-0"
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
          className="min-h-[100dvh] flex items-center justify-center pt-20 md:pt-0"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          variants={sectionVariants}
        >
          <AppleCardsCarouselDemo />
        </motion.section>
        <motion.section id="contact" className="min-h-[100dvh] relative flex items-center justify-center pt-20 md:pt-0">
          <Contact />
        </motion.section>
      </main>
    </div>
  );
}
