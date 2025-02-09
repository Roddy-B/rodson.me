import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {

    return (
        <section className="flex flex-col md:flex-row items-center mt-20 mb-20 pt-7 pb-7">
            <div className="md:w-1/2">
                <h1 className="text-4xl font-bold mb-8">Rodsone Bacela</h1>
                <h2 className="text-2xl font-semibold mb-2">Hey my name is Rodsone Bacela, and I'm a frontend developer</h2>
                <p className="mb-4">We bring figma and protoyopr design design, into real life giving the user a good experience</p>

                <Link href="#">
                    <button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-1 px-4 border border-gray-700 hover:border-transparent rounded m-3 mb-8">
                        Baixar CV
                    </button>
                </Link>
            </div>
            <div className="md:w-1/2">
                <Image 
                    src="/rb-logo.svg"
                    alt="meu logo"
                    width={300}
                    height={300}

                />
            </div>
        </section>
    )
}