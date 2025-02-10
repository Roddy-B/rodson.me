import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="">
            <div className="container mx-auto flex justify-center md:justify-start m-5 md:border-b-2 border-b-0">
                <Link href="./">
                    <Image 
                        src="/rb-logo.png"
                        alt="meu logo"
                        width={150}
                        height={150}
                        className="md:w-150 md:h-150 sm:w-120 sm:h-120 w-100 h-100"
                    />
                </Link>
            </div>
        </header>
    )
}