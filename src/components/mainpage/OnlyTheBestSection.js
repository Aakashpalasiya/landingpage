import React from "react";

const OnlyTheBestSection = () => {
  return (
    <>

      <div className="flex w-full justify-between flex-col items-center gap-5 bg-gray-100 h-[600px]">
          <div className="mx-auto h-full w-[50%] mt-52 flex gap-5  items-center flex-col">
          <h1 className="text-base text-left font-normal text-gray-400 ">ONLY THE BEST</h1>
          <div className="border border-b-2 border-yellow-500 w-10 mt-4 h-1 bg-yellow-500 "/>
          <p className="text-5xl font-medium ">Fresh Ingredients, Tasty Meals</p>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
            <button className="bg-red-600 text-center rounded-md py-2 px-4 text-white">
            VIEW ITEMS
          </button>
          </div>
      </div>

   
    </>
  );
};

export default OnlyTheBestSection;
