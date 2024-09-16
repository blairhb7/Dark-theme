/* eslint-disable react/no-unescaped-entities */
"use client"

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
        <div className=" w-full flex flex-col md:flex-row md:mt-20 mt-8 pb-6  2xl:mx-auto">
            <section className=" grid px-8 pt-8 md:pt-0 md:px-16 w-full md:h-auto h-60 ">
                    <div className=" w-full flex text-center sm:text-left flex-col ">
                        <Slide duration={1000}>
                            <h1 className=" text-4xl sm:text-6xl md:text-5xl   uppercase  ">Hey, I'm <span className=' text-[#eb7535]'>Blair.</span> </h1>
                        </Slide>
                        <Slide duration={2000}>
                            <h2 className=' text-2xl sm:text-3xl md:text-4xl  uppercase   font-normal '>I am software<Fade duration={4500}> <span className=' text-rose-500'>developer</span></Fade></h2>
                        </Slide>
                        <Slide duration={3000}>
                            <div className="flex items-center justify-center sm:items-start sm:justify-start space-x-4 md:space-x-4 pt-2 md:pt-6 text-center sm:text-left text-sm md:text-md uppercase">
                                <a href="https://www.linkedin.com/in/blair-chappell-23818420a/" target="_blank"><img className='hover:-translate-y-2 duration-500 ease-linear  w-6 h-6 sm:w-8 sm:h-8' src="/linkedin.png" alt="linkedin" /></a>
                                <a href="https://github.com/blairhb7" target="_blank"><img className='hover:-translate-y-2 ease-linear  duration-500 w-6 h-6 sm:w-8 sm:h-8' src="/github.png" alt="github" /></a>
                                <a href="https://www.blairchappell.site/Resume%20Updated.pdf" target="_blank"><button className="hover:-translate-y-2 ease-linear  uppercase border px-3 md:px-10 sm:mt-0 py-2 rounded-md border-[#262626] hover:border-rose-500 duration-500">Resume</button></a>
                            </div>
                        </Slide>
                    </div>
    
            </section>

            <section className=" mx-6 md:px-0 grid ">
                <Fade duration={7000}>
                    <div id='About' className=" w-full flex flex-col">
                        
                    <h1 className=' text-2xl md:text-5xl uppercase'>About</h1>
                        <p className="py-4  md:w-[80%] md:text-sm font-base md:font-light">Back in 2013, I decided to try my hand at learning how to code and create websites, and tumbled head first into the rabbit hole of coding and web development. 
                        After many books, online coding program's, and lots of trial & error, I started to get a good feel for web development. 
                        But I knew the journey was just beginning!
                        </p>
                        <p className="  md:text-sm md:w-[80%]  py-2 font-base md:font-light">
                        Fast-forward to today, I've been diving into more complex technologies like <span className=' font-extrabold text-white'>Email Devlopment,</span> <span className=' font-bold text-white'>React,</span> <span className='font-extrabold text-white'>Next-js,</span> <span className='text-white font-bold'>Tailwind,</span>  and <span className=' font-bold text-white'>Typescript.</span> As this field continues to change, I am always still learning. 
                        Which I enjoy because I like to continually get better at whatever I set my heart and mind too! 
                        When I’m not at the computer, I’m usually watching the Golden State Warriors, exploring the wild backpacking, or deep into video editing for FilmDUO.
                        </p>
                    </div>
                </Fade>
            </section>

           
        </div>

        <section id='projects' className="grid grid-cols-1 col-span-2 pt-12 md:pt-20">
            <Fade duration={7000}>
                <Selected/>
            </Fade>
        </section>
       
    </main>
    </>
  )
}

export default LandingPage


