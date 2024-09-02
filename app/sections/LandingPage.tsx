/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import projectExamples from '@/app/Data/data'
import { link } from 'fs'
import { cn } from "@/app/lib/utils";
import Marquee from "@/app/Components/marquee"

const LandingPage = () => {
    const [model, setModel] = useState(false)
    const [projects, setProjects] = useState(projectExamples)
    console.log(model)

  return (
    <>
    <main className=' flex flex-col  w-full max-w-fit bg-[#121212] text-white '>
        <div className=" w-full flex flex-col md:flex-row  pb-6 ">
        <section className=" grid px-16 w-full ">
            <div className=" w-full flex flex-col ">
                <h1 className=" text-2xl md:text-5xl   uppercase bodoni-moda pt-20 md:pt-60">Hey, I'm <span className=' text-[#eb7535]'>Blair.</span> </h1>
                <h2 className=' text-md md:text-4xl pt-3 uppercase font-BodoniModa  font-normal '>I am software <span className=' text-rose-500'>developer</span></h2>
                <div className="flex justify-left space-x-4 md:space-x-14 pt-6 text-sm md:text-md uppercase">
                     
                    <button className="hover:translate-y-2 ease-linear  uppercase border px-3 md:px-10 rounded-md border-[#262626] hover:border-rose-500 duration-500">Resume</button>
                </div>
            </div>
        </section>

        <section className="md:mt-60 mt-8 mx-4 md:px-0 grid ">
            <div className=" w-full flex flex-col">
                    
                <h1 className=' text-2xl md:text-5xl'>About</h1>
                    <p className="py-4  md:w-[80%] md:text-sm font-thin">Back in 2013, I decided to try my hand at learning how to code and create websites, and tumbled head first into the rabbit hole of coding and web development. 
                     After many books, online coding program's, and lots of trial & error, I started to get a good feel for web development. 
                    But I knew the journey was just beginning!
                    </p>
                    <p className="  md:text-sm md:w-[80%]  py-2 font-thin">
                      Fast-forward to today, I've been diving into more complex technologies like <span className=' font-bold text-white'>React,</span> <span className='font-bold text-white'>Next-js,</span> <span className='text-white font-bold'>Tailwind,</span>  and <span className=' font-bold text-white'>Typescript.</span> As this field continues to change, I am always still learning. 
                      Which I enjoy because I like to continually get better at whatever I set my heart and mind too! 
                      When I’m not at the computer, I’m usually watching the Golden State Warriors, exploring the wild backpacking, or deep into video editing for FilmDUO.
                     </p>
                </div>
        </section>
        </div>


        <section className="grid grid-cols-1 col-span-2 pt-12 md:pt-40">
            <div className=" ">
                <ul className=" items-center text-center md:text-left flex px-3 text-xs md:text-base md:px-6  justify-center md:justify-start md:font-light text-white md:text-[#ebebeb] space-x-2 ">
                    <li className="    text-xs md:text-base border rounded-md  border-[#262626] px-2 md:px-4 hover:text-[#eb7535]  duration-300 cursor-pointer">All</li>
                    <li className="text-xs md:text-base hover:text-[#eb7535] rounded-md hover:border border-[#262626] px-2 md:px-4 duration-300 cursor-pointer">Email Example</li>
                    <li className="text-xs md:text-base hover:text-[#eb7535] rounded-md hover:border border-[#262626] px-2 md:px-4  duration-300 cursor-pointer">React Projects</li>
                    <li className="text-xs md:text-base hover:text-[#eb7535] rounded-md hover:border border-[#262626] px-2 md:px-4  duration-300 cursor-pointer">Frontend Mentor Projects</li>
                    
                </ul>
                <div className="[--duration:60s]  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 h-full max-h-full px-2 md:px-6  py-8 gap-2">
                    {
                        projects.map((examples:{id:number, stack:string, image:string, type:string, name:string, Link:string})=> {
                            const {name, Link, id, image, type, stack} = examples
                            return (
                                
                                <div key={id} className=" flex flex-col  hover:-translate-y-2 ease-linear duration-500 border rounded-md overflow-hidden  border-[#262626]  ">
                                    <a className=' h-[75%] md:h-[80%] overflow-hidden' href={Link}>
                                         <Image width={500} height={500} className=' w-full cursor-pointer  md:h-[99%] flex zoom overflow-hidden ' src={image} alt=" projects" /></a>
                                        <div className="flex justify-between ">
                                            <div className="flex items-center gap-2">
                                                <h1 className=" text-xs md:text-md  md:font-normal pt-2 md:pt-6 md:pb-2 pl-2 flex justify-start items-end">{name}</h1>
                                                <h2 className=" flex pt-2 md:pt-6 md:pb-2 text-xs md:font-light">- {type}</h2>
                                            </div>
                                            <div className="flex">
                                             <h2 className=" items-center flex pt-2 px-3 md:px-0 md:pt-6 md:pb-2 text-xs md:font-light">{stack}</h2>
                                               <a href={Link}><Image width={500} height={500} className=' hidden md:flex hover:-translate-y-2 ease-linear duration-500 h-4 w-4 -rotate-45 mt-6 mx-4' src='/arrow.png' alt=" website desenation" /></a>
                                            </div>
                                        </div>
                                    
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
        </section>
       
    </main>
    </>
  )
}

export default LandingPage