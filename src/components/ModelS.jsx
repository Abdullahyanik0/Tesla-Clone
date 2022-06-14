import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import modelImage from "../image/ModelS.jpg";
import Hero1 from "../image/Hero1.jpg";
import Hero2 from "../image/Hero2.jpg";
import item1 from "../image/item1.jpg";
import item2 from "../image/item2.jpg";
import item3 from "../image/item3.jpg";
import ModelSSpecs from "../image/ModelSSpecs.jpg";

const modelInfo = [
  { item: "Range (EPA est.,)", value: "396 mi" },
  { item: "1/4 Mile", value: "9.23@155 mph trap speed" },
  { item: "Peak Power", value: "1,020 hp" },
  { item: "Top Speed", value: "200 mph" },
  { item: "Drag Coefficient", value: "396 mi" },
  { item: "Powertrain", value: "396 mi" },
  { item: "Range (EPA est.,)", value: "396 mi" },
  { item: "Supercharging Max", value: "396 mi" },
  { item: "Cargo", value: "396 mi" },
  { item: "Weight", value: "396 mi" },
  { item: "Acceleration", value: "396 mi" },
];

const ModelS = () => {
  return (
    <>
      <Header />
      <div className="w-full h-full font-family ">
        <div className="model h-screen font-family w-full">
          <div
            className=" bg-cover h-full bg-center w-full -z-10  drop-shadow-xl absolute"
            style={{ backgroundImage: `url(${modelImage})` }}
          ></div>
          <div className="w-full  h-1/2 bottom-0 bg-gradient-to-t absolute  from-black "></div>
          <div className="model flex items-center justify-start   w-full h-full  flex-col mt-[142px] absolute">
            <h1 className="text-[40px] font-bold tracking-[0.2rem] ">
              Model S
            </h1>
            <p className="font-semibold text-lg tracking-wider">Plaid</p>
          </div>
          <div className="model-info sm:gap-x-6 font-semibold tracking-wide gap-x-[85px] flex w-full text-[28px] justify-center items-end pb-14 sm:pb-20  h-screen text-white  absolute">
            <div className="sm:hidden">
              <h1>396 mi</h1>
              <p className="text-sm text-center ">Range (EPA est.)</p>
            </div>
            <div>
              <h1>1.99 s</h1>
              <p className="text-sm sm:text-[12px] text-center">0-60 mph</p>
            </div>
            <div>
              <h1>200 mph</h1>
              <p className="text-sm sm:text-[12px] text-center">Top Speed</p>
            </div>
            <div>
              <h1>1,020 hp</h1>
              <p className="text-sm sm:text-[12px] text-center ">Peak Power</p>
            </div>
            <button className="h-[40px] md:hidden   w-[200px] mb-4 text-[13px] border-4 items-center hover:bg-white hover:text-black p-2 rounded-full ">
              ORDER NOW
            </button>
          </div>
        </div>
        <div className="w-full  py-12 bg-black text-white flex justify-center text-[28px] font-semibold ">
          Interior of the Future
        </div>
        <div>
          <img
            className="w-full h-screen object-cover object-center"
            src={Hero1}
            alt=""
          />
        </div>

        <div className="">
          <img
            className="w-full h-auto object-cover object-center"
            src={Hero2}
            alt=""
          />
        </div>
        <div className="bg-black pb-12"></div>

        <div className="flex    flex-col sm:gap-y-24 sm:w-full justify-center   items-center  bg-black tracking-wide text-white  ">
          <div className="flex sm:flex-col   sm:flex sm:w-full">
            <div className="w-[550px] sm:mb-12 md:w-full  pr-20 sm:p-0 flex  flex-col justify-center ">
              <h1 className="text-lg   font-semibold tracking-wider">
                Relentless Performance
              </h1>
              <p>
                Staggered, performance wheels and tires keep the car planted and
                help transfer maximum power down to the road.
              </p>
            </div>
            <div className="w-[550px]   md:w-full   ">
              <img className="w-full md:w-full h-full " src={item1} alt="" />
            </div>
          </div>
          <div className="flex sm:flex-col sm:w-full">
            <div className="w-[550px] sm:mb-12 md:w-full  3xl:hidden pl-20 sm:p-0 flex  flex-col justify-center">
              <h1 className="text-lg font-semibold tracking-wider">
                Optimized Aerodynamics
              </h1>
              <p>
                Attention to detail on all exterior surfaces makes Model S the
                most aerodynamic production car on Earth.
              </p>
            </div>
            <div className="w-[550px]  md:w-full  ">
              <img className="object-cover" src={item2} alt="" />
            </div>
            <div className="w-[550px]  md:w-full sm:hidden  pl-20 sm:p-0 flex  flex-col justify-center">
              <h1 className="text-lg font-semibold tracking-wider">
                Optimized Aerodynamics
              </h1>
              <p>
                Attention to detail on all exterior surfaces makes Model S the
                most aerodynamic production car on Earth.
              </p>
            </div>
          </div>
          <div className="flex sm:flex-col sm:w-full">
            <div className="w-[550px] sm:mb-12 md:w-full  pr-20 sm:p-0 flex  flex-col justify-center">
              <h1 className="text-lg font-semibold tracking-wider">
                Refined Styling
              </h1>
              <p>An iconic silhouette meets refreshed, elegant proportions.</p>
            </div>
            <div className="w-[550px] md:w-full  ">
              <img className="object-cover" src={item3} alt="" />
            </div>
          </div>
        </div>

        <div className="bg-black pb-24"></div>

        <div className="bg-black pb-24 h-screen gap-x-20 sm:px-4 w-full text-white  sm:flex-col   flex  ">
          <div className="w-1/2 sm:w-full  h-full">
            <img className=" object-cover" src={ModelSSpecs} alt="" />
          </div>
          <div className="">
            <h1 className="text-[32px] font-semibold">Model S Specs</h1>
            <div className="my-4 ">
              <button className="h-[32px] mr-2 w-[264px] text-white border-2 text-sm rounded-full">
                Model S Plaid
              </button>
              <button className="h-[32px] w-[264px] text-white border-2 text-sm rounded-full">
                Model S
              </button>
            </div>{" "}
            <div className="grid  grid-cols-2   ">
              {modelInfo.map((model) => (
                <div className="h-[53px] mb-6 ">
                  <div className="text-gray-400">_____</div>
                  <h1>{model.item}</h1>
                  <p>{model.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black pb-24"></div>

    </>
  );
};

export default ModelS;
