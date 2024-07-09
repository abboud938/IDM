"use client";

import About from "./components/about";
import Intro from "./components/intro";
import Summery from "./components/summery";
import Footer from "./components/footer";
import Stat from "./components/Stat";

const Homepage = () => {

  
  return (
   <>
      <Intro />

      <Summery />
      <Stat/>
      <About/>
      <div className="flex justify-center items-center mt-4 mb-8">
        <button className="p-4 rounded-lg  bg-[#2C2C2E] text-[#EDEEFF] mx-auto ">
          View Our Gallery
        </button>
      </div>
      <Footer/>

    </>
  )
};

export default Homepage;
