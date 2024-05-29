import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.5,
  },
  tablet: {
    breakpoint: { max: 1227, min: 846 },
    items: 2.3,
  },
  mobile2: {
    breakpoint: { max: 846, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ClientData = [
  {
    video: "https://www.youtube.com/embed/XzaToCTVnps",
    title: "Mr Dhawal C Seth",
    dis: "Director- Bikedost",
  },
  {
    video: "https://www.youtube.com/embed/ZyQ7c-LdCIg",
    title: "Mr Deepen Barai",
    dis: "Director- Speedforce",
  },
  {
    video: "https://www.youtube.com/embed/MzInmpnbIFg",
    title: "Chhaya Thakker",
    dis: "Head Business Development - Latt Liv",
  },
  {
    video: "https://www.youtube.com/embed/vZ_anZOqN_w",
    title: "Mr. Srikant Iyengar",
    dis: "Founder Partner - Go Waterless",
  },
  {
    video: "https://www.youtube.com/embed/ITAmtKBeJ_g",
    title: "Jayesh Kothari",
    dis: "Founder & Director - Flaunt Basket",
  },
  {
    video: "https://www.youtube.com/embed/P0ESQMxFKuE",
    title: "Brijesh Patel ",
    dis: "Director- Bikedost",
  },
];

export default function ClientTestimonials() {
  return (
    <>
      <div className="bg-[#cee9ea] py-5 pb-16 mb-8">
        {/*  */}
        <div className="text-center my-5">
          <h2 className="font-bold text-[1.5rem] ">CLIENT TESTIMONIALS</h2>
        </div>
        {/*  */}
        {/*  */}
        <div>
          <Carousel
            className=" "
            responsive={responsive}
            autoPlay={true}
            infinite
            swipeable={true}
            draggable={true}
            autoPlaySpeed={3000}
          >
            {ClientData.map((item, index) => {
              return (
                <>
                  <VideoCard key={index} data={item} />
                </>
              );
            })}
          </Carousel>
        </div>
        {/*  */}
      </div>
    </>
  );
}




const VideoCard = ({ data }) => {
  return (
    <div className="relative max-w-md w-[22rem] mx-auto bg-white shadow-lg rounded-xl overflow-hidden p-5 pt-8 cursor-pointer">
      {/* Ribbon */}
      <div className="absolute top-[-15px] left-[-120px]">
        <div
          className="relative bg-red-500 text-white flex text-xs font-bold uppercase px-2 py-1 w-96 -rotate-45 text-center pl-[100px]"
          style={{ boxShadow: " 0 0 10px #888" }}
        >
          <TiStarFullOutline className="text-white text-[16px]" />
          <TiStarFullOutline className="text-white text-[16px]" />
          <TiStarFullOutline className="text-white text-[16px]" />
          <TiStarFullOutline className="text-white text-[16px]" />
          <TiStarFullOutline className="text-white text-[16px]" />
        </div>
      </div>
      {/* Video */}
      <div className="aspect-w-16 aspect-h-9 h-52">
        <iframe
          className="w-full h-full"
          src={data.video}
          title="Video Title"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold">{data.title}</h2>
        <p className="text-gray-600 mt-2">{data.dis}</p>
      </div>
    </div>
  );
};
