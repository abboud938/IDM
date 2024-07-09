
import Carousel from "./carousel";
import {motion} from "framer-motion"
const Intro = () => {


    return(
          <div className="h-full w-full flex flex-col justify-center items-center gap-4 lg:flex-row px-4 sm:px-10 md:px-12 lg:px-20 xl:px-48">
            {/* Carousel CONTAINER */}
            <motion.div
                initial= {{x:-500}}
                animate = {{x:0}} 
                transition={{duration:0.8}}
                className="h-1/2 mx-10 lg:h-full lg:w-1/2 relative">
                <Carousel/>
            </motion.div>
            {/* TEXTS CONTAINER */}
            <motion.div
                initial= {{x:500}}
                animate = {{x:0}} 
                transition={{duration:0.5}}
            className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-6 items-center justify-center">
                {/* TITLE */}
                <h1 className="text-[#EDEEFF] text-2xl md:text-6xl font-bold ">
                  Top Global Hotel Furniture Manufacturer
                </h1>
                {/* DESC */}
                <p className="text-[#EDEEFF] md:text-xl ">
                 Focusing On Hotel Engineering Furniture For 12 Years
                </p>
                {/* BUTTONS */}
                <div className="w-full flex gap-4">
                  <button className="p-4 rounded-lg ring-1 w-1/2 ring-[#2C2C2E] bg-[#2C2C2E] text-[#EDEEFF]">
                    View Our Work
                  </button>
                  <button className="p-4 rounded-lg ring-1 w-1/2 ring-[#EDEEFF] text-[#EDEEFF]">
                    Contact Us
                  </button>
                </div>
            </motion.div>
          </div>
      );
}

export default Intro;