import Image from 'next/image'
import React from 'react'

import { Hotmart } from './components/icons/Hotmart'
import { Eduzz } from './components/icons/Eduzz'
import { Monetizze } from './components/icons/Monetizze'
import { Plus } from './components/icons/Plus'
import Link from 'next/link'

export default function Site01Page() {
  return (
    <header className="overflow-hidden" id="homePage-1">
      <div className="h-[95vh]
    flex
    flex-col
    bg-[#020D21]
    md:h-screen">
        <div className="max-w-6xl
    m-auto
    px-4
    2xl:px-0

    flex
    flex-col

    flex-1">
          <nav className="flex
    justify-between
    items-center
    
    py-2

    text-sm
    
    text-white">
            <h1 className="w-full
    text-xl
    
    font-bold
    first-letter:text-blue-500">
              Agência
            </h1>

            <button className="border
    border-blue-500
    
    font-bold
    
    hover:border-blue-500
    hover:bg-blue-500

    transition-all
    duration-500 w-full
    max-w-max
    py-2
    px-4">Já sou cliente</button>
          </nav>
          
          <div className="text-white

    flex
    flex-col
    justify-center
    items-center
    flex-1
    gap-4

    md:gap-2
    md:flex-row
    md:justify-between

    lg:gap-16">

            <div className="flex
    flex-col
    
    max-w-lg
    text-center
    
    
    md:text-left
    md:w-6/12
    md:max-w-full

    lg:tracking-[0.045em]
    lg:w-7/12">
              <h2 className='text-[2rem]
    font-bold
    z-0
    
    lg:text-[3rem]'>Automações de Processos de <span className="text-blue-500
    relative

    before:w-60
    before:h-60
    before:rounded-full
    before:flex
    before:bg-blue-500
    
    before:absolute
    before:-z-10
    before:opacity-40
    before:blur-3xl

    before:-left-[5rem]
    before:-top-[7rem] text-gradient">Marketing</span> para sua empresa</h2>
              <p>A ferramenta para empresas que desejam crescer e aumentar seu faturamento utilizando processos automatizados no funil de vendas</p>

              <div className="flex
    justify-between
    items-center
    lg:w-10/12
    z-10">
                <div className="p-4 
    flex
    flex-col
    items-center
    justify-start
    font-bold
    opacity-90
    font-mono">
                  <h3 className='text-[1.5rem]
    lg:text-[3rem]'>1M+</h3>
                  <span className='text-[10px]
    text-center
    
    lg:text-xs'>Total faturamento</span>
                </div>
                <span className="w-[2px] bg-white h-16 opacity-10" />
                <div className="p-4 
    flex
    flex-col
    items-center
    justify-start
    font-bold
    opacity-90
    font-mono">
                  <h3 className='text-[1.5rem]
    lg:text-[3rem]'>500+</h3>
                  <span className='text-[10px]
    text-center
    
    lg:text-xs'>Automators</span>
                </div>
                <span className="w-[2px] bg-white h-16 opacity-10" />
                <div className="p-4 
    flex
    flex-col
    items-center
    justify-start
    font-bold
    opacity-90
    font-mono">
                  <h3 className='text-[1.5rem]
    lg:text-[3rem]'>1M+</h3>
                  <span className='text-[10px]
    text-center
    
    lg:text-xs'>Total faturamento</span>
                </div>
              </div>
            </div>
            
            <div className="flex
    w-full
    max-w-lg
    justify-center
    items-center
    
    relative
    z-0
    
    before:hidden
    before:w-80
    before:h-80
    before:p-2
    before:rounded-full
    lg:before:flex
    before:bg-blue-500
    before:-top-20
    before:left-1/4
    before:absolute
    before:-z-10
    before:opacity-40
    before:blur-3xl
    
    after:absolute
    after:w-full
    after:h-96
    after:rounded-full
    after:flex
    after:bg-blue-500
    lg:after:bottom-20
    after:bottom-0
    after:left-0
    after:-z-10
    after:opacity-40
    after:blur-3xl
    
    md:w-6/12
    lg:w-5/12">
              <Image src="/site01/preview.png" width={600} height={600} alt="" className="z-10 absolute hidden lg:-top-[35%] md:-top-44 md:flex" />
              <div className="lg:mt-20 font-extralight 
    
    w-full
    h-max
    rounded-sm
    bg-white
    p-8
    text-[#697E9D]

    relative
    z-10">
                <div className="flex
    items-center
    w-full
    justify-between
    gap-4">
                  <span>1 Integração WhatsApp</span>
                  <span className="rounded-sm
    bg-[#020D21]
    py-2
    px-8
    lg:px-10
    text-green-400
    font-bold">GRÁTIS</span>
                </div>
                
                <div className="flex
    flex-col

    gap-6
    pt-4

    md:gap-6
    md:py-10">
                  <h3 className='font-bold
    text-5xl
    lg:text-6xl
    w-max

    relative'><span className='absolute
    bottom-0
    text-xs
    left-[100%]
    w-full
    text-[#697E9D]
    font-light'>A partir de</span>R$189,00</h3>
                  <button className="p-4
    flex
    justify-center
    gap-2 bg-gradient-to-l
    to-[#103CE7]
    from-[#64E9FF]

    hover:brightness-90

    transition-all
    duration-500
    
    text-white animate-bounce">🚀 DECOLAR AGORA</button>
                </div>

                <div className="text-xs
    flex
    justify-center
    mt-4">
                  <span>Cartão de crédito, Boleto à vista, PayPal e Pix</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="h-[15%]

    w-full
    
    overflow-hidden
    flex
    flex-col
    items-center
    justify-center

    m-auto

    max-w-6xl
    px-4

    gap-4">

          <div className="w-full">
            <span className="text-sm text-[#697E9D]">
            Conheça algumas de nossas integrações 🤯
            </span>
          </div>

          <div className="flex
    items-center
    justify-between
    w-full">
            <aside className="flex 
    items-center 
    justify-between 
    w-full 
    md:gap-16 
    md:justify-start">
              <div>
                <Hotmart className="h-5 text-[#697E9D]" />
              </div>

              <div>
                <Eduzz className="h-5 text-[#697E9D]" />
              </div>

              <div>
                <Monetizze className="h-3 text-[#697E9D]" />
              </div>

              <Link href="#" className="flex text-sm items-center font-bold gap-2 text-[#697E9D] cursor-pointer hover:text-blue-500 group transition-all duration-500">
                <Plus className="h-5 font-mono transition-all duration-500 text-[#697E9D] group-hover:text-blue-500" />
                <span>Saiba mais</span>
              </Link>
            </aside>
          </div>


        </div>
      </div>
    </header>
  )
}
