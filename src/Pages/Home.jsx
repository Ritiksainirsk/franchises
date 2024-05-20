import React from "react";
import SideBar from "../Components/SideBar";
import MultiCityFranchises from "../Components/MultiCityFranchises";
import BlogsAndNews from "../Components/BlogsAndNews";
import PremiumFranchise from "../Components/PremiumFranchise";
import ClientTestimonials from "../Components/ClientTestimonials";
import Gallarty from "../Components/Gallary";
import FranchiseMagazine from "../Components/FranchiseMagazine";

export default function Home() {
  return (
    <div>
      <SideBar/>
      <MultiCityFranchises />
      <BlogsAndNews />
      <PremiumFranchise />
      <ClientTestimonials />
      <Gallarty />
      <FranchiseMagazine />
    </div>
  );
}
