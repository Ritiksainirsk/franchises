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
      <footer className="footer p-10 bg-base-200 text-base-content">
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
              <button className="btn text-white hover:text-black join-item text-[11px] md:text-[13px] bg-black">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      {/*  */}
      <footer className="footer p-10 bg-base-200 text-base-content">
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
          <a className="link link-hover">Brand Franchise Business Model</a>
          <a className="link link-hover">Franchise Consultancy</a>
          <a className="link link-hover">
            Marketing & Lead Generation for Brands
          </a>
          <a className="link link-hover">Commercial Property Registration</a>
          <a className="link link-hover">Franchise Development Programme</a>
        </nav>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Buy Premium Franchise</a>
          <a className="link link-hover">Buy Existing Business</a>
          <a className="link link-hover">Sell Existing Business</a>
          <a className="link link-hover">View Registered Properties</a>
          <a className="link link-hover">Register Your Property</a>
          <a className="link link-hover">Become Our Channel Partner</a>
          <a className="link link-hover">Contact-us</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Terms & Conditions</a>
        </nav>
        <nav>
          <h6 className="footer-title">Popular Franchise</h6>
          <a className="link link-hover">Automobiles</a>
          <a className="link link-hover">Beauty and Salon</a>
          <a className="link link-hover">Business Services</a>
          <a className="link link-hover">Dealers and Distributors</a>
          <a className="link link-hover">Education</a>
          <a className="link link-hover">Health and Wellness</a>
          <a className="link link-hover">Food and Beverage</a>
          <a className="link link-hover">Retail</a>
        </nav>
      </footer>
      {/*  */}
      {/*  */}
      <footer className="footer p-10 bg-base-300 text-base-content">
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
              <FaYoutube />
            </a>
            <a className="cursor-pointer text-[20px]">
              <FaInstagram />
            </a>
            <a className="cursor-pointer text-[20px]">
              <FaFacebook />
            </a>
            <a className="cursor-pointer text-[20px]">
              <FaSquareTwitter />
            </a>
            <a className="cursor-pointer text-[20px]">
              <FaLinkedin />
            </a>
            <a className="cursor-pointer text-[20px]">
              <FaWhatsapp />
            </a>
          </div>
        </nav>
      </footer>
      {/*  */}
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2009 - 2024 Franchise</p>
        </aside>
      </footer>
    </>
  );
}
