import { CardSpotlight } from "@/components/ui/card-spotlight";
import { EncryptedText } from "@/components/ui/encrypted-text";
import React, { useEffect, useState } from "react";

export function CardSpotlightDemo({ className = "" }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  return (
    <CardSpotlight className={`w-full max-w-3xl h-auto min-h-[28rem] ${className}`}>
      <div className="relative p-6 sm:p-8 text-neutral-200">

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          {isClient ? (
            <EncryptedText
              text="About Me"
              revealDelayMs={120}
              encryptedClassName="text-neutral-500"
              revealedClassName="text-white"
            />
          ) : (
            "About Me"
          )}
        </h1>

        {/* Timeline container */}
        <div className="relative pl-6 space-y-6">

          {/* Gradient vertical line */}
          <div className="absolute left-1 top-0 h-full w-[2px] bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400 opacity-70" />

          {/* Timeline item 1 */}
          <TimelineItem
            title="Who I am"
            text="CSE student at PES University, Bengaluru."
            highlight="Sharath Gowda GR"
            isClient={isClient}
          />

          {/* Timeline item 2 */}
          <TimelineItem
            title="What I like"
            text="Building real projects and learning by doing."
            highlight="Full-Stack • DevOps • AI/ML"
            isClient={isClient}
          />

          {/* Timeline item 3 */}
          <TimelineItem
            title="How I work"
            text="I enjoy team work, problem solving, and improving every day."
            highlight="Collaborative mindset"
            isClient={isClient}
          />
        </div>
      </div>
    </CardSpotlight>
  );
}

/* ---------------- Timeline Item ---------------- */

function TimelineItem({
  title,
  text,
  highlight,
  isClient,
}: {
  title: string;
  text: string;
  highlight: string;
  isClient: boolean;
}) {
  return (
    <div className="relative">
      {/* Dot */}
      <div className="absolute -left-[11px] top-1 h-3 w-3 rounded-full bg-blue-400 shadow-md" />

      <h3 className="text-sm uppercase tracking-wide text-neutral-400">
        {title}
      </h3>

      <p className="text-base sm:text-lg text-white mt-1">
        {text}
      </p>

      <p className="text-sm mt-1 text-cyan-300">
        {isClient ? (
          <EncryptedText
            text={highlight}
            revealDelayMs={150}
            encryptedClassName="text-neutral-500"
            revealedClassName="text-cyan-300"
          />
        ) : (
          highlight
        )}
      </p>
    </div>
  );
}
