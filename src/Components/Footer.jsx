import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";


export default function Footer() {
  return (
    <>
      {/*  */}
      <footer className="footer p-10 bg-[#64442c] text-white">
        <nav className="hidden md:block">
          <h6 className="footer-title">BROWSE BY LOCATION</h6>
          <p className="leading-[22px] tracking-wider"><a href="">Andhra Pradesh</a>|<a href="">Arunachal Pradesh</a>|<a href="">Assam</a>|<a href="">Bihar</a>|Chandigarh|Chhattisgarh|Daman Diu|Goa|Gujarat|Haryana|Himachal Pradesh|Jammu Kashmir|Jharkhand|Karnataka|Kerala|Lakshadweep|Madhya Pradesh|Maharashtra|Manipur|Meghalaya|Mizoram|Nagaland|New Delhi|Orissa|Pondicherry|Punjab|Rajasthan|Sikkim|Tamil Nadu|Tripura|Uttaranchal|Uttar Pradesh|West Bengal</p>
        </nav>
        <form>
          <h6 className="footer-title">SUBSCRIBE TO OUR NEWSLETTER!</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-gray-500">Never Miss Anything From Construx By Signing Up To Our Newsletter.</span>
            </label>
            <div className="join">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered join-item text-[11px] md:text-[13px]"
              />
              <button className="btn text-white hover:text-black join-item text-[11px] md:text-[13px] bg-[#C9302C] border-none">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      {/*  */}
      <footer className="footer p-10 bg-[#64442c] text-white">
        <aside>
          <div className="p-3 bg-white w-[200px] h-[270px] rounded-lg">
            <img
              className=""
              src="https://www.franchiseapply.com/admin/uploads/footerimage/image1/134447.jpg"
            />
          </div>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Our Services</h6>
          <a className="link link-hover hover:text-[#C9302C] " style={{textDecoration:"none",listStyle:"none"}}>Brand Franchise Business Model</a>
          <a className="link link-hover hover:text-[#C9302C]">Franchise Consultancy</a>
          <a className="link link-hover hover:text-[#C9302C]">
            Marketing & Lead Generation for Brands
          </a>
          <a className="link link-hover hover:text-[#C9302C]">Commercial Property Registration</a>
          <a className="link link-hover hover:text-[#C9302C]">Franchise Development Programme</a>
        </nav>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover hover:text-[#C9302C]">Home</a>
          <a className="link link-hover hover:text-[#C9302C]">Buy Premium Franchise</a>
          <a className="link link-hover hover:text-[#C9302C]">Buy Existing Business</a>
          <a className="link link-hover hover:text-[#C9302C]">Sell Existing Business</a>
          <a className="link link-hover hover:text-[#C9302C]">View Registered Properties</a>
          <a className="link link-hover hover:text-[#C9302C]">Register Your Property</a>
          <a className="link link-hover hover:text-[#C9302C]">Become Our Channel Partner</a>
          <a className="link link-hover hover:text-[#C9302C]">Contact-us</a>
          <a className="link link-hover hover:text-[#C9302C]">About</a>
          <a className="link link-hover hover:text-[#C9302C]">Terms & Conditions</a>
        </nav>
        <nav>
          <h6 className="footer-title">Popular Franchise</h6>
          <a className="link link-hover  hover:text-[#C9302C]">Automobiles</a>
          <a className="link link-hover hover:text-[#C9302C]">Beauty and Salon</a>
          <a className="link link-hover hover:text-[#C9302C]">Business Services</a>
          <a className="link link-hover hover:text-[#C9302C]">Dealers and Distributors</a>
          <a className="link link-hover hover:text-[#C9302C]">Education</a>
          <a className="link link-hover hover:text-[#C9302C]">Health and Wellness</a>
          <a className="link link-hover hover:text-[#C9302C]">Food and Beverage</a>
          <a className="link link-hover hover:text-[#C9302C]">Retail</a>
        </nav>
      </footer>
      {/*  */}
      {/*  */}
      <footer className="footer p-10 bg-[#64442c] text-white">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a className="cursor-pointer text-[20px]">
              <FaYoutube className="text-[#FF0000]" />
            </a>
            <a className="cursor-pointer text-[20px]">
              <FaInstagram className="text-[#FCAF45]"/>
            </a>
            <a className="cursor-pointer text-[20px]">
              <FaFacebook className="text-[#1877F2]"/>
            </a>
            <a className="cursor-pointer text-[20px]">
              <FaSquareTwitter className="text-[#1DA1F2]"/>
            </a>
            <a className="cursor-pointer text-[20px]">
              <FaLinkedin className="text-[#0077B5]"/>
            </a>
            <a className="cursor-pointer text-[20px]">
              <FaWhatsapp className="text-[#25D366] hover:text-[#45a568]"/>
            </a>
          </div>
        </nav>
      </footer>
      {/*  */}
      <footer className="footer footer-center p-4 bg-gray-800 text-white font-bold">
        <aside>
          <p>Copyright © 2009 - 2024 Franchise</p>
        </aside>
      </footer>
    </>
  );
}
