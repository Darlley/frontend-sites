import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FlipWords } from './_components/ui/flip-words'
import { ShinyText } from './_components/ui/shiny-text';
import CustomSpline from './_components/ui/custom-spline';

export default function Site02Page() {
  const words = ["Automação de Marketing", "Developer", "Growth Hacking", "Social media"];

  return (
    <div className='relative h-svh w-full bg-black'>
      <div className="absolute bottom-0 left-0 z-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:80px_80px]" />

      <nav className='z-10 flex items-center gap-12 absolute w-max left-1/2 transform -translate-x-1/2 top-10 bg-black/10 backdrop-blur-xs border py-2 pl-4 pr-2 rounded-lg border-gray-800'>
        <Image src="/vercel.svg" alt="logo" width={18} height={18} />
        <ul className='flex items-center gap-4'>
          <li>Inicio</li>
          <li>Recursos</li>
          <li>Preços</li>
        </ul>
        <Link href="#" className='border border-gray-800 rounded-md py-1 px-3'>
          <ShinyText text="Join waitlist" disabled={false} speed={3} className='shiny-text' />
        </Link>
      </nav>

      <div className='relative z-10 container mx-auto w-full h-full flex justify-between items-center'>
        <div className='w-full'>
          <div className='z-0'>
            <h1 className='text-7xl'>
              <FlipWords words={words} />
            </h1>
          </div>
          <div className='z-[1] my-10'>
            <p className='text-lg'>Somos a formula de suceeso para sua estratégia digital, desde a criação de landing pages de vendas à implementação de funis de vendas automaticos em suas redes sociais.</p>
          </div>
          <div className='flex items-center gap-4'>
            <Link href="#" className='border border-gray-800 hover:bg-gray-800 transition-colors rounded-md py-2 px-6'>Fale com o especialista</Link>
            <Image src="/site02/profile.jfif" alt="Profile" width={40} height={40} className='rounded-full' />
          </div>
        </div>

        <div className='w-full h-full flex justify-center items-center'>
          <CustomSpline />
        </div>
      </div>

    </div>
  )
}

