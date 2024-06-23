import React, { useState } from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

export default function HeaderAdd() {

  const [show,setShow] = useState(true)

  return (
    <div>
        {show && <div className="flex flex-wrap items-center justify-center bg-[#FFE9D0] md:gap-9 gap-5 px-2 py-4 " id="sample">
            <div className="col-lg-3 col-sm-12">
              <div className="logo-part md:w-52 w-64">
                   <a href="/">
                  <img src="https://fboindia.franchiseapply.com/public/upload/logoimage/1701949807.png" className="img-fluid" alt=""/></a>
              </div>
              <div className="social-links flex gap-3 items-center justify-center mt-1">
                <a href="https://www.facebook.com/franchiseapplybrandspvtltd" target="_blank" className="facebook"><FaFacebook/></a>
                <a href="https://twitter.com/ApplyPvt" target="_blank" className="twitter"><FaSquareTwitter/></a>
                <a href="https://www.linkedin.com/in/franchiseapply/" target="_blank" className="linkedin"><FaLinkedin/></a>
                <a href="https://www.youtube.com/c/FranchiseApply" target="_blank" className="youtube"><FaYoutube/></a>
                <a href="https://www.pinterest.com/franchiseapply/" className="pinterest"><FaPinterest/></a>
                <a href="https://www.instagram.com/franchiseapplybrandspvtltd" target="_blank" className="instagram"><FaInstagram/></a>
                <a href="https://api.whatsapp.com/send?phone=919216473404" className="Whatsapp" target="_blank"><FaWhatsapp/></a>
              </div>
              <div className="emai-1 font-bold mt-1 text-center">
                <span className=''>info@franchiseapply.com</span>
              </div>
             
            </div>
            <div className="col-lg-5 col-sm-12 pt-4 pt-lg-0 content d-flex flex-column justify-content-center">
               <div className="jp-video md:w-[500px]">
                  <a href="https://fboindia.franchiseapply.com/">
                    <img src="https://fboindia.franchiseapply.com/public/upload/gifimage/1715062801.jpg" alt=""/>
                  </a>
               </div>
            </div>
            <div className="col-lg-2 col-sm-12">
              <div className="top_number text-center">
                {/* <!--<span>Email us</span>--> */}
                <div className="img sample-2 w-36">
                  <img src="https://fboindia.franchiseapply.com/public/upload/numberimage/1709975644.png" alt=""/>
                </div>
                </div>
            </div>
            <div className="col-lg-2 col-sm-12">
              <div className="top_number text-center">
                {/* <!--<span>Email us</span>--> */}
                <div className="img w-36">
                  <img src="https://fboindia.franchiseapply.com/public/upload/contacts/1701770054.png" alt=""/>
                </div>
                <div className="clearfix"></div>  
                <div className="text-4">
                  <h5>TOLL FREE NUMBER</h5>
                  <p>18001200252</p>
                </div>
                </div>
            </div>
            <button className='hover:bg-black rounded-full px-2 py-0 hover:text-white font-bold' onClick={()=> setShow(false)}>X</button>
          </div>}
    </div>
  )
}
