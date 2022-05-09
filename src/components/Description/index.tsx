import React from 'react'

export function Description() {
  return (
    <section className="flex relative flex-col gap-6 p-10 bg-white lg:gap-3 lg:justify-center  lg:px-20 lg:w-[33vw] 2xl:gap-10">
      <h1 className="text-6xl font-bold leading-[60px] lg:-mt-[166px] lg:text-5xl 2xl:text-6xl 2xl:leading-[70px]">
        Tênis <br /> Esportivo <br /> Para Corrida <br /> Top
      </h1>
      <p className="text-base font-bold leading-4 text-rocket-text-description">
        Esse tênis tem o intuito de te deixar ainda mais fitness, focado, e
        musculoso.
      </p>
      <p className="text-3xl font-bold leading-[40px] lg:text-xl 3xl:text-3xl">
        R$ 1.000,00
      </p>
      <button
        className="flex justify-center items-center px-20 max-w-[200px] h-[90px] text-2xl font-bold text-white bg-rocket-button focus-within::outline-rocket-main-background focus:outline-rocket-main-background outline-none outline-offset-0 transition
        duration-200
      hover:-translate-y-1 lg:mx-auto lg:max-w-[135px] lg:h-[60px] lg:text-xl  2xl:text-2xl"
      >
        COMPRAR
      </button>
    </section>
  )
}
