import React from 'react'
import Thumbnail from './../../public/img-video.png'
import Arrow from './../../public/icon-arrow.svg'
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
  Binoculars
} from 'phosphor-react'
export function Footer() {
  return (
    <footer className="flex relative z-50 flex-1 h-[15vh] lg:absolute lg:bottom-0 lg:w-screen 2xl:h-[22vh]">
      <img src={Thumbnail} alt="thumbnail" className="h-full" />
      <div className="flex flex-1 gap-5 justify-between items-center px-8 lg:hidden">
        <FacebookLogo className="w-8 h-8 text-zinc-800 transition duration-300 hover:-translate-y-1 focus:-translate-y-1 cursor-pointer" />
        <InstagramLogo className="w-8 h-8 text-zinc-800 transition duration-300 hover:-translate-y-1 focus:-translate-y-1 cursor-pointer" />
        <YoutubeLogo className="w-8 h-8 text-zinc-800 transition duration-300 hover:-translate-y-1 focus:-translate-y-1 cursor-pointer" />
        <TwitterLogo className="w-8 h-8 text-zinc-800 transition duration-300 hover:-translate-y-1 focus:-translate-y-1 cursor-pointer" />
      </div>

      <div className="hidden gap-5 justify-between items-center p-10 w-2/3 bg-white lg:flex">
        <a
          href="https://www.facebook.com"
          target="_blank"
          className="p-5 text-lg font-bold text-black hover:text-rocket-button transition duration-200 hover:-translate-y-2 cursor-pointer"
          rel="noreferrer"
        >
          FACEBOOK
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          className="p-5 text-lg font-bold text-black hover:text-rocket-button transition duration-200 hover:-translate-y-2 cursor-pointer"
          rel="noreferrer"
        >
          INSTAGRAM
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          className="p-5 text-lg font-bold text-black hover:text-rocket-button transition duration-200 hover:-translate-y-2 cursor-pointer"
          rel="noreferrer"
        >
          YOUTUBE
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          className="p-5 text-lg font-bold text-black hover:text-rocket-button transition duration-200 hover:-translate-y-2 cursor-pointer"
          rel="noreferrer"
        >
          TWITTER
        </a>
      </div>

      <div className="hidden flex-1  justify-center items-center h-full font-bold text-white bg-black lg:flex">
        <a href="#" className="group flex">
          EXPLORE MAIS{' '}
          <img
            src={Arrow}
            alt=""
            className="ml-5 w-5 transition duration-200 group-hover:translate-x-2"
          />
        </a>
      </div>
    </footer>
  )
}
