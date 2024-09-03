import React from 'react'

const contact = () => {
  return (
    <>
     <div className=" flex flex-col w-full text-center  text-white bg-black p-20">
        <h1 className=" text-2xl  font-light uppercase py-2">Contact</h1>
        <div className="flex text-center w-full items-center gap-1 justify-center">
            <a href="https://www.linkedin.com/in/blair-chappell-23818420a/"><img className=' w-8 h-8' src="/linkedin.png" alt="linkedin" /></a>
            <a href="https://www.linkedin.com/in/blair-chappell-23818420a/"><img className=' w-8 h-8' src="/github.png" alt="github" /></a>
            <a href="https://www.linkedin.com/in/blair-chappell-23818420a/"></a>
        </div>
        <a href="mailto:Blairhb7io@gmail.com"><h3 className=" font-bold text-xl uppercase py-2">BLairhb7io@gmail.com</h3></a>
     </div>
    </>
  )
}

export default contact