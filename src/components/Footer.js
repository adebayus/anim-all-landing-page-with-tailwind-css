import React from 'react'
import logo from '../assets/logo.svg'
import fb from '../assets/001-facebook.svg'
import twitter from '../assets/003-twitter.svg'
import instagram from '../assets/004-instagram.svg'
export default function Footer() {
    return (
		<div className="flex flex-col items-center pt-43px pb-1 bg-dblue-900 h-182px ">
			<div className="flex w-1348px h-105px">
				<div className="mr-139px">
					<img width="216" height="72" src={logo} />
				</div>
				<div className="mr-150px">
					<h3 className="pl-1 mb-1 w-147px text-18px font-normal text-sorange-900 ">
						Subscribe to our newsletter
					</h3>
					<form className="flex relative w-300px">
						<input
							type="text"
							className="px-3 py-1 text-13px focus:outline-none text-white leading-22.5px font-normal tracking-neg-0.3px w-full h-42px bg-dblue-800 rounded-lg"
						/>
						<input
							type="submit"
							value=">"
							className="absolute top-0 right-0 flex bg-sorange-900 text-white justify-center items-center w-42px h-42px rounded-lg"
						/>
					</form>
				</div>
				<div className="text-white mr-142px">
					<h3 className="mb-3 text-18px font-normal text-sorange-900 ">
						Service
					</h3>
					<p className="mb-3 text-15px leading-22.5px tracking-neg-0.3px font-normal">
						Animal
					</p>
					<p className="text-15px leading-22.5px tracking-neg-0.3px font-normal">
						Api
					</p>
				</div>
				<div className="text-white mr-156px">
					<h3 className="mb-3 text-18px font-normal text-sorange-900 ">
						About Us
					</h3>
					<p className="mb-3 text-15px leading-22.5px tracking-neg-0.3px font-normal">
						Our Story
					</p>
					<p className="text-15px leading-22.5px tracking-neg-0.3px font-normal">
						Advantage
					</p>
				</div>
				<div className="text-white">
					<h3 className="mb-3  text-18px font-normal text-sorange-900 ">
						Follow Us
					</h3>
                    <div className="flex justify-around">
                        <img width="7.94" height="15.88" src={fb} />
                        <img width="19.56" height="15.89" src={twitter} />
                        <img width="16" height="16" src={instagram} />
                        
                    </div>
				</div>
			</div>
			<p className="font-normal text-15px tracking-neg-0.3px text-dblue-800">
				Copyright © 2020. Anim’all. All rights reserved.
			</p>
		</div>
	);
}
