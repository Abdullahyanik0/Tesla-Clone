import React from "react";

const MainContent = (props) => {
  return (
    <div className="w-full h-[100vh]  ">
      <div
        style={{
          backgroundImage: `url(${props.image})`,
        }}
        className="  w-full h-[100vh] bg-cover bg-center flex justify-center items-center"
      >
        <div className="main-content w-full h-full flex flex-col  items-center">
          <div className="model flex items-center flex-col mt-28">
            <h1 className="text-[40px] font-bold tracking-wider ">
              {props.title}
            </h1>
            <p className="font-medium">
              Order Online for{" "}
              <span className="underline underline-offset-1 ">
                Touchless Delivery
              </span>
            </p>
          </div>
          <div className="info mt-[540px] flex justify-center items-center text-sm gap-x-6">
            <button className="h-[42px] w-[264px] text-white bg-[#171920cc] rounded-full">
              CUSTOM ORDER
            </button>
            <button className="h-[42px] w-[264px] text-black  bg-[#f4f4f4a6] rounded-full">
              EXISTING INVENTORY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
