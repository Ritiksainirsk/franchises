import React from "react";
import Popular from "./Popular/Popular";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaUser } from "react-icons/fa";

export default function BlogsAndNews() {
  return (
    <>
      <div className=" m-8">
        <div className="relative px">
          <div>
            <p className="absolute top-[-14px] bg-black text-white left-0 px-5 py-2 rounded-lg font-bold">
            BLOGS AND NEWSVIEW ALL
            </p>
            <div className="h-[2px] bg-gray-500 mb-1"></div>
            <div className="h-[2px] bg-gray-500"></div>
            <p className="cursor-pointer hover:right-[-4px] transition-all duration-300 absolute top-[-9px] bg-black text-white right-0 px-5 py-1 rounded-lg text-[12px] font-bold hidden md:block">
               VIEW ALL
            </p>
          </div>
        </div>
        {/*  */}
        <div className="lg:grid lg:grid-cols-3 gap-7 my-14">
          <Popular />
          <div className="col-span-2 bg-white rounded-2xl shadow-xl border-2 lg:p-8 lg:h-[890px]">
            <Card className="w-full max-w-[100%] flex-col h-[100%] shadow-none">
              <div className="">
                <img
                  className="rounded-tl-xl rounded-tr-xl"
                  src="https://www.franchiseapply.com/admin/uploads/blog/472790.jpeg"
                  alt=""
                />
              </div>
              <CardBody>
                <Typography
                  variant="h6"
                  color="gray"
                  className="mb-4 uppercase flex gap-6 items-center"
                >
                  <FaUser/>
                  <p>Admin</p>
                  <p>29-Apr-2024</p>
                </Typography>
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="mb-2 text-[1.1rem]"
                >
                  INDIA'S FASTEST GROWING FAST FASHION LIFESTYLE BRAND - Candy
                  Floss
                </Typography>
                <Typography
                  color="gray"
                  className="mb-8 font-normal text-[0.9rem]"
                >
                  Candy Floss is where sweetness meets style. We offer a
                  delightful mix of 12+ trendy categories and 40+ subcategories,
                  including toys, soft toys, household goods, kitchenware,
                  digital goods, glassware, personal care products, perfumes,
                  home fragrances, and more! - all at prices that inspire
                  smiles. As India's only variety retail chain, we're proudly
                  moving towards 100% Made in India products. Discover pieces
                  that spark joy and let yo...
                </Typography>
                <a href="#" className="inline-block">
                  <Button variant="text" className="flex items-center gap-2">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </a>
              </CardBody>
            </Card>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
}
