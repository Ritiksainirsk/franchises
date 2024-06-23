import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";

const contents = [
  {
    img: "https://www.franchiseapply.com/admin/uploads/blog/717009.jpg",
    title: "BEST PRE SCHOOL FRANCHISE IN INDIA - PEAS IN POD",
    desc: "The concept of the Peas in Pod centers on creating an exceptional learning environment that prioritizes the holistic",
  },
  {
    img: "https://www.franchiseapply.com/admin/uploads/blog/472790.jpeg",
    title: "INDIA'S FASTEST GROWING FAST FASHION LIFESTYLE ...",
    desc: "Candy Floss is where sweetness meets style. We offer a delightful mix of 12+ trendy categories and 40+ subcategories,",
  },
  {
    img: "https://www.franchiseapply.com/admin/uploads/blog/89780.jpeg",
    title: "India's Well Known Clothing Retail Brand",
    desc: "Overview of Company Business? Established in 2016, KOTTAIL has evolved into a distinguished menswear fashion",
  },
];


function ContentCard({ img, title, desc }) {
  return (
    <Card
      className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
      color="transparent"
    >
      <img
        src={img}
        alt="bg"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/70" />
      <CardBody className="relative flex flex-col justify-end">
        <Typography variant="h4" color="white">
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          color="white"
          className="my-2 font-normal"
        >
          {desc}.... <span className="cursor-pointer text-red-200 ml-2 text-[0.9rem] hover:text-red-400">Read More</span>
        </Typography>
      </CardBody>
    </Card>
  );
}

export default function Blog() {
  return (
    <div className="">
      <section className="container mx-auto md:p-2 p-5 lg:py-6">
        <Typography
          variant="h2"
          color="blue-gray"
          className="!text-2xl !leading-snug lg:!text-3xl"
        >
          Most Popular Blogs 
        </Typography>
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {contents.map(({ img, title, desc }) => (
            <ContentCard key={title} img={img} title={title} desc={desc} />
          ))}
        </div>
      </section>
    </div>
  );
}
