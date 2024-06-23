import React from "react";
import SideBar from "../Components/SideBar";
import MultiCityFranchises from "../Components/MultiCityFranchises";
import BlogsAndNews from "../Components/BlogsAndNews";
import PremiumFranchise from "../Components/PremiumFranchise";
import ClientTestimonials from "../Components/ClientTestimonials";
import Gallarty from "../Components/Gallary";
import FranchiseMagazine from "../Components/FranchiseMagazine";
import Categorys from "../Components/Categorys";
import TopFranchiseOpportunieties from "../Components/TopFranchiseOpportunieties";

export default function Home() {

  return (
    <div>
      <SideBar/>
      <MultiCityFranchises />
      <TopFranchiseOpportunieties/>
      <PremiumFranchise />
      <BlogsAndNews />
      <ClientTestimonials />
      <Categorys/>
      <Gallarty />
      <FranchiseMagazine />
    </div>
  );
}

