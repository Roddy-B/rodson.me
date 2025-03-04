"use client"

import React from 'react';
import { FaLinkedin, FaEnvelope,  FaGithub } from 'react-icons/fa';
import { BsChatLeftDotsFill } from "react-icons/bs";

interface AboutProps {
  isPortuguese: boolean;
}



export default function Contacto({ isPortuguese }: AboutProps) {

  const englishContent = {
    title: "Contact",
    chat: "Let's Chat",
    content: "Tell me about your projects, and let's make something great together"
  }
  const portugueseContent = {
    title: "Contacto",
    chat: "Entre em contacto",
    content: "Fale-me sobre os seus projetos, e vamos criar algo incrível juntos."
  }

  const content = isPortuguese ? portugueseContent : englishContent;
  const emailAddress = 'rodsonfernandes03@gmail.com';

  return (
    <section className=" pb-10 px-6 md:px-0 font-GTWalsheimPro">
        <div className="container mx-auto  ">
        <h2 className="text-2xl font-semibold mb-4">
                {content.title}
        </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 border-2 border-gray rounded-lg p-8">

      <div >
            <BsChatLeftDotsFill className=" text-2xl text-green-500"/>
            <p className=" text-white font-extrabold pt-4">
                {content.chat}
            </p>
            <p className="mb-6 text-white">
                {content.content}
            </p>
        </div>

        {/* Left side: Form */}
        <div className='flex flex-col gap-4 p-4 text-xl '>
        <a
          href="https://www.linkedin.com/in/rodsone-bacela-4622bb137"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 flex gap-4 items-center border-gray-100 rounded-lg p-4 hover:bg-white hover:text-black"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

          <div className="border-2 items-center border-gray-100 rounded-lg p-4 hover:bg-white hover:text-black">
            <div className="flex gap-4 items-center">
              <FaEnvelope />
              <span>Email</span>
            </div>
            <a
              href={`mailto:${emailAddress}`}
              className="text-sm"
            >
              {emailAddress}
            </a>
          </div>

          <a
          href="https://github.com/Roddy-B"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 flex gap-4 items-center border-gray-100 rounded-lg p-4 hover:bg-white hover:text-black"
        >
          <FaGithub />
          <span>Github</span>
        </a>

        </div>

        
      </div>
        </div>
    </section>
  );
}