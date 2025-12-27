import { CardSpotlight } from "@/components/ui/card-spotlight";
import { EncryptedText } from "@/components/ui/encrypted-text";
import React, { useState, useEffect } from "react";

interface CardSpotlightDemoProps {
  className?: string;
}

export function CardSpotlightDemo({
  className = "",
}: CardSpotlightDemoProps): React.ReactElement {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <CardSpotlight className={`min-h-[28rem] w-full max-w-4xl ${className}`}>
      {/* Reduced height from min-h-[32rem] to min-h-[28rem] */}
      <div className="relative z-20 p-8">
        {/* Title with EncryptedText effect - only on client */}
        <h1 className="text-3xl font-bold mb-8 text-white">
          {isClient ? (
            <EncryptedText
              text="About Me"
              encryptedClassName="text-neutral-500"
              revealedClassName="text-white"
              revealDelayMs={150}
            />
          ) : (
            "About Me" // Fallback for SSR
          )}
        </h1>
        
        {/* About content with EncryptedText effects */}
        <div className="space-y-8 text-neutral-200">
          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Hi, I'm <span className="text-white font-semibold">
                {isClient ? (
                  <EncryptedText
                    text="Sharath Gowda GR"
                    encryptedClassName="text-neutral-500"
                    revealedClassName="text-white font-semibold"
                    revealDelayMs={100}
                  />
                ) : (
                  "Sharath Gowda GR"
                )}
              </span>, a <span className="text-blue-300">
                {isClient ? (
                  <EncryptedText
                    text="Computer Science and Engineering"
                    encryptedClassName="text-neutral-500"
                    revealedClassName="text-blue-300"
                    revealDelayMs={120}
                  />
                ) : (
                  "Computer Science and Engineering"
                )}
              </span> student at PES University, Bengaluru. I have a strong interest in technology and software development, and I enjoy learning new concepts by building projects and experimenting with tools.
            </p>
          </div>
          
          {/* Work style and interests */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              I like working in <span className="text-green-300">
                {isClient ? (
                  <EncryptedText
                    text="team-based and collaborative"
                    encryptedClassName="text-neutral-500"
                    revealedClassName="text-green-300"
                    revealDelayMs={110}
                  />
                ) : (
                  "team-based and collaborative"
                )}
              </span> environments, where ideas can be shared and improved together. My interests include <span className="text-purple-300">
                {isClient ? (
                  <EncryptedText
                    text="full-stack development, DevOps, and AI/ML"
                    encryptedClassName="text-neutral-500"
                    revealedClassName="text-purple-300"
                    revealDelayMs={100}
                  />
                ) : (
                  "full-stack development, DevOps, and AI/ML"
                )}
              </span>, and I have hands-on experience working with technologies like React, TypeScript, Java, Docker, Jenkins, AWS, and Python.
            </p>
          </div>
          
          {/* Experience and motivation */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Through internships and academic projects, I have gained practical exposure to how real-world applications are built, deployed, and maintained. I am always curious to <span className="text-yellow-300">
                {isClient ? (
                  <EncryptedText
                    text="explore new technologies"
                    encryptedClassName="text-neutral-500"
                    revealedClassName="text-yellow-300"
                    revealDelayMs={120}
                  />
                ) : (
                  "explore new technologies"
                )}
              </span>, improve my problem-solving skills, and <span className="text-cyan-300">
                {isClient ? (
                  <EncryptedText
                    text="grow as a software engineer"
                    encryptedClassName="text-neutral-500"
                    revealedClassName="text-cyan-300"
                    revealDelayMs={130}
                  />
                ) : (
                  "grow as a software engineer"
                )}
              </span>.
            </p>
          </div>
          
          {/* Simple tech tags with staggered delays */}
          <div className="pt-4">
            <div className="flex flex-wrap gap-3">
              <EncryptedTextTag
                text="Full-Stack Development"
                color="blue"
                delay={300}
                isClient={isClient}
              />
              <EncryptedTextTag
                text="DevOps"
                color="green"
                delay={500}
                isClient={isClient}
              />
              <EncryptedTextTag
                text="AI/ML"
                color="purple"
                delay={700}
                isClient={isClient}
              />
              <EncryptedTextTag
                text="Problem Solving"
                color="yellow"
                delay={900}
                isClient={isClient}
              />
              <EncryptedTextTag
                text="Collaborative"
                color="cyan"
                delay={1100}
                isClient={isClient}
              />
            </div>
          </div>
        </div>
      </div>
    </CardSpotlight>
  );
}

interface EncryptedTextTagProps {
  text: string;
  color: "blue" | "green" | "purple" | "yellow" | "cyan";
  delay?: number;
  isClient: boolean;
}

const EncryptedTextTag: React.FC<EncryptedTextTagProps> = ({ 
  text, 
  color, 
  delay = 300,
  isClient
}) => {
  const colorClasses = {
    blue: "bg-blue-500/20 text-blue-300",
    green: "bg-green-500/20 text-green-300",
    purple: "bg-purple-500/20 text-purple-300",
    yellow: "bg-yellow-500/20 text-yellow-300",
    cyan: "bg-cyan-500/20 text-cyan-300",
  };

  return (
    <span className={`px-3 py-1 rounded-lg text-sm font-medium ${colorClasses[color]}`}>
      {isClient ? (
        <EncryptedText
          text={text}
          encryptedClassName="text-transparent"
          revealedClassName=""
          revealDelayMs={delay}
        />
      ) : (
        text
      )}
    </span>
  );
};