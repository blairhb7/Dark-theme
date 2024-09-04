// lib/utils.ts
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


/*   <div className=" hidden ">
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
            </div>*/