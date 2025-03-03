import type { Metadata } from "next";
import { Inter, Libre_Franklin } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const Franklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rodsone.B Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-black bg-cover bg-no-repeat text-white font-mono"
      >
        <div className="max-w-[1150px] mx-auto bg-neutral-50/5 backdrop-blur-md lg:px-16 lg:py-4 sm:py-4">
        {children}
        </div>
        
      </body>
    </html>
  );
}
