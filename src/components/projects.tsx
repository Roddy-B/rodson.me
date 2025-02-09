import Image from "next/image";
import Link from 'next/link';

interface ProjectCardProps {
  imageSrc: string;
  projectName: string;
  // Add other props as needed (e.g., description, link)
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, projectName }) => {
  return (
    <div className=" rounded-lg overflow-hidden  relative border-2 border-gray-200">
      <div className="relative h-0 pb-[50.25%] overflow-hidden">
        <Image
          src={imageSrc}
          alt={projectName}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-b bg-black/10  border-b-2"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 ">
        <h3 className="text-white font-bold text-sm  bg-gray-800  p-2 rounded-lg">{projectName}</h3>
      </div>
    </div>
  );
};


export default function Projects() {
  return (
    <div className="pb-10 pt-10">
      <div className="container mx-auto">
        <h1 className="text-#1A1A1A text-2xl font-bold mb-4 border-b-2 pb-2">Projects</h1>
        <div className="mb-8">
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pt-2">
            <ProjectCard imageSrc="/projects.png" projectName="Project 1" />
            <ProjectCard imageSrc="/projects.png" projectName="Project 2" />
            <ProjectCard imageSrc="/projects.png" projectName="Project 2" />
            <ProjectCard imageSrc="/projects.png" projectName="Project 2" />
            {/* Add more ProjectCard components as needed */}
          </div>
        </div>

        {/* Other project categories can be added here */}

      </div>
    </div>
  );
}
