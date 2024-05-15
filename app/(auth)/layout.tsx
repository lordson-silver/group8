"use client"

import { AuthNav } from "@/components/nav";
import { RadialGradientSVG } from "@/components/ui/radialGradient";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname()

  return (
    
      <div className="relative flex flex-row">

        {/* left */}
        <div className="w-full min-h-screen flex flex-col sm:w-[60%]">
          <AuthNav 
            className="min-w-full border-b pb-2 border-[#DFDFE5]"
            navText={`${pathname === '/signin' ? 'Sign Up' : pathname === '/signup' ? 'Sign In' : ''}`}
            href={pathname === '/signin' ? '/signup' : pathname === '/signup' ? '/signin' : ''}
          />
          <main className="flex flex-grow justify-center items-center">
            {children}
          </main>
        </div>

        {/* right */}
        <div className="relative hidden bg-black bg-cover bg-no-repeat bg-left bg-grid-white w-[40%] sm:flex justify-center items-center overflow-hidden">
          <h1 className="text-6xl text-center text_gradient">
            Empowering Students through Mentorship
          </h1>
          <RadialGradientSVG
            className="w-[250%] flex items-center justify-center -z-10"
          />
        </div>

      </div>
    
  );
}
