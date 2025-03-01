import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Site02Page() {
  return (
    <div className='relative h-svh w-full bg-black'>
      <div className="absolute bottom-0 left-0 z-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:80px_80px]" />

      <nav className='flex items-center gap-12 absolute w-max left-1/2 transform -translate-x-1/2 top-10 bg-black/10 backdrop-blur-xs border py-2 pl-4 pr-2 rounded-lg border-gray-800'>
        <Image src="/vercel.svg" alt="logo" width={18} height={18} />
        <ul className='flex items-center gap-4'>
          <li>Inicio</li>
          <li>Recursos</li>
          <li>Preços</li>
        </ul>
        <Link href="#" className='border border-gray-800 rounded-md py-1 px-3'><ShinyText text="Join waitlist" disabled={false} speed={3} className='shiny-text' /></Link>
      </nav>

      <div className='container mx-auto w-full h-full flex justify-between items-center'>
        <div className='bg-red-500 w-full'>
          Developer
        </div>

        <div className='bg-blue-500 w-full flex justify-center items-center'>
          cube
        </div>
      </div>

    </div>
  )
}

type ShinyTextProps = {
  text?: string,
  disabled?: boolean,
  speed?: number,
  className?: string
}

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }: ShinyTextProps) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-[#b5b5b5a4] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
  );
};