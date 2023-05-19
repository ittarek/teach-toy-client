import React from "react";
import NavigationBar from "../../Shared-componets/Header/NavigationBar";
import Banner from "./BannarPage/Banner";
import Footer from "../../Shared-componets/Footer/Footer";
import Gallery from "../GallarySection/Gallery";
import ShopCategory from "../ShopCategoryPage/ShopCategory";
import FeatureToy from "./FeatureToy/FeatureToy";
import { Container } from "react-bootstrap";
import Welcome from "./WellComePage/Welcome";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopCategory></ShopCategory>
      <Welcome></Welcome>
      <Container>
        <h3 className="text-info">Featured Collection</h3>

        <FeatureToy></FeatureToy>
      </Container>
    </>
  );
};

export default Home;
