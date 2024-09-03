import React from 'react'

const faq = () => {
  return (
    <>
       <section className=" p-8 md:px-20 md:py-20 w-full bg-black ">
            <h1 className=" font-bold  text-white py-4 text-xl md:text-4xl">Frequently Asked Questions</h1>
            <div className="justify-center items-center flex flex-col gap-6 " >
                <div tabIndex={0} className="collapse collapse-plus focus:text-orange-600  rounded-none bg-black text-white border-[#cececedf] border">
                    <div className="collapse-title text-xl font-bold">What essential technologies do I know as a Frontend Developer?</div>
                        <div className="collapse-content">
                            <p className=' md:w-[75%] text-sm font-base text-white'>As a frontend developer I am fimilar with HTML, CSS, and JavaScript, with experience in TypeScript for better code management. I work with frameworks like React and Next.js to build fast, dynamic websites. Using Tailwind CSS, I style components efficiently, creating responsive and clean designs.  </p>
                        </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus focus:text-orange-600  rounded-none bg-black text-white  border-[#cececedf] border">
                    <div className="collapse-title text-xl font-bold ">Do I have experience with Email Development or CRM base content?</div>
                        <div className="collapse-content">
                            <p className=' text-white md:w-[75%]'> As a CRM or Email Developer with expertise in creating responsive, cross-client compatible email templates using HTML and inline CSS. Proficient in designing visually appealing emails that work seamlessly across all devices and platforms. Skilled in using email testing tools to ensure flawless rendering in various email clients, and knowledgeable in optimizing emails to improve deliverability and engagement.</p>
                        </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus focus:text-orange-600  rounded-none bg-black text-white  border-[#cececedf] border">
                    <div className="collapse-title text-xl font-bold ">What is my Experience with platforms like Braze?</div>
                        <div className="collapse-content">
                            <p className=' text-white md:w-[80%]'>Familiar with platforms like Braze, I can efficiently integrate dynamic content, personalize campaigns, and optimize email deliverability. My skills in testing and troubleshooting across various email clients ensure that every email renders perfectly, enhancing user engagement.</p>
                        </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus focus:text-orange-600  rounded-none bg-black text-white  border-[#cececedf] border">
                    <div className="collapse-title text-xl font-bold ">Is this Portfolio built using React?</div>
                        <div className="collapse-content">
                            <p className=' text-white'>Yes! This portfolio is built using the framework Next JS, and styled with Tailwind CSS.</p>
                        </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default faq