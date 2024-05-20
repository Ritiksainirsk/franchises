import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.8,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function FranchiseMagazine() {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
      setIsExpanded(!isExpanded);
    };

    const [showtext,setShowText] = useState(false) 

  return (
    <div>
      {/*  */}
      <div className="text-center mt-20">
        <h1 className="font-bold text-2xl">Franchise Magazine</h1>
      </div>
      {/*  */}
      <div>
        <Carousel
          className="py-10 px-10"
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          itemClass="carousel-item-padding-40-px"
        >
          <Card
            url={
              "https://www.franchiseapply.com/admin/uploads/slider/fmagazine/106907.jpg"
            }
          />
          <Card
            url={
              "https://www.franchiseapply.com/admin/uploads/slider/fmagazine/393731.jpg"
            }
          />
          <Card
            url={
              "https://www.franchiseapply.com/admin/uploads/slider/fmagazine/360953.jpg"
            }
          />
          <Card
            url={
              "https://www.franchiseapply.com/admin/uploads/slider/fmagazine/949341.jpg"
            }
          />
          <Card
            url={
              "https://www.franchiseapply.com/admin/uploads/slider/fmagazine/323468.jpg"
            }
          />
          <Card
            url={
              "https://www.franchiseapply.com/admin/uploads/slider/fmagazine/793927.jpg"
            }
          />
          <Card
            url={
              "https://www.franchiseapply.com/admin/uploads/slider/fmagazine/330939.jpg"
            }
          />
          <Card
            url={
              "https://www.franchiseapply.com/admin/uploads/slider/fmagazine/255550.jpg"
            }
          />
          <Card
            url={
              "https://www.franchiseapply.com/admin/uploads/slider/fmagazine/839866.jpg"
            }
          />
          <Card
            url={
              "https://www.franchiseapply.com/admin/uploads/slider/fmagazine/889262.jpg"
            }
          />
        </Carousel>
      </div>
      {/*  */}

      <div className="md:p-10 p-5 md:px-14 tracking-widest text-[10px] md:text-[15px]">
        <h1 className="text-2xl font-bold my-3 text-[1.3rem] md:text-[1.5rem]">Top Business Franchise Opportunities In India: Franchise Apply</h1>
        <p className="text-gray-600 ">
          Franchise Apply is your one-stop source where you can grab amazing
          franchise opportunities in India. We are here to help you start your
          own profitable franchise business in India and use test-and-tried ways
          to earn big. We welcome investors to seek the better opportunities to
          start their own venture. Our website shows every minute detail and
          covers all aspects of franchise business opportunities. Being one of
          the trusted platforms, we strive to serve the purposes of investors,
          who are looking for a top franchise in India. We focus on a wide
          spectrum of sectors where you can easily find the reliable options for
          the franchise in India with low investment.
        </p>
        {showtext && <span>
          <p className="my-4 text-gray-600">
            We have come up as one such destination where investors, startups,
            distributors, dealers, franchise prospect seekers can seek
            opportunities to start the best franchise business in India. Our
            main objective is to present a dependable platform where franchisors
            and entrepreneurs can get connected and invest in a profitable
            franchise in India. We have been delivering the choices for ones,
            looking for information on low cost franchise industries. To step
            into the world of the franchise business, you can always count up on
            us, as we present you with the most exciting business opportunities
            to establish your own business.
          </p>
          <h2 className="text-2xl font-bold my-3 text-[1.3rem] md:text-[1.5rem]">Grab Abundance of Franchise Opportunities Here!</h2>
          <p className="my-4 text-gray-600">
            If you are someone, who wants to reap the benefits out of franchise
            opportunities in India, Franchise Apply is certainly the right
            place, to begin with. Being an investor if you think that is
            fruitful to associate with a well-established brand, then you will
            find us the perfect companion to execute your further plans. We
            bring you a chance to connect with a top franchise in India and seek
            the opportunity to grow as an investor. Whether you want to join us
            as an investor or want to advertise your profitable franchise in
            India, we are always ready to help. You can browse through our huge
            list to seize the opportunity to start the best franchise business
            in India. At Franchise Apply, we offer oodles of options that match
            your needs for starting with low cost franchise. In fact, you can
            gather reliable information about the specific franchise in India
            with low investment here. Since we always believe in assisting
            everyone to grow, you can always count on us for the opportunities
            that we bring to the table for you. Check the franchise listed here
            and choose to take benefits out of what suits you the most.
          </p>
        </span>}

        <button onClick={()=> setShowText(!showtext)} className="font-bold my-5">{showtext ? "Show Less[-]" : "Show More[+]"}</button>
      </div>


    </div>
  );
}

const Card = ({ url }) => {
  return (
    <>
      <div className="p-2 md:p-4 border-2 rounded-lg bg-white text-center lg:w-[300px] shadow-lg">
        <img src={url} alt="" />
      </div>
    </>
  );
};
