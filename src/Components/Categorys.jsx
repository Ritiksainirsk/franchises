import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaRegUserCircle } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaGrinStars } from "react-icons/fa";
import { IoRibbon } from "react-icons/io5";


import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Categorys() {

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);


  return (
    <div className="hidden md:block mt-20"  data-aos="flip-down">
      <div
        className="bg-gradient-to-br from-gray-200 to-gray-300 flex justify-around p-6 my-6"
        style={{ background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(21,17,50,1) 35%, rgba(200,200,200,1) 100%)" }}
      >
        <div className="flex flex-col text-white items-center gap-2 justify-center" ref={ref}>
          <FaRegUserCircle className="bg-[#43D7E8] p-2 rounded-full inline text-4xl text-white" />
          <p className="font-extrabold text-[23px] mt-3"> {inView ? <CountUp start={0} end={100} duration={7} /> : '0'} +</p>
          <p className="mt-[6px] text-[1.1rem] font-bold">Active Clients</p>
        </div>
        
        <div className="flex flex-col text-white items-center gap-2 justify-center" ref={ref}>
          <FaRegThumbsUp className="bg-[#43D7E8] p-2 rounded-full inline text-4xl text-white" />
          <p className="font-extrabold text-[23px] mt-3"> {inView ? <CountUp start={0} end={150} duration={5} /> : '0'} +</p>
          <p className="mt-[6px] text-[1.1rem] font-bold">Top Projects Done</p>
        </div>

        <div className="flex flex-col text-white items-center gap-2 justify-center " ref={ref}>
          <FaGrinStars className="bg-[#43D7E8] p-2 rounded-full inline text-4xl text-white" />
          <p className="font-extrabold text-[23px] mt-3"> {inView ? <CountUp start={0} end={90} duration={8} /> : '0'}%</p>
          <p className="mt-[6px] text-[1.1rem] font-bold">Success Rate</p>
        </div>

        <div className="flex flex-col text-white items-center gap-2 justify-center" ref={ref}>
          <IoRibbon className="bg-[#43D7E8] p-2 rounded-full inline text-4xl text-white" />
          <p className="font-extrabold text-[23px] mt-3"> {inView ? <CountUp start={0} end={15} duration={8} /> : '0'} +</p>
          <p className="mt-[6px] text-[1.1rem] font-bold">Awards</p>
        </div>

      </div>
    </div>
  );
}
