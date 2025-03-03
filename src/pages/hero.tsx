"use client";

import Image from 'next/image';
import dynamic from 'next/dynamic';

const Typewriter = dynamic(() => import('typewriter-effect'), {
    ssr: false,
});

interface HeroProps {
    isPortuguese: boolean;
}

export default function Hero({ isPortuguese }: HeroProps) {
    interface Content {
        title: string;
        description: string;
        downloadCV: string;
        iam: string;
        jobs: string[];
    }

    const englishContent: Content = {
        title: "Rodsone Bacela",
        description: "I bring UI designs to life, delivering a clean, functional, and highly interactive web interface",
        downloadCV: "Download CV",
        iam: "I'm a",
        jobs: [
            ' Web Developer',
            'Front-end Developer',
        ],
    };

    const portugueseContent: Content = {
        title: "Rodsone Bacela",
        description: "Dou vida as UI, criando interfaces web limpas, funcionais e altamente interativas.",
        downloadCV: "Baixar CV",
        iam: "Eu sou um",
        jobs: [
            'Desenvolvedor Web',
            'Desenvolvedor Front-end',
        ],
    };

    const content: Content = isPortuguese ? portugueseContent : englishContent;

    return (
        <section className="flex flex-col md:flex-row items-center mt-10 md:mt-20 mb-10 md:mb-20 pt-5 md:pt-7 pb-5 md:pb-7 px-4 md:px-0 font-GTWalsheimPro">
            <div className="px-4 container mx-auto sm:gap-4 flex flex-col md:flex-row items-center">
                <div className="md:w-3/4 text-center md:text-left md:pr-8">
                    <h1 className="text-4xl md:text-7xl font-black mb-4 md:mb-8 bg-gradient-to-r from-custone via-custtwo to-green-500 bg-clip-text text-transparent leading-tight">
                        {content.title}
                    </h1>
                    <div className='flex gap-2'>
                        <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 flex gap-2">
                            {content.iam}
                        </h2>
                        <h2 className='text-xl md:text-2xl font-bold mb-2 md:mb-4 font-franklin text-green-500'>
                            <Typewriter
                                options={{
                                    strings: content.jobs,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h2>
                    </div>
                    <p className="pb-5 md:pb-10 text-lg font-thin text-white/50 md:text-2xl ">
                        {content.description}
                    </p>
                    <a href="/rodson-cv.pdf"
                        className="bg-white hover:bg-gradient-to-r from-custone via-custtwo to-green-500 text-black font-semibold py-2 px-4 md:py-3 md:px-6 border border-gray-100 rounded">
                        {content.downloadCV}
                    </a>
                </div>
                <div className="md:w-1/4 p-4 md:p-5 flex justify-center rounded">
                    <Image
                        src="/rr.png"
                        alt="My logo"
                        width={300}
                        height={300}
                        objectFit="contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}