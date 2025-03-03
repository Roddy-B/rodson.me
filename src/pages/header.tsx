"use client";

import Image1 from 'next/image';
import Image2 from 'next/image';
import Image3 from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

interface HeaderProps {
    isPortuguese: boolean;
    onLanguageChange: (lang: boolean) => void;
}

export default function Header({ isPortuguese, onLanguageChange }: HeaderProps) {
    const letters: string[] = ['R', 'O', 'D', 'S', 'O', 'N', 'E'];
    const [displayLetter, setDisplayLetter] = useState<string>('R');
    const indexRef = useRef<number>(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDisplayLetter(letters[indexRef.current]);
            indexRef.current = (indexRef.current + 1) % letters.length;
        }, 1000);

        return () => clearInterval(intervalId);
    }, [letters]);

    const handleLanguageSwitch = () => {
        onLanguageChange(!isPortuguese);
    };

    return (
        <header className="">
            <div className="container mx-auto flex justify-between items-center md:border-b-2 border-b-0">
                <div className="flex items-center">
                    <Link href="./" className="">
                        <Image1
                            src="/rb-logo.png"
                            alt="meu logo"
                            width={150}
                            height={150}
                            priority
                            className="md:w-150 md:h-150 hidden sm:w-120 sm:h-120 sm:mt-2 w-100 h-100"
                        />
                    </Link>
                    <div className='m-2'>
                        <div className='w-14 h-14 border-4 rounded text-white text-5xl font-mono font-extrabold flex items-center justify-center '>
                            <p className='text-center'>{displayLetter}</p>
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleLanguageSwitch}
                    className="pr-4"
                >
                    {isPortuguese ? <Image2 src="/gb.png" alt='english' width={35} height={35}/> : <Image3 src="/moz.png" alt='english' width={35} height={35}/>}
                </button>
            </div>
        </header>
    );
}