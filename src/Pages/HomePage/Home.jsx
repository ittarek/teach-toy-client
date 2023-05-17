import React from "react";
import NavigationBar from "../../Shared-componets/Header/NavigationBar";
import Banner from "./BannarPage/Banner";
import Footer from "../../Shared-componets/Footer/Footer";

const Home = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <Footer></Footer>
    </>
  );
};

export default Home;
