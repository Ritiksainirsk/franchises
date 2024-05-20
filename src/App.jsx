import { useState } from "react";
import React from "react";
import "./App.css";
import HeaderAdd from "./Components/HeaderAdd";
import { Navbarr } from "./Components/Navbar";
import Footer from "./Components/Footer";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Chip,
  Typography,
} from "@material-tailwind/react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ExistingBusiness from "./Pages/ExistingBusiness";
import BrandRegisteration from "./Pages/BrandRegisteration";
import Blog from "./Pages/Blog";
import Interviews from "./Pages/Interviews";
import Videos from "./Pages/Videos";
import MasterFranchise from "./Pages/MasterFranchise";

function App() {
  const [openPopover, setOpenPopover] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  return (
    <>
      <Popover open={openPopover} handler={setOpenPopover}>
        <PopoverHandler {...triggers}>
          <a
            href="https://web.whatsapp.com/"
            target="_blank"
            className="fixed z-50 bottom-8 right-7 rounded-lg hover:bg-[#25d365bf] bg-[#25D366] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10 p-3"
          >
            <IoLogoWhatsapp className="text-2xl text-white" />
          </a>
        </PopoverHandler>
        <PopoverContent {...triggers} className="z-50 bg-[#cee9ea] w-36 py-1">
          <div className="">
            <Typography
              as="a"
              href="#"
              variant="h6"
              color="blue-gray"
              className="font-bold transition-colors hover:text-gray-900"
            >
              Chat With Us
            </Typography>
          </div>
        </PopoverContent>
      </Popover>
      <HeaderAdd />
      <Navbarr />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ExistingBusiness/>} path="/existingbusiness" />
        <Route element={<BrandRegisteration/>} path="/brand_registration" />
        <Route element={<BrandRegisteration/>} path="" />
        <Route element={<Blog/>} path="/blog" />
        <Route element={<Interviews/>} path="/interviews" />
        <Route element={<Videos/>} path="/videos" />
        <Route element={<MasterFranchise/>} path="/masterfranchise" />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
