import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="py-8 mb-8">
            <div className="container mx-auto flex justify-start m-5">
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