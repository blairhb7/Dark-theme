import React from 'react'

const faq = () => {
  return (
    <>
       <section className=" px-20 py-20 w-full bg-black ">
            <div className="justify-center items-center flex flex-col gap-6 " >
                <div tabIndex={0} className="collapse collapse-plus rounded-none bg-black text-white border-[#cececedf] border">
                    <div className="collapse-title text-xl font-medium">What essential technologies do I know as a Frontend Developer?</div>
                        <div className="collapse-content">
                            <p>tabindex={0} attribute is necessary to make the div focusable</p>
                        </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus rounded-none bg-black text-white  border-[#cececedf] border">
                    <div className="collapse-title text-xl font-medium">Focus me to see content</div>
                        <div className="collapse-content">
                            <p>tabindex={0} attribute is necessary to make the div focusable</p>
                        </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus rounded-none bg-black text-white  border-[#cececedf] border">
                    <div className="collapse-title text-xl font-medium">Focus me to see content</div>
                        <div className="collapse-content">
                            <p>tabindex={0} attribute is necessary to make the div focusable</p>
                        </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus rounded-none bg-black text-white  border-[#cececedf] border">
                    <div className="collapse-title text-xl font-medium">Focus me to see content</div>
                        <div className="collapse-content">
                            <p>tabindex={0} attribute is necessary to make the div focusable</p>
                        </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default faq