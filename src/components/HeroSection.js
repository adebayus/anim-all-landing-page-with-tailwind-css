import React from 'react'
import logoSearch from '../assets/logo-search.svg'
export default function HeroSection() {
    return (
        <div className="text-dblue-900 p-collapse h-976px bg-heroScetion bg-center bg-cover">
            <div id="title" className="pl-277px pt-145px mb-128px">
                <h1 className="font-semibold text-48px tracking-tracking-0.75 mb-23px">
                    Make your first search
                </h1>
                <h2 className="font-medium text-24px leading-28px tracking-tracking-0.75">
                    Thousand of <span className="text-syellow-900">animals</span> are just waiting for you.
                </h2>
            </div>
            <div id="search" className="flex flex-col items-center">
                <div className="flex  max-w-91px mb-35px"> 
                    <img width="79.4" height="79" className="mr-28px" src={logoSearch}/>
                    <input placeholder="Cat too Beautiful" className="flex justify-center px-8 text-dblue-900 text-24px focus:outline-none focus:ring-2 focus:ring-syellow-900 w-803px h-73px shadow-044 rounded-36.5px"></input>
                </div>
                <button className="flex justify-center text-white text-24px shadow-044 font-semibold  bg-dblue-900 rounded-36.5px items-center justify-center w-242px h-67px focus:outline-none focus:ring-2 focus:ring-offset-dblue-800">Search</button>
            </div>
        </div>
    )
}
