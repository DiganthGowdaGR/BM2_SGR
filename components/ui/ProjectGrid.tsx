// ProjectsGrid.tsx
import ProjectCard from './ProjectCard';
import LogoLoop from './LogoLoop';
import type { LogoItem } from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiFigma, SiThreedotjs } from 'react-icons/si';

function ProjectGrid() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      imageUrl: "project/demo1.jpg",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      githubUrl: "https://github.com/username/ecommerce-platform",
      demoUrl: "https://my-ecommerce-demo.vercel.app"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      imageUrl: "project/demo1.jpg",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      githubUrl: "https://github.com/username/task-manager",
      demoUrl: "https://taskapp-demo.netlify.app"
    }
  ];

  // const logos: LogoItem[] = [
  //   { node: <SiReact />, title: "React", href: "https://react.dev" },
  //   { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  //   { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  //   { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  //   { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  //   { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  //   { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  //   { node: <SiThreedotjs />, title: "Three.js", href: "https://threejs.org" },
  // ];

  return (
    <section className="relative w-full h-full">
      {/* Galaxy Background */}
      {/* <div className="absolute inset-0 z-0">
    
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 h-full">
        {/* Optional: Uncomment if you want a header */}
        {/* <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div> */}
        
        {/* Logo Loop */}
        <div className="mb-12 text-white"> {/* Added text-white here */}
          {/* <LogoLoop
            // logos={logos}
            speed={100}
            direction="left"
            logoHeight={4}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000000" // Assuming a black background for fade
            ariaLabel="Technology stack"
          /> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              techStack={project.techStack}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectGrid;