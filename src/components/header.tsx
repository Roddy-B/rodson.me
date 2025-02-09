import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="">
            <div className="container mx-auto flex justify-start m-5 border-b-2">
                <Link href="./">
                    <Image 
                        src="/rb-logo.svg"
                        alt="meu logo"
                        width={150}
                        height={150}
                    />
                </Link>
            </div>
        </header>
    )
}