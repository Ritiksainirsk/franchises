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



export default function MultiCityFranchises() {
  return (
    <>
      <div className="lg:flex gap-3 m-5">
        <div className="md:w-[50%] p-4 shadow-2xl rounded-2xl border-2 py-7">
          <h2
            className="text-center mb-5 font-bold text-lg font-sans border-2 rounded-2xl"
            style={{ textShadow: "3px 2px #b9fdff" }}
          >
            UPCOMING MULTI-CITY FRANCHISE SHOW
          </h2>
          <Carousel
          showDots={false}

            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            responsive={responsive}
            className="p-5 w-48"
          >
            <EcommerceCard />
            <EcommerceCard />
            <EcommerceCard />
            <EcommerceCard />
          </Carousel>
        </div>

        <div className=" md:w-[50%] p-4 shadow-2xl rounded-2xl border-2 py-7">
          <h2
            className="text-center mb-5 font-bold text-lg font-sans border-2 rounded-2xl"
            style={{ textShadow: "3px 2px #b9fdff" }}
          >
            PAST MULTI-CITY FRANCHISE SHOW
          </h2>
          <Carousel
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            responsive={responsive}
            className="p-5"
          >
            <EcommerceCard />
            <EcommerceCard />
            <EcommerceCard />
            <EcommerceCard />
          </Carousel>
        </div>
      </div>

      {/*  */}
    </>
  );
}

function EcommerceCard2({ data }) {
  return (
    <Card className="md:w-80 border-2 ">
      <CardHeader
        shadow={false}
        floated={false}
        className="h-40 shadow-md border-2 flex justify-center items-center"
      >
        <img src={data.img} alt="card-image" className="h-28 object-contain" />
      </CardHeader>
      <CardBody>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 text-[0.8rem]"
        >
          {data.text}
        </Typography>

        <h2 className="font-bold py-1 text-[1.1rem]">{data.title}</h2>
        <div className="mb-2 flex items-center justify-between">
          <Typography
            color="blue-gray"
            className="font-medium text-[0.9rem] opacity-60"
          >
            Investment
          </Typography>
          <Typography color="blue-gray" className="font-medium text-[0.9rem]">
            INR 11 L - INR 2 CR
          </Typography>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <Typography
            color="blue-gray"
            className="font-medium opacity-60 text-[0.9rem]"
          >
            Space req
          </Typography>
          <Typography color="blue-gray" className="font-medium text-[0.9rem]">
            500 Sq Ft to 2000 Sq Ft
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-black text-white shadow-none text-[0.7rem] hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Explore
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
