import {motion, useInView} from "framer-motion"
import { useRef } from "react";

const Stat = () => {
    const statView = useRef();

    const isStatInView = useInView(statView );


    return (
        <motion.div className="flex justify-center items-center mx-2 mt-2 gap-2 lg:w-1/2 lg:mx-auto " ref={statView} initial={{y:"-300px" ,opacity:0.2}} animate={isStatInView ? {y:0 , opacity:1} : {}}
        transition={{delay : 0.1 , duration : 0.5}}>
            <div className="stats shadow w-1/3 ">
                <div className="stat flex-col justify-center items-center">
                    <div className="stat-title font-bold text-sm">Factory Area</div>
                    <div className="stat-value text-sm">1,000,000</div>
                </div>
            </div>
            <div className="stats shadow  w-1/3 ">
                <div className="stat flex-col justify-center items-center">
                    <div className="stat-title font-bold text-sm">Numer Of Staff</div>
                    <div className="stat-value text-sm">550</div>
                </div>
            </div>
            <div className="stats shadow  w-1/3 ">
                <div className="stat flex-col justify-center items-center">
                    <div className="stat-title font-bold text-sm">Designer</div>
                    <div className="stat-value text-sm">45</div>
                </div>
            </div>
        </motion.div>
    )
}

export default Stat;