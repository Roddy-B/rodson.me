"use client";

import { FaGraduationCap } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import { CiRead } from "react-icons/ci";

interface AboutProps {
    isPortuguese: boolean;
}

export default function About({ isPortuguese }: AboutProps) {
    const englishContent = {
        title: "About",
        description: "I am a highly motivated front-end developer with attention to detail, interested in creating visually appealing and innovative web applications. I have skills in web development with frameworks such as reactjs & Nextjs and a bit of Django, data analysis with python and SQL database, I have good problem solving skills. I enjoy learning and evolve in dynamic and challenging environments. I am equally effective working in a team and independently, I have good communication skills and I am committed to delivering high quality work.",
        educationTitle: "Education",
        educationUniversity: "Africa University",
        educationDegree: "Bachelor of Science Honors in Computer Science",
        educationDates: "2019 - 2024",
        certificationTitle: "Certification",
        certificationUniversity: "Africa University",
        certificationCourse: "Design Thinking and Entrepreneurship",
        certificationDates: "March - 2024",
    };

    const portugueseContent = {
        title: "Sobre",
        description: "Sou um desenvolvedor front-end altamente motivado e com atenção aos detalhes, com interesse em criar aplicações web visualmente apelativas e inovadoras. Tenho competências em desenvolvimento web com frameworks como React.js e Next.js, análise de dados com Python e bancos de dados SQL. Possuo boas capacidades de resolução de problemas e gosto de aprender e evoluir em ambientes dinâmicos e desafiadores. Sei trabalhar em equipa e sozinho, tenho boas capacidades de comunicação e estou empenhado em entregar trabalho de alta qualidade.",
        educationTitle: "Educação",
        educationUniversity: "Africa University",
        educationDegree: "Licenciatura em Ciências da Computação",
        educationDates: "2019 - 2024",
        certificationTitle: "Certificação",
        certificationUniversity: "Africa University",
        certificationCourse: "Design Thinking and Entrepreneurship",
        certificationDates: "Março - 2024",
    };

    const content = isPortuguese ? portugueseContent : englishContent;

    return (
        <div className="pb-10 pt-10 px-4 md:px-0 font-GTWalsheimPro">
            <div className="container mx-auto">
                <h1 className="text-#1A1A1A text-3xl font-bold mb-4 border-b-2 pb-2">{content.title}</h1>
                <div className="max-w-[750px] mx-auto text-2xl text-green-500">
                  <CiRead/>
                </div>
                <div className="mx-auto mb-8 sm:p-4 flex">
                    <p className="max-w-[750px] mx-auto font-thin text-justify md:text-lg">
                        {content.description}
                    </p>
                </div>
                <div className="max-w-[750px] mx-auto mb-4">
                    <div>
                        <h2 className="flex items-center gap-2 text-green-500 font-semibold">
                            <FaGraduationCap className="text-4xl" /> {content.educationTitle}
                        </h2>
                        <div>
                            <h4 className="font-bold">{content.educationUniversity}</h4>
                            <p className="text-lg font-Inter font-thin">{content.educationDegree}</p>
                            <span>{content.educationDates}</span>
                        </div>
                    </div>
                </div>
                <div className="max-w-[750px] mx-auto flex justify-end pb-4">
                    <div>
                        <h2 className="flex items-center gap-2 text-green-500 font-semibold">
                            <PiCertificate className="text-4xl" /> {content.certificationTitle}
                        </h2>
                        <div>
                            <h4 className="font-bold">{content.certificationUniversity}</h4>
                            <p className="text-lg font-Inter font-thin">{content.certificationCourse}</p>
                            <span>{content.certificationDates}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}