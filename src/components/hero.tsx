import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center mt-10 md:mt-20 mb-10 md:mb-20 pt-5 md:pt-7 pb-5 md:pb-7 px-4 md:px-0"> {/* Added background color */}
            <div className="container mx-auto flex flex-col md:flex-row items-center"> {/* Added flex-col on container for mobile */}
                <div className="md:w-1/2 text-center md:text-left md:pr-10"> {/* Added padding right on medium screens */}
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-blue-900 leading-tight">Rodsone Bacela</h1>
                    <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">Hey my name is Rodsone Bacela, and I'm a frontend developer</h2>
                    <p className="pb-5 md:pb-10 text-base md:text-lg">I bring Figma and prototype designs to life, giving users a great experience.</p> {/* Improved wording */}

                    <Link href="/" 
                      className="bg-blue-900 hover:bg-gray-500 text-white font-semibold py-2 px-4 md:py-3 md:px-6 border border-gray-100 rounded"> {/* Added <a> tag */}
                        Baixar CV
                    
                    </Link>
                </div>
                <div className="md:w-1/2 p-5 md:p-10 flex justify-center">
                    <Image
                        src="/rb-logo.png"
                        alt="My logo"
                        width={250}
                        height={250}
                        objectFit="contain"
                        priority // Added priority for faster loading of hero image
                    />
                </div>
            </div>
        </section>
    );
}