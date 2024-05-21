import React from "react";
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

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 1306, min: 1193 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1193, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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

const responsive2 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
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
  return (
    <>
      <div className="mt-28">
        <div className="relative px-9">
          <div>
            <p className="absolute top-[-14px] py-2 bg-black text-white left-8 px-5 rounded-lg font-bold">
              TOP PREMIUM FRANCHISE OPPORTUNITIES
            </p>
            <div className="h-[2px] bg-gray-500 mb-1"></div>
            <div className="h-[2px] bg-gray-500"></div>
          </div>

          <div className="py-20 flex gap-6 flex-wrap justify-center">
            <Carousel
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={1500}
              responsive={responsive2}
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
    <Card className="md:w-80 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <CardHeader
        shadow={false}
        floated={false}
        className="h-40 flex justify-center items-center bg-gray-100"
      >
        <img src={data.img} alt="card-image" className="h-28 object-contain" />
      </CardHeader>
      <CardBody className="p-6">
        <Typography
          variant="small"
          className="font-normal text-gray-500 text-[0.8rem] mb-2"
        >
          {data.text}
        </Typography>
        <h2 className="font-bold py-1 text-[1.3rem] text-black">
          {data.title}
        </h2>
        <div className="mb-2 flex items-center justify-between">
          <Typography className="font-medium text-[0.9rem] text-gray-700">
            Investment
          </Typography>
          <Typography className="font-medium text-[0.9rem] text-black">
            INR 11 L - INR 2 CR
          </Typography>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <Typography className="font-medium text-[0.9rem] text-gray-700">
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
          className="bg-black text-white shadow-none text-[0.7rem] hover:bg-gray-800 transition-transform duration-200 ease-in-out"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

function EcommerceCard() {
  return (
    <Card className="w-64 shadow-md">
      <CardHeader
        shadow={true}
        floated={true}
        className="h-44 overflow-hidden relative"
      >
        <img
          src="https://www.franchiseapply.com/admin/uploads/eventsimg/476107.jpg"
          alt="card-image"
          className="h-full w-full object-contain rounded-xl"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex flex-col items-center justify-center">
          <Typography color="blue-gray" className="font-medium">
            FBO INDIA 2024 - PUNE
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {" "}
            PUNE
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 text-center"
        >
          21-05-2024 - 9 AM - 5 PM
        </Typography>
      </CardBody>
    </Card>
  );
}
