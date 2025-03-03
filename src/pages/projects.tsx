"use client";

import Image from "next/image";
import Link from 'next/link';

interface ProjectCardProps {
    imageSrc: string;
    projectName: string;
    technologies: string[];
    description: string;
    projectLink: string;
    isPortuguese: boolean; // Add isPortuguese prop
}

interface TechUsed {
    name: string;
    technologies: string[];
}

const projects: TechUsed[] = [
    { name: "Standard Bank", technologies: ["Nextjs", "Tailwindcss", "html", "css", "vercel", "github"] },
    { name: "Project2", technologies: ["html", "javascript", "node.js", "express"] },
    { name: "Project3", technologies: ["python", "django", "postgresql"] },
    { name: "Project4", technologies: ["react", "typescript", "firebase"] },
    { name: "Project5", technologies: ["java", "spring boot", "mysql"] },
];

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, projectName, technologies, description, projectLink, isPortuguese }) => {
    const viewProjectText = isPortuguese ? "ver projeto" : "view project";

    return (
        <div className="">
            <div className="overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={projectName}
                    height={338}
                    width={511}
                    priority
                    className="rounded object-contain"
                    style={{ height: '338px', width: '511' }}
                />
            </div>

            <div className="bottom-0 left-0 right-0 pt-4">
                <div className="">
                    <h3 className="text-white font-medium text-2xl pb-2 flex justify-between">
                        {projectName}
                        <Link href={projectLink} className="font-normal text-lg text-blue-400">
                            {viewProjectText}
                        </Link>
                    </h3>
                    <p className="pb-2 pr-6 font-light font-Inter text-base">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1">
                        {technologies.map((tech, index) => (
                            <span key={index} className="border-[1px] border-white/50 rounded text-white px-2 py-1  text-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

interface ProjectsProps {
    isPortuguese: boolean;
}

export default function Projects({ isPortuguese }: ProjectsProps) {
    const englishDescriptions = [
        "Redesign of Standard Bank's landing page",
        "Another amazing project",
        "A django powered website",
        "A react web application",
    ];

    const portugueseDescriptions = [
        "Redesign da landing page do Standard Bank",
        "Outro projeto incrível",
        "Um site desenvolvido com django",
        "Uma aplicação web react",
    ];

    const descriptions = isPortuguese ? portugueseDescriptions : englishDescriptions;
    const projectTitle = isPortuguese ? "Projectos" : "Projects";

    return (
        <div className="pb-10 pt-10 px-4 md:px-0 font-GTWalsheimPro">
            <div className="container mx-auto">
                <h1 className="text-#1A1A1A text-3xl font-bold mb-4 border-b-2 pb-2">{projectTitle}</h1>
                <div className="mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-8 pt-2">
                        <ProjectCard
                            imageSrc="/tumbnail/work.png"
                            projectName="Standard Bank"
                            technologies={projects[0].technologies}
                            description={descriptions[0]}
                            projectLink="https://www.google.com"
                            isPortuguese={isPortuguese}
                        />
                        <ProjectCard
                            imageSrc="/tumbnail/work.png"
                            projectName="Project2"
                            technologies={projects[1].technologies}
                            description={descriptions[1]}
                            projectLink="https://www.example.com"
                            isPortuguese={isPortuguese}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}