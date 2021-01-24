import React from 'react'
import easy from '../assets/easy.png'
import flexible from '../assets/flexible.png'
import intuitive from '../assets/intuitive.png'
import reliable from '../assets/reliable.png'
import BestAdvantage from './BestAdvantage'
import laptop from '../assets/laptop.png'
export default function Advantage() {
    return (
        <div>
            <BestAdvantage/>
            <div className="flex pl-113px pr-186px text-dblue-900 pt-86px pb-128px bg-white h-auto">
                <div className="flex flex-1 flex-col ">
                    <h1 className="text-48px font-semibold leading-28px tracking-tracking-0.75 mb-58px">Our Advantages</h1>
                    <div className="flex items-center mb-60px">
                        <img width="80" height="80" src={easy}/>
                        <div className="ml-56px align-left w-484px">
                            <h2 className="text-25px leading-28px tracking-tracking-0.75 font-semibold mb-20px">Easy</h2>
                            <p className="font-normal text-24px leading-28px tracking-tracking-0.75"> 
                                An interface that is easy to use even for beginners 
                            </p>
                        </div>
                    </div> 
                    <div className="flex items-center mb-60px">
                        <img width="80" height="80" src={intuitive}/>
                        <div className="ml-56px align-left w-484px">
                            <h2 className="text-25px leading-28px tracking-tracking-0.75 font-semibold mb-20px">intuitive</h2>
                            <p className="font-normal text-24px leading-28px tracking-tracking-0.75"> 
                                An api usable even by non-developers 
                            </p>
                        </div>
                    </div> 
                    <div className="flex items-center mb-60px">
                        <img width="80" height="80" src={flexible}/>
                        <div className="ml-56px align-left w-484px">
                            <h2 className="text-25px leading-28px tracking-tracking-0.75 font-semibold mb-20px">flexible</h2>
                            <p className="font-normal text-24px leading-28px tracking-tracking-0.75"> 
                                Can be integrated on several systems for all your needs  
                            </p>
                        </div>
                    </div> 
                    <div className="flex items-center mb-60px">
                        <img width="80" height="80" src={reliable}/>
                        <div className="ml-56px align-left w-484px">
                            <h2 className="text-25px leading-28px tracking-tracking-0.75 font-semibold mb-20px">reliable</h2>
                            <p className="font-normal text-24px leading-28px tracking-tracking-0.75"> 
                                You just have to see our statue page to understand why we are so appreciated. 
                            </p>
                        </div>
                    </div> 
                </div>
                <div className="flex flex-1">
                    <img width="785" height="702" src={laptop}/>
                </div>
            </div>
        </div>
    )
}
