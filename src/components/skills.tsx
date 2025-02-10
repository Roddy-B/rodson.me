"use client"

import { FaPython, FaMicrosoft, FaReact, FaGithub, FaJs, FaDatabase,   } from 'react-icons/fa';
import { RiEnglishInput } from "react-icons/ri";
import { GrLanguage } from "react-icons/gr";
import { useState } from 'react';

type SkillCategory = 'technology' | 'language' | 'all';

export default function Skills() {
    const allSkills = [
        { icon: <FaReact className="text-3xl " />, name: 'React', type: 'technology' },
        { icon: <FaJs className="text-3xl" />, name: 'Javascript', type: 'technology' },
        { icon: <FaPython className="text-3xl" />, name: 'Python', type: 'technology' },
        { icon: <FaDatabase className="text-3xl" />, name: 'SQL', type: 'technology' },
        { icon: <FaMicrosoft className="text-3xl" />, name: 'Office', type: 'technology' },   
        { icon: <FaGithub className="text-3xl" />, name: 'Git', type: 'technology' },   
        { icon: <GrLanguage className="text-3xl" />, name: 'Portuguese', type: 'language' }, 
        { icon: <RiEnglishInput className="text-3xl" />, name: 'English', type: 'language' },

    ];

    const [displayedSkills, setDisplayedSkills] = useState(allSkills);
    const [activeCategory, setActiveCategory] = useState('technology'); 


    const filterSkills = (category: SkillCategory) => { 
        setActiveCategory(category);
        setDisplayedSkills(category === 'all' ? allSkills : allSkills.filter(skill => skill.type === category));
    };

    return (
        <section id="skills" className="mb-16 pt-10 px-4 md:px-0">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
                    Skills
                </h2>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-2 border-b-2 pb-2 font-semibold text-gray-500 justify-center md:justify-start">
                    <h3
                        className={`cursor-pointer ${activeCategory === 'technology' ? 'font-bold text-blue-900 ' : ''}`}
                        onClick={() => filterSkills('technology')}
                    >
                        Tecnologias
                    </h3>
                    <h3
                        className={`cursor-pointer ${activeCategory === 'language' ? 'font-bold text-blue-900' : ''}`}
                        onClick={() => filterSkills('language')}
                    >
                        Languages
                    </h3>
                    <h3
                        className={`cursor-pointer ${activeCategory === 'all' ? 'font-bold text-blue-900' : ''}`}
                        onClick={() => filterSkills('all')}
                    >
                        All
                    </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 pt-3 justify-center sm:px-4 md:px-4">
                    {displayedSkills.map((skill, index) => (
                        <div key={index}
                            className="p-4 rounded-lg shadow-m gap-6 flex bg-gray-100 border border-gray-200 items-center justify-center 
                            h-[50px] w-[250px] sm:w-auto sm:h-auto md:w-auto md:h-auto lg:h-[52px] lg:w-[275px] xl:h-[62px] xl:w-[300px] 
                            px-4 sm:px-2 md:px-4
                            mx-auto sm:mx-0"> {/* Added mx-auto for centering on mobile */}
                            {skill.icon}
                            <span className="mt-2 text-black text-sm font-semibold">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}