import React from "react";
import Navbar from "../../shared/Navbar/index";
import Hero from "../../shared/hero/home";
import Section_One from "./sec_one";
import Section_Two from "./sec_two";
import DealOfTheDay from "./DealOfTheDay";
import TrendingProducts from "./TrendingProducts";
import Categories from "./categories";
import NewArrival from "./new_arrival";
import Footer from "../../shared/Footer/index";

 const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section_One />
      <Section_Two />
      <div className="text-left mt-10 font-bold text-[30px]">
        <div className="border-b border-primary mx-4 md:mx-16">
          Deal Of The Day
        </div>
        <DealOfTheDay />
      </div>
      <div className="text-center mt-10 font-bold text-[30px]">
        <div>Trending product</div>
        <TrendingProducts />
      </div>
      <Categories />
      <NewArrival />
      <Footer />
    </div>
  );
}

export default Home;