import React from "react";
import NavigationBar from "../../Shared-componets/Header/NavigationBar";
import Banner from "./BannarPage/Banner";
import Footer from "../../Shared-componets/Footer/Footer";
import Gallery from "../GallarySection/Gallery";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Gallery></Gallery>
    </>
  );
};

export default Home;
