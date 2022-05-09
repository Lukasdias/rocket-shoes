import React, { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { List, MagnifyingGlass } from 'phosphor-react'

export function Collapse() {
  return (
    <>
      <Menu as="div" className="inline-block relative text-left lg:hidden">
        <Menu.Button>
          <List weight="bold" className="w-16 h-16 text-rocket-button" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-5 w-[90vw] bg-zinc-800 rounded-md origin-top-right sm:w-[96vw]">
            <div className="p-1 ">
              <Menu.Item>
                <button className=" flex items-center p-2 w-full text-sm font-bold text-red-700 rounded-md hover:opacity-75 sm:text-lg">
                  Homem
                </button>
              </Menu.Item>
            </div>
            <div className="p-1">
              <Menu.Item>
                <button className=" flex items-center p-2 w-full text-sm font-bold text-red-700 rounded-md hover:opacity-75 sm:text-lg">
                  Mulher
                </button>
              </Menu.Item>
            </div>
            <div className="p-1">
              <Menu.Item>
                <button className=" flex items-center p-2 w-full text-sm font-bold text-red-700 rounded-md hover:opacity-75 sm:text-lg">
                  Criança
                </button>
              </Menu.Item>
            </div>
            <div className="p-1">
              <Menu.Item>
                <button className=" flex items-center p-2 w-full text-sm font-bold text-red-700 rounded-md hover:opacity-75 sm:text-lg">
                  Customizar
                </button>
              </Menu.Item>
            </div>
            <div className="p-1">
              <Menu.Item>
                <div className="flex gap-2 items-center p-2">
                  <MagnifyingGlass weight="bold" className="w-6 h-6" />
                  <input
                    type="text"
                    placeholder="Pesquisar"
                    className="flex items-center p-2 w-full text-sm text-white rounded-md"
                  />
                </div>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}
