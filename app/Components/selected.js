"use client"
import React, { useEffect, useState } from "react";

import projectExamples from '@/app/Data/data'



export default function MultiFilters() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(projectExamples);

  let filters = [ "Email", "React", "Frontend Mentor"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory );
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([ selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = projectExamples.filter((item) => item.category === selectedCategory);
        

        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...projectExamples]);
    }
  };



  return (
    <div>
      <div className=" items-center text-center md:text-left sm:flex   text-xs md:text-base md:px-20  px-8 justify-center md:justify-start md:font-light text-white md:text-[#ebebeb] space-x-2">
        <button  onClick={() =>  setFilteredItems(projectExamples)} className="text-xs md:text-base hover:text-[#eb7535] rounded-md hover:border border-[#262626] px-2 md:px-4 duration-300 cursor-pointer"> All </button>
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${
              selectedFilters?.includes(category) ? "active" : ""
            } text-xs md:text-base hover:text-[#eb7535] rounded-md hover:border border-[#262626] px-2 md:px-4 duration-300 cursor-pointer`}
            key={`filters-${idx}`}
            setFilteredItems={setFilteredItems}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="[--duration:60s]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 h-full max-h-full p-8 md:px-20 gap-2">
        {filteredItems.map((item, idx) => (
          
             <div key={`items-${idx}`} className=" flex flex-col  hover:-translate-y-2 ease-linear duration-500 border rounded-md overflow-hidden  border-[#262626]  ">
                                    <a className=' h-[75%] md:h-[80%] overflow-hidden' href={item.Link}>
                                         <img width={500} height={500} className=' w-full cursor-pointer  md:h-[99%] flex  overflow-hidden ' src={item.image} alt=" projects" /></a>
                                        <div className="flex justify-between ">
                                            <div className="flex items-center gap-2">
                                                <h1 className=" text-xs md:text-md  md:font-normal pt-2 md:pt-6 md:pb-2 pl-2 flex justify-start items-end">{item.name}</h1>
                                                <h2 className=" flex pt-2 md:pt-6 md:pb-2 text-xs md:font-light">- {item.type}</h2>
                                            </div>
                                            <div className="flex">
                                             <h2 className=" items-center flex pt-2 px-3 md:px-0 md:pt-6 md:pb-2 text-xs md:font-light">{item.stack}</h2>
                                               <a href={item.Link}><img width={500} height={500} className=' hidden md:flex hover:-translate-y-2 ease-linear duration-500 h-4 w-4 -rotate-45 mt-6 mx-4' src='/arrow.png' alt=" website desenation" /></a>
                                            </div>
                                        </div>
                                    
                                </div>
          
        ))}
      </div>

    </div>
  );
}
