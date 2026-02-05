import { CardSpotlight } from "@/components/ui/card-spotlight";
import { EncryptedText } from "@/components/ui/encrypted-text";
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { User, Heart, Zap, Briefcase, GraduationCap, Code } from "lucide-react";

export function CardSpotlightDemo({ className = "" }) {
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  useEffect(() => setIsClient(true), []);

  return (
    <CardSpotlight
      className={`w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl h-auto min-h-[28rem] mx-4 sm:mx-0 ${className}`}
      color="#3b82f6" // Custom spotlight color
    >
      <div
        ref={containerRef}
        className="relative z-20 p-6 sm:p-8 md:p-10 text-neutral-200"
      >
        {/* Header Section */}
        <div className="mb-10 flex items-center space-x-4">
          <div className="p-3 rounded-full bg-white/5 border border-white/10 shadow-inner">
            <User className="w-6 h-6 text-blue-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {isClient ? (
              <EncryptedText
                text="About Me"
                revealDelayMs={100}
                encryptedClassName="text-neutral-500"
                revealedClassName="text-white"
              />
            ) : (
              "About Me"
            )}
          </h1>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-4 sm:pl-6 space-y-8">
          {/* Connecting Line */}
          <div className="absolute left-[27px] sm:left-[35px] top-4 bottom-4 w-[2px] bg-white/5" />
          <motion.div
            style={{ height }}
            className="absolute left-[27px] sm:left-[35px] top-4 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 origin-top"
          />

          <TimelineItem
            icon={<GraduationCap className="w-5 h-5 text-blue-300" />}
            title="Who I am"
            text="CSE student at PES University, Bengaluru."
            tags={["Student", "Developer"]}
            delay={0.1}
          />

          <TimelineItem
            icon={<Code className="w-5 h-5 text-purple-300" />}
            title="What I do"
            text="Building real projects and learning by doing."
            tags={["Full-Stack", "DevOps", "AI/ML"]}
            delay={0.2}
          />

          <TimelineItem
            icon={<Heart className="w-5 h-5 text-pink-300" />}
            title="How I work"
            text="I enjoy teamwork, problem solving, and improving every day."
            tags={["Collaborative", "Driven"]}
            delay={0.3}
          />
        </div>
      </div>
    </CardSpotlight>
  );
}

/* ---------------- Timeline Item ---------------- */

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  tags?: string[];
  delay: number;
}

function TimelineItem({ icon, title, text, tags, delay }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative flex items-start group"
    >
      {/* Icon Bubble */}
      <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-neutral-900 border border-neutral-800 shadow-[0_0_15px_rgba(59,130,246,0.3)] z-10 group-hover:scale-110 transition-transform duration-300">
        <div className="w-full h-full flex items-center justify-center scale-75 sm:scale-90">
          {icon}
        </div>
      </div>

      {/* Content Card */}
      <div className="ml-12 sm:ml-16 w-full p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-colors duration-300 backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-white mb-1 flex items-center">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-prose">
          {text}
        </p>

        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs font-medium rounded-md bg-white/5 text-blue-200 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
