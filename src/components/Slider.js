import React from "react";
import { Carousel } from "./Carousel/Carousel";

const Slider = () => {
  return (
    <div className="mb-40">
      <Carousel>
        <div>
          <img width={1000} src={process.env.PUBLIC_URL+"/img/slider/banner-1.png"} alt="Adidas banner" />
        </div>
        <div>
          <img width={1000} src={process.env.PUBLIC_URL+"/img/slider/banner-2.png"} alt="Converse banner"
          />
        </div>
        <div>
          <img width={1000} src={process.env.PUBLIC_URL+"/img/slider/banner-3.png"} alt="Nike banner" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
