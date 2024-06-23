import React, { useState,useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AutoMobile = [
  { title: "AUTOMOBILE" },
  {
    videocontent: [
      {
        video: "https://www.youtube.com/embed/wyq1QXPfTOk",
        VideoTitle: "ASIAS BEST MULTIB...",
      },
      {
        video: "https://www.youtube.com/embed/JCXuG61F018",
        VideoTitle: "MULTIBRAND TWO WH...",
      },
      {
        video: "https://www.youtube.com/embed/aTsS0hJe4zE",
        VideoTitle: "FASTEST GROWING T...",
      },
      {
        video: "https://www.youtube.com/embed/hawqdjOTfTk",
        VideoTitle: "MULTIBRAND CAR & ...",
      },
      {
        video: "https://www.youtube.com/embed/zWJsO3p6DKs",
        VideoTitle: "INDIAS LEADING MU...",
      },
      {
        video: "https://www.youtube.com/embed/GglEpsQlwjY",
        VideoTitle: "INDIAS GROWING MU...",
      },
    ],
  },
];

const BeuatyAndSalon = [
  { title: "BEAUTY AND SALON" },
  {
    videocontent: [
      {
        video: "https://www.youtube.com/embed/wmHt7cUDgX8",
        VideoTitle: "Handmade Skincare...",
      },
      {
        video: "https://www.youtube.com/embed/41COx4Afgk0?si=D1eY7kJu2Ehs6Zdo",
        VideoTitle: "Best Salon Franch...",
      },
    ],
  },
];

const BusinessServices = [
  { title: "BUSINESS SERVICES" },
  {
    videocontent: [
      {
        video: "https://www.youtube.com/embed/zSNM_qsQ7RY",
        VideoTitle: "MOST AFFORDABLE L...",
      },
      {
        video: "https://www.youtube.com/embed/lEHmr6Ss8Fw?si=0Oe3c-GdKzKt91HP",
        VideoTitle: "ALACARE | HEALTHC...",
      },
      {
        video: "https://www.youtube.com/embed/-11hJCXIXks?si=Zql3OsfX7EI9IxrP",
        VideoTitle: "Ala Care | Health...",
      },
    ],
  },
];

const DealersAndDistributors = [
  { title: "DEALERS AND DISTRIBUTORS" },
  {
    videocontent: [
      {
        video: "https://www.youtube.com/embed/Xn5oD3h7KOg",
        VideoTitle: "BECOME PROUD DEAL...",
      },
      {
        video: "https://www.youtube.com/embed/PqrEblCcOGk",
        VideoTitle: "FASTEST GROWING E...",
      },
      {
        video: "https://www.youtube.com/embed/VuP-sgEObSY",
        VideoTitle: "OPEN A TESLA POWE...",
      },
    ],
  },
];

const Education = [
  { title: "EDUCATION" },
  {
    videocontent: [
      {
        video: "https://www.youtube.com/embed/lGPikv1KebQ",
        VideoTitle: "START INDIAS NO.1...",
      },
      {
        video: "https://www.youtube.com/embed/zOMVEIdBvuI?si=USMvHPw4gdCg5ODB",
        VideoTitle: "Discover First St...",
      },
    ],
  },
];

const HealthAndWellness = [
  { title: "HEALTH AND WELLNESS" },
  {
    videocontent: [
      {
        video: "https://www.youtube.com/embed/QsWd5QMcXoA",
        VideoTitle: "Start Your Own Me...",
      },
      {
        video: "https://www.youtube.com/embed/rPtb7-J5tDI?si=Yyhbqd78WynSF1B7",
        VideoTitle: "ALA CARE | Franch...",
      },
    ],
  },
];

const FoodAndBeverage = [
  { title: "FOOD AND BEVERAGE" },
  {
    videocontent: [
      {
        video: "https://www.youtube.com/embed/y7pROFetk_U",
        VideoTitle: "Start Your Own Me...",
      },
      {
        video: "https://www.youtube.com/embed/kaFgbk8zAlY",
        VideoTitle: "Start Your Own Me...",
      },
      {
        video: "https://www.youtube.com/embed/Y1voFK4ZnhQ?si=3_J1mIyuGXwxSKJL",
        VideoTitle: "Start Your Own Me...",
      },
    ],
  },
];

const Retail = [
  { title: "RETAIL" },
  {
    videocontent: [
      {
        video: "https://www.youtube.com/embed/kC5e_YH8YMA",
        VideoTitle: "Start Your Own Me...",
      },
      {
        video: "https://www.youtube.com/embed/dQFhnDXm_74?si=YsTYqZyNDXANUfxR",
        VideoTitle: "Start Your Own Me...",
      },
    ],
  },
];

export default function Videos() {
  return (
    <>
      <div className="text-center my-8">
        <h1 className="font-bold text-[29px] text-white">VIDEOS</h1>
      </div>

      <div>
        <VideoCards data={AutoMobile} />
        <VideoCards data={BeuatyAndSalon} />
        <VideoCards data={BusinessServices} />
        <VideoCards data={DealersAndDistributors} />
        <VideoCards data={Education} />
        <VideoCards data={HealthAndWellness} />
        <VideoCards data={FoodAndBeverage} />
        <VideoCards data={Retail} />
      </div>
    </>
  );
}

const VideoCards = ({ data }) => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);

  return (
    <div>
      <div className=" mx-4 md:mx-12" data-aos="zoom-in">
        <div className="relative py-6"  data-aos="flip-down">
          <p className="py-2 px-6 rounded-xl bg-black text-white font-bold absolute top-2">
            {data[0].title}
          </p>
          <div className="h-[2px] bg-white mb-[2px]"></div>
          <div className="h-[2px] bg-white"></div>
        </div>

        <div className="flex flex-wrap gap-1 my-5 mb-20">
          {data[1].videocontent.map((item) => {
            return (
              <>
                <VideoCard data={item} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// --------------

const VideoCard = ({ data }) => {
  return (
    <div className="border-2 relative max-w-md w-96 mx-auto bg-white shadow-lg rounded-xl overflow-hidden p-3 cursor-pointer">
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
      <div className="">
        <h2 className="font-semibold">{data.VideoTitle}</h2>
      </div>
    </div>
  );
};
