import React from "react";
import { Card } from "@material-tailwind/react";
import { Slider, RangeSlider } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export default function ExistingBusiness() {
  const cardData = [
    {
      image:
        "https://www.franchiseapply.com/admin/uploads/buy_existing_business/788413.jpg",
      title: "EV Bikes Showroom On Sales",
      description:"Asking Price	Property Rs.30 L (Inventory Charges Extra) 5000 Sq Feet Rs. 1",
    },
    {
      image:"https://www.franchiseapply.com/admin/uploads/buy_existing_business/312704.jpg",
      title: "Bharat Bits N Bites",
      description:"Asking Price	Property 11 + 1L (Refundable Amount) 200 Sq Feet Rs. 40,000",
    },
    {
      image:"https://www.franchiseapply.com/admin/uploads/buy_existing_business/959182.jpg",
      title: "YO CHINA",
      description:"Asking Price	Property Size	Rental 90 Lacs (Negotiable)	2500 1.96 Lacs Monthly",
    },
    {
      image:"https://www.franchiseapply.com/admin/uploads/buy_existing_business/403719.jpg",
      title: "WONDERFUL PIZZA POINT",
      description:"Asking Price	Property Size	Rental 50 Lacs 1750 Sq Feet	50,000",
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 items-center justify-center">
      <div className="ml-5 mb-8 md:mt-[-280px]">
        <Card className="mt-6 w-96  pb-9 border-2">
          <form action="" className="p-5">
            <div className="mb-5">
              <label htmlFor="" className="font-semibold pl-2">
                Select State
              </label>
              <div className="">
                <select className="w-full border-2 p-1 rounded-md">
                  <option value="">Select State</option>
                  <option value="">Rajsthan</option>
                  <option value="">Utter Pradesh</option>
                  <option value="">Delhi</option>
                  <option value="">Mumbai</option>
                </select>
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="" className="font-semibold pl-2">
                Select City
              </label>
              <div className="">
                <select className="w-full border-2 p-1 rounded-md">
                  <option value="">Select City</option>
                  <option value="">Jaipur</option>
                  <option value="">Bikaner</option>
                  <option value="">Jodhpur</option>
                  <option value="">Jaisalmer</option>
                  <option value="">Sikar</option>
                </select>
              </div>
            </div>

            <div className="mt-11">
              <hr />
              <h3 className="font-bold text-[1rem]">Investment Range</h3>
              <RangeSlider defaultValue={[30, 60]} />
              <div className="flex justify-between items-center font-bold">
                <p className="mt-2">10000</p>
                <p>6 cr</p>
              </div>
            </div>
          </form>
        </Card>
      </div>

      <div className="col-span-2 flex flex-wrap gap-5 my-8">
        {cardData.map((item)=>{
          return(
            <>
            <AnimatedCard  data={item}/>
            </>
          )
        })}
      </div>
    </div>
  );
}

const AnimatedCard = ({data}) => {
  return (
    <div className="cursor-pointer w-[300px] h-[320px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <img className="h-[48%] w-full" src={data.image} alt={data.title} />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{data.title}</h2>
        <p className="mt-2 text-gray-600">{data.description}</p>
        <button className="mt-4 px-4 py-2 bg-black text-white text-sm rounded font-bold hover:bg-[#000000bd] focus:outline-none focus:bg-blue-400 transition duration-300">
          Get Free Info
        </button>
      </div>
    </div>
  );
};
