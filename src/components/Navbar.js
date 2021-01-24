import React from 'react'
import logo from '../assets/logo.svg'


export default function navbar() {
    return (
        <nav className="flex bg-syellow-900 h-90px min-h-50px p-collapse shadow-044 rounded-b-lg">
            <img width="213" height="71" className="ml-43px mt-18px mb-6px " src={logo}/>
            <ul className="flex ml-40px items-center text-24px leading-28px text-dblue-900 ">
                <li className=" font-semibold  mr-40px ">Hompage</li>
                <li className="mr-7px font-normal">Dashboard</li>
                <li className="font-normal">Pricing</li>
            </ul>
            <ul className="flex ml-auto mr-109px items-center text-24px leading-28px text-dblue-900 ">
                <li className="font-normal">Sign Up</li>
                <li className="ml-38px font-normal">Sign In</li>
            </ul>
        </nav>
    )
}
