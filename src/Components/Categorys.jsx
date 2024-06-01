import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaGrinStars } from "react-icons/fa";
import { IoRibbon } from "react-icons/io5";

export default function Categorys() {
  return (
    <div className="hidden md:block mt-20">
      <div
        className="bg-gradient-to-br from-gray-200 to-gray-300 flex justify-around p-6 mx-9 my-6 rounded-2xl"
        style={{ background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(21,17,50,1) 35%, rgba(200,200,200,1) 100%)" }}
      >
        <div className="flex flex-col text-white items-center gap-2 justify-center">
          <FaRegUserCircle className="bg-[#43D7E8] p-2 rounded-full inline text-4xl text-white" />
          <p className="font-extrabold text-[16px]">100 +</p>
          <p className="mt-[-4px]">Active Clients</p>
        </div>
        
        <div className="flex flex-col text-white items-center gap-2 justify-center">
          <FaRegThumbsUp className="bg-[#43D7E8] p-2 rounded-full inline text-4xl text-white" />
          <p className="font-extrabold text-[16px]">150 +</p>
          <p className="mt-[-4px]">Top Projects Done</p>
        </div>

        <div className="flex flex-col text-white items-center gap-2 justify-center ">
          <FaGrinStars className="bg-[#43D7E8] p-2 rounded-full inline text-4xl text-white" />
          <p className="font-extrabold text-[16px]">90%</p>
          <p className="mt-[-4px]">Success Rate</p>
        </div>

        <div className="flex flex-col text-white items-center gap-2 justify-center">
          <IoRibbon className="bg-[#43D7E8] p-2 rounded-full inline text-4xl text-white" />
          <p className="font-extrabold text-[16px]">5 +</p>
          <p className="mt-[-4px]">Awards</p>
        </div>

      </div>
    </div>
  );
}
