import {motion} from "framer-motion";
import Image from "next/image";

const Carousel = () => {

    return (
    <div className="carousel carousel-vertical rounded-box h-full w-full">
        <div className="carousel-item h-full w-fill hero ">
            <img src="https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className="object-contain" style={{objectFit:"cover" , width:"100%" ,height:"100%"}} />
            <div className="hero-overlay bg-opacity-40"></div>
            <motion.div
                initial={{opacity : 0}}
                animate={{opacity : 1}}
                transition={{duration:0.5}}
                >
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn border-none hover:bg-white hover:text-[#2C2C2E] bg-[#2C2C2E]  text-[#EDEEFF]">Get Started</button>
                    </div>
                </div>
            </motion.div>
        </div>
        <div className="carousel-item h-full w-fill hero">
            <img src="https://images.unsplash.com/photo-1611967164521-abae8fba4668?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className="object-contain" style={{objectFit:"cover" , width:"100%" ,height:"100%"}}/>
            <div className="hero-overlay bg-opacity-40"></div>
            <motion.div
                initial={{opacity : 0}}
                animate={{opacity : 1}}
                transition={{duration:0.5}}
                >
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn border-none hover:bg-white hover:text-[#2C2C2E] bg-[#2C2C2E]  text-[#EDEEFF]">Get Started</button>
                    </div>
                </div>
            </motion.div>
            
        </div>
        <div className="carousel-item h-full w-fill hero">
            <img src="https://images.unsplash.com/photo-1604061986761-d9d0cc41b0d1?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className="object-contain" style={{objectFit:"cover" , width:"100%" ,height:"100%"}}/>
            <div className="hero-overlay bg-opacity-40"></div>
            <motion.div
                initial={{opacity : 0}}
                animate={{opacity : 1}}
                transition={{duration:0.5}}
                >
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn border-none hover:bg-white hover:text-[#2C2C2E] bg-[#2C2C2E]  text-[#EDEEFF]">Get Started</button>
                    </div>
                </div>
            </motion.div>
        </div>

      </div>)
}
export default Carousel;