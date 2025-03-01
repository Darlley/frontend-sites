import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FlipWords } from './_components/ui/flip-words'
import { ShinyText } from './_components/ui/shiny-text';
import CustomSpline from './_components/ui/custom-spline';

export default function Site02Page() {
  const words = ["Automação de Marketing", "Developer", "Growth Hacking", "Social media"];

  return (
    <div className='relative h-svh overflow-hidden w-svw bg-black'>
      <div className="absolute bottom-0 left-0 z-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Navbar responsiva */}
      <nav className='z-10 mx-auto flex items-center justify-center gap-4 md:gap-12 absolute w-max left-1/2 px-4 transform -translate-x-1/2 top-4 md:top-10 bg-black/10 backdrop-blur-xs border p-2 rounded-lg border-gray-800'>
        <Image src="/vercel.svg" alt="logo" width={18} height={18} />
        <ul className='flex items-center gap-4'>
          <li>Inicio</li>
          <li>Recursos</li>
          <li>Preços</li>
        </ul>
        <Link href="#" className='border border-gray-800 rounded-md py-1 px-3'>
          <ShinyText text="Join waitlist" disabled={false} speed={3} className='shiny-text text-sm md:text-base text-nowrap' />
        </Link>
      </nav>

      <div className='relative z-10 container mx-auto w-full h-full flex flex-col md:flex-row justify-center md:justify-between items-center px-4 pt-20 md:pt-0'>
        <div className='w-full md:w-1/2 text-center md:text-left'>
          <div className='z-0'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
              <FlipWords words={words} />
            </h1>
          </div>
          <div className='z-[1] my-6 md:my-10'>
            <p className='text-base md:text-lg'>Somos a formula de sucesso para sua estratégia digital, desde a criação de landing pages de vendas à implementação de funis de vendas automáticos em suas redes sociais.</p>
          </div>
          <div className='flex items-center justify-center md:justify-start gap-4'>
            <Link href="#" className='border border-gray-800 hover:bg-gray-800 transition-colors rounded-md py-2 px-4 md:px-6 text-sm md:text-base'>Fale com o especialista</Link>
            <Image src="/site02/profile.jfif" alt="Profile" width={40} height={40} className='rounded-full' />
          </div>
        </div>

        <div className='w-full md:w-1/2 md:h-full h-2/3 mt-8 md:mt-0 flex justify-center items-center'>
          <CustomSpline />
        </div>
      </div>

    </div>
  )
}