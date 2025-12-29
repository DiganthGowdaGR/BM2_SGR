// ProjectCard.tsx
import React, { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  techStack,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  // --- GlareHover Logic ---
  const glareOpacity = 0.2;
  const glareSize = 400;
  const glareColor = '#ffffff';
  const glareAngle = -45;
  const transitionDuration = 650;

  const hex = glareColor.replace('#', '');
  let rgba = glareColor;
  if (/^[\dA-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  }

  const animateIn = () => {
    const el = overlayRef.current;
    if (!el) return;
    el.style.transition = 'none';
    el.style.backgroundPosition = '-100% -100%, 0 0';
    el.style.transition = `${transitionDuration}ms ease`;
    el.style.backgroundPosition = '100% 100%, 0 0';
  };

  const animateOut = () => {
    const el = overlayRef.current;
    if (!el) return;
    el.style.transition = `${transitionDuration}ms ease`;
    el.style.backgroundPosition = '-100% -100%, 0 0';
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(${glareAngle}deg,
        hsla(0,0%,0%,0) 60%,
        ${rgba} 70%,
        hsla(0,0%,0%,0) 100%)`,
    backgroundSize: `${glareSize}% ${glareSize}%, 100% 100%`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-100% -100%, 0 0',
    pointerEvents: 'none',
    borderRadius: '1rem', // Match card's rounded-2xl
  };
  // --- End GlareHover Logic ---

  return (
    <div 
      className="relative max-w-sm mx-auto bg-black/50 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-white/20 cursor-pointer"
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      <div ref={overlayRef} style={overlayStyle} />
      {" "}
      {/* Project Image */}
      <div>
        {" "}
        <div className="relative w-full h-48 overflow-hidden rounded-t-xl group">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {/* Hover overlay with buttons */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="flex space-x-2">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              >
                <FaExternalLinkAlt size={14} />
              </a>
            )}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <FaGithub size={14} />
            </a>
          </div>
        </div>
      </div>
      {/* Card Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-black-50 text-white-600 text-xs font-medium rounded-full border border-blue-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm"
          >
            <FaGithub size={16} />
            View Code
          </a>

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-medium py-2.5 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm"
            >
              <FaExternalLinkAlt size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
