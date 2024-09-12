import React from 'react'

const footer = () => {
  return (
    <>
     <section className=" h-full sm:flex w-full bg-black">
     <div className=" flex flex-col w-full   text-white bg-black py-3 px-8 sm:p-20 sm:py-10">
        <h1 className=" text-xl  font-light uppercase py-2">Contact</h1>
        <div className="flex w-full gap-2 ">
            <a href="https://www.linkedin.com/in/blair-chappell-23818420a/"><img className=' w-8 h-8' src="/linkedin.png" alt="linkedin" /></a>
            <a href="https://github.com/blairhb7"><img className=' w-8 h-8' src="/github.png" alt="github" /></a>
        </div>
        <a href="mailto:Blairhb7io@gmail.com"><h3 className=" text-xl uppercase py-2">BLairhb7io@gmail.com</h3></a>
     </div>
            <footer className="footer bg-black text-white flex sm:grid sm:grid-cols-3 px-8 sm:px-20 py-10 ">
                <nav>
                    <h6 className="footer-title">Featured Work</h6>
                    <a href="#projects" className="link link-hover">Projects</a>
                    <a className="link link-hover">Email</a>
                    <a className="link link-hover">React</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Personal</h6>
                    <a href="#About" className="link link-hover">About</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                    <a href="https://www.linkedin.com/in/blair-chappell-23818420a/"><img className='hover:-translate-y-2 duration-500 ease-linear  w-6 h-6 sm:w-8 sm:h-8' src="/linkedin.png" alt="linkedin" /></a>
                    <a href="https://github.com/blairhb7"><img className='hover:-translate-y-2 ease-linear  duration-500 w-6 h-6 sm:w-8 sm:h-8' src="/github.png" alt="github" /></a>
                    </div>
                </nav>
            </footer>
        </section>
    </>
  )
}

export default footer