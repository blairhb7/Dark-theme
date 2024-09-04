/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useState } from 'react'
import projectExamples from '@/app/Data/data'
import { Fade, Slide } from "react-awesome-reveal";
import Selected from '../Components/selected'

const LandingPage = ( ) => {
    const [projects, setProjects] = useState(projectExamples)


        
    
  return (
    <>
    <main className=' flex flex-col  w-full  bg-[#000000] text-white '>
        <div className=" w-full flex flex-col md:flex-row md:mt-20 mt-8 pb-6 ">
            <section className=" grid px-8 pt-8 md:pt-0 md:px-16 w-full md:h-auto h-60 ">
                <Slide duration={3000}>
                    <div className=" w-full flex text-center sm:text-left flex-col ">
                        <h1 className=" text-4xl sm:text-7xl md:text-5xl   uppercase  ">Hey, I'm <span className=' text-[#eb7535]'>Blair.</span> </h1>
                        <h2 className=' text-2xl md:text-4xl  uppercase   font-normal '>I am software <span className=' text-rose-500'>developer</span></h2>
                        <div className="flex items-center justify-center sm:items-start sm:justify-start space-x-4 md:space-x-4 pt-2 md:pt-6 text-center sm:text-left text-sm md:text-md uppercase">
                            <a href="https://www.linkedin.com/in/blair-chappell-23818420a/"><img className='hover:-translate-y-2 duration-500 ease-linear  w-6 h-6 sm:w-8 sm:h-8' src="/linkedin.png" alt="linkedin" /></a>
                            <a href="https://github.com/blairhb7"><img className='hover:-translate-y-2 ease-linear  duration-500 w-6 h-6 sm:w-8 sm:h-8' src="/github.png" alt="github" /></a>
                            <button className="hover:-translate-y-2 ease-linear  uppercase border px-3 md:px-10 sm:mt-0 py-2 rounded-md border-[#262626] hover:border-rose-500 duration-500">Resume</button>
                        </div>
                    </div>
                </Slide>
            </section>

            <section className=" mx-6 md:px-0 grid ">
                <Fade duration={7000}>
                    <div className=" w-full flex flex-col">
                        
                    <h1 className=' text-2xl md:text-5xl uppercase'>About</h1>
                        <p className="py-4  md:w-[80%] md:text-sm font-base">Back in 2013, I decided to try my hand at learning how to code and create websites, and tumbled head first into the rabbit hole of coding and web development. 
                        After many books, online coding program's, and lots of trial & error, I started to get a good feel for web development. 
                        But I knew the journey was just beginning!
                        </p>
                        <p className="  md:text-sm md:w-[80%]  py-2 font-base">
                        Fast-forward to today, I've been diving into more complex technologies like <span className=' font-extrabold text-white'>Email Devlopment,</span> <span className=' font-bold text-white'>React,</span> <span className='font-extrabold text-white'>Next-js,</span> <span className='text-white font-bold'>Tailwind,</span>  and <span className=' font-bold text-white'>Typescript.</span> As this field continues to change, I am always still learning. 
                        Which I enjoy because I like to continually get better at whatever I set my heart and mind too! 
                        When I’m not at the computer, I’m usually watching the Golden State Warriors, exploring the wild backpacking, or deep into video editing for FilmDUO.
                        </p>
                    </div>
                </Fade>
            </section>

           
        </div>

        <section className="grid grid-cols-1 col-span-2 pt-12 md:pt-20">
            <Fade duration={7000}>
            <Selected/>
            <div className=" hidden ">
                <ul className=" items-center text-center md:text-left sm:flex hidden  text-xs md:text-base md:px-20  px-8 justify-center md:justify-start md:font-light text-white md:text-[#ebebeb] space-x-2 ">
                    <li className="    text-xs md:text-base border rounded-md  border-[#262626] px-2 md:px-4 hover:text-[#eb7535]  duration-300 cursor-pointer">All</li>
                    <li className="text-xs md:text-base hover:text-[#eb7535] rounded-md hover:border border-[#262626] px-2 md:px-4 duration-300 cursor-pointer">Email Example</li>
                    <li className="text-xs md:text-base hover:text-[#eb7535] rounded-md hover:border border-[#262626] px-2 md:px-4  duration-300 cursor-pointer">React Projects</li>
                    <li className="text-xs md:text-base hover:text-[#eb7535] rounded-md hover:border border-[#262626] px-2 md:px-4  duration-300 cursor-pointer">Frontend Mentor Projects</li>
                    
                </ul>
                <div className="[--duration:60s]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 h-full max-h-full p-8 md:px-20 gap-2">
                    {
                        projects.map((examples:{id:number, stack:string, image:string, type:string, name:string, Link:string, category:string})=> {
                            const {name, Link, id, image, type, stack, category} = examples
                            return (
                                
                                <div key={id} className=" flex flex-col  hover:-translate-y-2 ease-linear duration-500 border rounded-md overflow-hidden  border-[#262626]  ">
                                    <a className=' h-[75%] md:h-[80%] overflow-hidden' href={Link}>
                                         <Image width={500} height={500} className=' w-full cursor-pointer  md:h-[99%] flex  overflow-hidden ' src={image} alt=" projects" /></a>
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
            </Fade>
        </section>
       
    </main>
    </>
  )
}

export default LandingPage


