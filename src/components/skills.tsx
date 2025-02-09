"use client"

import { FaPython, FaHtml5, FaReact, FaNodeJs, FaCss3,  } from 'react-icons/fa';
import { RiEnglishInput } from "react-icons/ri";
import { GrLanguage } from "react-icons/gr";
import { useState } from 'react';

type SkillCategory = 'technology' | 'language' | 'all';

export default function Skills() {
    const allSkills = [
        { icon: <FaReact className="text-3xl " />, name: 'React', type: 'technology' },
        { icon: <FaNodeJs className="text-3xl" />, name: 'Node.js', type: 'technology' },
        { icon: <FaPython className="text-3xl" />, name: 'Python', type: 'technology' },
        { icon: <FaHtml5 className="text-3xl" />, name: 'HTML5', type: 'technology' },
        { icon: <FaCss3 className="text-3xl" />, name: 'CSS3', type: 'technology' },
        { icon: <GrLanguage className="text-3xl" />, name: 'Portuguese', type: 'language' }, 
        { icon: <RiEnglishInput className="text-3xl" />, name: 'English', type: 'language' },   
        { icon: <FaReact className="text-3xl " />, name: 'AnotherTech', type: 'technology' },
        { icon: <FaPython className="text-3xl" />, name: 'JavaScript', type: 'technology' },

    ];

    const [displayedSkills, setDisplayedSkills] = useState(allSkills);
    const [activeCategory, setActiveCategory] = useState('technology'); 


    const filterSkills = (category: SkillCategory) => { 
        setActiveCategory(category);
        setDisplayedSkills(category === 'all' ? allSkills : allSkills.filter(skill => skill.type === category));
    };

    return (
        <section id="skills" className="mb-16">
            <h2 className="text-3xl font-semibold mb-4">
                Skills
            </h2>
            <div className="flex gap-8 p-2 border-b-2 pb-2">
                <h3
                    className={`cursor-pointer ${activeCategory === 'technology' ? 'underline' : ''}`}
                    onClick={() => filterSkills('technology')}
                >
                    Tecnologias
                </h3>
                <h3
                    className={`cursor-pointer ${activeCategory === 'language' ? 'underline' : ''}`}
                    onClick={() => filterSkills('language')}
                >
                    Languages
                </h3>
                <h3
                    className={`cursor-pointer ${activeCategory === 'all' ? 'underline' : ''}`}
                    onClick={() => filterSkills('all')}
                >
                    All
                </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 px-3 pt-3">
                {displayedSkills.map((skill, index) => (
                    <div key={index}
                        className="p-4 rounded-lg shadow-m gap-4 flex bg-gray-100 border border-gray-200 items-center justify-center h-[42px] w-[225px] lg:h-[52px] lg:w-[275px] xl:h-[62px] xl:w-[300px] sm:w-1/2 md:w-1/3">
                        {skill.icon}
                        <span className="mt-2 text-black">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}