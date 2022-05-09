import React, { useState } from 'react'
import ShoesLogo from './../../public/logo.svg'
import IconBag from './../../public/icon-bag.svg'
import { MagnifyingGlass } from 'phosphor-react'
import { Collapse } from './Collapse/index'
// interface HeaderProps {}

export function Header() {
  return (
    <>
      <header className="flex z-20 justify-between items-center p-4 lg:p-8">
        <img
          src={ShoesLogo}
          alt="Shoes Logo"
          className="w-16 h-16 lg:w-[52px] lg:h-9 "
        />

        <nav className="hidden relative w-2/3 lg:grid lg:grid-cols-4">
          <button className="flex justify-center items-center px-2 font-sans text-xl font-bold focus-within:text-rocket-button hover:text-rocket-button focus:text-rocket-button  outline-none focus-within:outline-none focus:outline-none active:outline-none transition duration-200 hover:-translate-y-1 cursor-pointer">
            HOMEM
          </button>
          <button className="flex justify-center items-center px-2 font-sans text-xl font-bold focus-within:text-rocket-button hover:text-rocket-button focus:text-rocket-button  outline-none focus-within:outline-none focus:outline-none active:outline-none transition duration-200 hover:-translate-y-1 cursor-pointer">
            MULHER
          </button>
          <button className="flex justify-center items-center px-2 font-sans text-xl font-bold focus-within:text-rocket-button hover:text-rocket-button focus:text-rocket-button  outline-none focus-within:outline-none focus:outline-none active:outline-none transition duration-200 hover:-translate-y-1 cursor-pointer">
            CRIANÇA
          </button>
          <button className="flex justify-center items-center px-2 font-sans text-xl font-bold focus-within:text-rocket-button hover:text-rocket-button focus:text-rocket-button  outline-none focus-within:outline-none focus:outline-none active:outline-none transition duration-200 hover:-translate-y-1 cursor-pointer">
            CUSTOMIZAR
          </button>
        </nav>

        <div className="group hidden flex-1 gap-2 justify-center items-center p-2 max-w-[220px] bg-white rounded-md lg:flex">
          <MagnifyingGlass
            weight="bold"
            className="w-6 h-6 transition duration-200 group-hover:scale-110"
          />
          <input
            type="text"
            placeholder="Pesquisar"
            className="flex flex-1 items-center p-2 w-full text-sm text-rocket-main-background "
          />
        </div>

        <div className="hidden justify-center  items-center mx-5 lg:flex">
          <img
            src={IconBag}
            alt=""
            className="w-9 h-9 hover:opacity-75 transition duration-200 hover:-translate-y-2 cursor-pointer"
          />
        </div>

        <Collapse />
      </header>
    </>
  )
}
