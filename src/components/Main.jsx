import React from "react";
import MainContent from "./MainContent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import modelSimage from "../image/ModelS.jpg";
import model3image from "../image/Model3.jpg";
import modelXimage from "../image/ModelX.jpg";
import modelYimage from "../image/ModelY.jpg";
import SolarRoofimage from "../image/SolarRoof.jpg";
import SolarPanelsimage from "../image/SolarPanels.jpg";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper";

const Main = () => {
  return (
    <>
      <div
        id="blurthemes"
        className=" main h-full box-content w-full font-family "
      >
        <div className="main-content w-full h-full ">
          <Swiper
            setTransition={1000}
            effect={"fade"}
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            modules={[Mousewheel, Pagination,EffectFade]}
            className="mySwiper max-h-screen "
          >
            <SwiperSlide>
              <MainContent image={modelXimage} title="Model X" />
            </SwiperSlide>
            <SwiperSlide>
              <MainContent image={model3image} title="Model 3" />
            </SwiperSlide>
            <SwiperSlide>
              <MainContent image={modelSimage} title="Model S" />
            </SwiperSlide>
            <SwiperSlide>
              <MainContent image={modelYimage} title="Model Y" />
            </SwiperSlide>
            <SwiperSlide>
              <MainContent image={SolarPanelsimage} title="Solar Panels" />
            </SwiperSlide>
            <SwiperSlide>
              <MainContent image={SolarRoofimage} title="Solar Roof" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Main;
