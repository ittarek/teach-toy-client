import React from "react";
import NavigationBar from "../../Shared-componets/Header/NavigationBar";
import Banner from "./BannarPage/Banner";
import Footer from "../../Shared-componets/Footer/Footer";
import Gallery from "../GallarySection/Gallery";
import ShopCategory from "../ShopCategoryPage/ShopCategory";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopCategory></ShopCategory>
    </>
  );
};

export default Home;
