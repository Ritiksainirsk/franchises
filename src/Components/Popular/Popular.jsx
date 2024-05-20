import React,{useEffect}  from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./popular.css";

export default function Popular() {
  const data = [
    {
      id: 1,
      destTitle: "India's Well Known Clothing Retail Brand",
      grade: "27-Apr-2024",
      img:"https://www.franchiseapply.com/admin/uploads/blog/89780.jpeg"
    },
    {
      id: 2,
      destTitle: "Things to Consider While Selecting the Right Retail Business Franchise",
      img:"https://www.franchiseapply.com/admin/uploads/blog/837359.jpg",
      grade: "25-Apr-2024",
    },
    {
      id: 3,
      destTitle:"Best Electronic Appliance Franchise in India - MY COOL STAR",
      img:"https://www.franchiseapply.com/admin/uploads/blog/637464.jpeg",
      grade: "25-Apr-2024",
    },
  ];

  
  return (
    <div>
      <div className="section container popular" id="popular">
        <div className="secContainer ">

          <div className="mainContant mt-[-29px]">
            {data.map((item) => {
              return (
                <div className="singleDestination bg-white p-3 mb-5 cursor-pointer"  data-aos="fade-up">
                  <div className="destImage">
                    <img src={item.img} alt="img" className="rounded-lg" />

                    <div className="ovelayInfo rounded-lg">
                      <h3>{item.destTitle}</h3>
                      <p>{item.grade}</p>

                      <AiOutlineArrowRight className="icon" />
                    </div>
                  </div>

                </div>
              );
            })}            
          </div>
        </div>
      </div>
    </div>
  );
}
