import { CardSpotlight } from "@/components/ui/card-spotlight";
import { EncryptedText } from "@/components/ui/encrypted-text";
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { User, Heart, Zap, Briefcase, GraduationCap, Code } from "lucide-react";

const avatarSrc =
  "data:image/jpeg;base64,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";

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
          <div className="relative w-12 h-12 sm:w-14 sm:h-14">
            <span
              className="pointer-events-none absolute inset-[-2px] rounded-full opacity-90 animate-[spin_3s_linear_infinite]"
              style={{
                background:
                  "conic-gradient(from 0deg, #1d4ed8, #6b21a8, #0ea5e9, #1d4ed8)",
              }}
            />
            <div className="absolute inset-[2px] rounded-full overflow-hidden bg-black shadow-inner border border-white/10 flex items-center justify-center">
              <img
                src={avatarSrc}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
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
