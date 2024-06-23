import React, { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const cardData = [
  {
    img: "https://www.franchiseapply.com/admin/uploads/brand_registration/1675920968_1.jpg",
    title: "Kayastra",
    text: "Automobiles",
  },
  {
    img: "https://www.franchiseapply.com/admin/uploads/brand_registration/1490248484_1.png",
    title: "Jetking",
    text: "Education",
  },
  {
    img: "https://www.franchiseapply.com/admin/uploads/brand_registration/1690620187_1.jpg",
    title: "TYB10X",
    text: "Education",
  },
  {
    img: "https://www.franchiseapply.com/admin/uploads/brand_registration/1714561600_2.jpg",
    title: "ABORA DECOR",
    text: "Retail",
  },
  {
    img: "https://www.franchiseapply.com/admin/uploads/brand_registration/1713260357_2.jpg",
    title: "ZEROPAYY",
    text: "Retail",
  },
  {
    img: "https://www.franchiseapply.com/admin/uploads/brand_registration/1713501514_2.",
    title: "City Samosa",
    text: "Retail",
  },
  {
    img: "https://www.franchiseapply.com/admin/uploads/brand_registration/1710998957_2.jpg",
    title: "Welcome 36 Cafe",
    text: "Food and Beverage",
  },
  {
    img: "https://www.franchiseapply.com/admin/uploads/brand_registration/1710389226_2.jpeg",
    title: "G Pizzeria",
    text: "Food and Beverage",
  },
  {
    img: "https://www.franchiseapply.com/admin/uploads/brand_registration/1710482558_2.jpeg",
    title: "Famish Dessert Cafe",
    text: "Food and Beverage",
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1306 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1306, min: 1193 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1193, min: 464 },
    items: 1.5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function PremiumFranchise() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="">
        <div className="relative px-9">
          <div data-aos="flip-up">
            <p className="absolute top-[-14px] py-2 bg-black text-white px-5 rounded-lg font-bold">
              TOP PREMIUM FRANCHISE OPPORTUNITIES
            </p>
            <div className="h-[2px] bg-white mb-1"></div>
            <div className="h-[2px] bg-white"></div>
          </div>

          <div className="py-20" 
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <Carousel
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={1500}
              responsive={responsive}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              className="md:p-5"
            >
              {cardData.map((item, index) => {
                return (
                  <>
                    <EcommerceCard2 data={item} />
                  </>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

function EcommerceCard2({ data }) {
  return (
    <Card className="md:w-80 bg-gradient-to-br from-gray-100 to-gray-300 shadow-lg rounded-lg overflow-hidden border-gray-200 border-2 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <CardHeader
        shadow={false}
        floated={false}
        className="h-40 flex justify-center items-center bg-gray-200"
      >
        <img src={data.img} alt="card-image" className="h-28 object-contain" />
      </CardHeader>
      <CardBody className="p-6">
        <Typography
          variant="small"
          className="font-normal text-gray-700 text-[0.8rem] mb-2"
        >
          {data.text}
        </Typography>
        <h2 className="font-bold py-1 text-[1.3rem] text-black">
          {data.title}
        </h2>
        <div className="mb-2 flex items-center justify-between">
          <Typography className="font-medium text-[0.9rem] text-gray-800">
            Investment
          </Typography>
          <Typography className="font-medium text-[0.9rem] text-black">
            INR 11 L - INR 2 CR
          </Typography>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <Typography className="font-medium text-[0.9rem] text-gray-800">
            Space req
          </Typography>
          <Typography className="font-medium text-[0.9rem] text-black">
            500 Sq Ft to 2000 Sq Ft
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-black text-white shadow-none text-[0.7rem] hover:bg-gray-800 hover:scale-105 transition-transform duration-200 ease-in-out"
        >
          Explore
        </Button>
      </CardFooter>
    </Card>
  );
}
