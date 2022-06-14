import React from "react";
import Fade from "react-reveal/Fade";

const MainContent = (props) => {
  return (
    <div className="w-full h-[100vh] ">
      <div
        style={{
          backgroundImage: `url(${props.image})`,
        }}
        className=" headline   w-full h-full bg-cover bg-center flex justify-center items-center"
      >
        <div className="main-content w-full h-full flex flex-col  items-center">
          <div className="model flex items-center flex-col mt-28">
            <Fade bottom delay={400}>
              <h1 className="text-[40px] font-bold tracking-wider ">
                {props.title}
              </h1>
            </Fade>
            <Fade bottom delay={900}>
              <p className="font-medium">
                Order Online for{" "}
                <span className="underline underline-offset-1 ">
                  Touchless Delivery
                </span>
              </p>
            </Fade>
          </div>
          <div className="info mt-[540px] flex justify-center items-center text-sm gap-x-6 sm:flex-col sm:gap-y-2 sm:mt-[500px] ">
            <Fade left duration={1000}  delay={1200}>
              <button className="h-[42px] w-[264px] text-white bg-[#171920cc] rounded-full">
                CUSTOM ORDER
              </button>
            </Fade>
            <Fade right duration={1000} delay={1200}>
              <button className="h-[42px] w-[264px] text-black  bg-[#f4f4f4a6] rounded-full">
                EXISTING INVENTORY
              </button>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
