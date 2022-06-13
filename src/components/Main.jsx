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

const Main = () => {
  return (
    <>
      <div className="main h-full w-full font-family ">
        <div className="main-content w-full h-full ">
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            modules={[Mousewheel, Pagination]}
            className="mySwiper max-h-screen "
          >
            <SwiperSlide>
              <MainContent id={1} image={modelXimage} title="Model X" />
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
