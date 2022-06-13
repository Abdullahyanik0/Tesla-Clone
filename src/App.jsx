import React from "react";
import "./index.css";
import Home from "Home";
import Main from "components/Main";
import Footer from "components/Footer";

const App = () => {
  return (
    <>
      <div className=" header-text flex  justify-center items-center  text-[16px]  underline underline-offset-4 h-[52px]   ">
        <a href="/" className="text-text  hover:text-black">
          Read Tesla's 2021 Impact Report
        </a>
      </div>
      <Home />
      <Main />
      <Footer />
    </>
  );
};

export default App;
