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
    breakpoint: { max: 3000, min: 1193 },
    items: 2.2,
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
      <div className="lg:flex lg:gap-3 m-5">
        <div className="md:w-[50%] p-4 lg:shadow-2xl rounded-2xl border-2 py-7">
          <h2
            className="text-center mb-5 font-bold md:text-lg font-sans border-2 rounded-2xl"
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
            removeArrowOnDeviceType={["tablet", "mobile"]}
            className="p-5"
          >
            <EcommerceCard />
            <EcommerceCard />
            <EcommerceCard />
            <EcommerceCard />
          </Carousel>
        </div>

        <div className=" md:w-[50%] p-4 lg:shadow-2xl rounded-2xl border-2 py-7">
          <h2
            className="text-center mb-5 font-bold md:text-lg  font-sans border-2 rounded-2xl"
            style={{ textShadow: "3px 2px #b9fdff" }}
          >
            PAST MULTI-CITY FRANCHISE SHOW
          </h2>
          <Carousel
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            className=""
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


function EcommerceCard() {
  return (
    <Card className="w-64 shadow-md m-6">
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
