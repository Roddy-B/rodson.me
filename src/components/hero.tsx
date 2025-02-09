import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {

    return (
        <section className="flex flex-col md:flex-row items-center mt-20 mb-20 pt-7 pb-7">
            <div className="md:w-1/2">
                <h1 className="text-4xl font-bold mb-8 text-blue-900">Rodsone Bacela</h1>
                <h2 className="text-xl font-semibold mb-2">Hey my name is Rodsone Bacela, and I'm a frontend developer</h2>
                <p className="pb-10">I bring figma and prototype design into real life giving the user a good experience</p>

                <Link href="#" >
                    <button className="bg-blue-900 hover:bg-gray-500 text-white font-white font-semibold p-3  border border-gray-100  rounded">
                        Baixar CV
                    </button>
                </Link>
            </div>
            <div className="md:w-1/2 p-10">
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