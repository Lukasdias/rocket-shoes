import React from 'react'
import MainShoes from './../../public/tenis-1-ampliado.png'

import OtherShoes1 from './../../public/tenis-1-galeria.png'
import OtherShoes2 from './../../public/tenis-2-galeria.png'
import OtherShoes3 from './../../public/tenis-3-galeria.png'

export function Product() {
  return (
    <section
      className="flex z-10 flex-col items-center p-10 bg-rocket-main-background lg:absolute lg:top-0 
    lg:left-[33vw] lg:justify-center lg:p-0 lg:w-[67vw] lg:h-screen
    "
    >
      <div className="w-11/12 lg:-mt-[8vh] lg:w-1/3 2xl:-mt-[17vh]">
        <img
          src={MainShoes}
          alt="shoes_1"
          className="mx-auto w-full max-w-[600px] h-auto lg:max-w-[550px]"
        />
      </div>
      <div className="flex gap-2 justify-center w-full lg:w-3/4 2xl:w-full">
        <img
          src={OtherShoes1}
          alt="shoes_1"
          className="w-full border-b-2 border-b-transparent hover:border-b-rocket-button border-solid transition duration-300 hover:-translate-y-1 cursor-pointer lg:max-w-[170px] 2xl:max-w-[260px]"
        />
        <img
          src={OtherShoes2}
          alt="shoes_1"
          className=" w-full border-b-2 border-b-transparent hover:border-b-rocket-button border-solid transition duration-300 hover:-translate-y-1  cursor-pointer lg:max-w-[170px] 2xl:max-w-[260px] "
        />
        <img
          src={OtherShoes3}
          alt="shoes_1"
          className=" w-full border-b-2 border-b-transparent hover:border-b-rocket-button border-solid transition duration-300 hover:-translate-y-1  cursor-pointer lg:max-w-[170px] 2xl:max-w-[260px]  "
        />
      </div>
    </section>
  )
}
