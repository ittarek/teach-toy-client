import React from "react";
import NavigationBar from "../../Shared-componets/Header/NavigationBar";
import Banner from "./BannarPage/Banner";
import Footer from "../../Shared-componets/Footer/Footer";
import Gallery from "../GallarySection/Gallery";
import ShopCategory from "../ShopCategoryPage/ShopCategory";
import FeatureToy from "./FeatureToy/FeatureToy";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopCategory></ShopCategory>
 
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <FeatureToy />
     
          {/* <ProductCard />
          <ProductCard /> */}
        </div>
      </Container>
    </>
  );
};

export default Home;
