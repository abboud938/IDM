"use client"
import React, { useRef } from "react";

import { motion , useInView } from "framer-motion";

const Summery = () => {

   const containerRef = useRef();
   const isSkillRefInView = useInView(containerRef ,{} );

    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 text-center overflow-hidden">
            <p className="font-bold  text-4xl text-[#EDEEFF] hover:text-[#EDEEFF] cursor-pointer pb-9">About</p>
            <div className="flex lg:flex-row justify-center items-center flex-col lg:gap-8 sm:gap-10 gap-12">

                <div className="w-full lg:w-6/12">
                    <img   className="lg:block hidden w-full" src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png" alt="people discussing on board" />
                    <img    className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png" alt="people discussing on board" />
                    <img   className="sm:hidden block w-full" src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png" alt="people discussing on board" />
                </div>
                <div  className="w-full lg:w-6/12">
                    <h2 className="w-full font-semibold lg:text-3xl text-xl lg:leading-10 leading-9 text-[#EDEEFF]">IDM Hotel Furniture Co., Ltd is located in Foshan, Guangdong Province, it is a high-end hotel furniture manufacturer integrating design, development, production and sales. Founded in 2008, after 15 years of quick development, relying on accurate product position and competitive industrial and resource advantages, IDM Hotel Furniture build famous brand and reputation in short time.</h2>
                </div>
            </div>
            <div className="flex justify-center items-center lg:flex-row flex-col md:gap-14 gap-16 lg:mt-20 mt-16" >
                <motion.div className="w-full lg:w-6/12 flex-col justify-center items-center" ref={containerRef} initial={{x:"-500px" , opacity:0.2  }} animate={isSkillRefInView ? {x:0 , opacity:1 } : {}}
                        transition={{delay : 0.1 , duration : 0.5}} >
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 mx-auto  text-[#EDEEFF]">Our Story</h2>
                    <p className="font-normal mx-auto text-base leading-6 text-[#EDEEFF] mt-6 w-full lg:w-10/12 xl:w-9/12">The whole line introduces advanced equipment such as automatic production and quality inspection from Italy and Germany. At present, there are 2 international websites and 3 domestic websites, and the annual sales volume is doubling. In order to develop the industry chain more steadily in the future, the company will invest in building a real experience exhibition hall in 2019 to provide professional services and display the overall customized high-end platinum star hotels, high-end private clubs, etc Villa furniture, the new exhibition hall was completed and put into use and opened in May 2020, and the large-scale manufacturing and marketing were launched with a strong start.</p>
                    <p className="font-normal mx-auto text-base leading-6 text-[#EDEEFF] w-full lg:w-10/12 xl:w-9/12 mt-10">With unremitting efforts, it has won the trust and praise of many customers. We will be more advanced production technology, exquisite technology, quality products, satisfactory service, service more customers.</p>
                </motion.div>
                <motion.div className="w-full lg:w-6/12" ref={containerRef} initial={{x:"300px" ,opacity:0.2}} animate={isSkillRefInView ? {x:0 , opacity:1} : {}}
                        transition={{delay : 0.1 , duration : 0.5}}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                        {/* <!-- Team Card --> */}
                        <div className="flex p-4 shadow-md bg-[#2C2C2E] rounded-2xl" >
                            <div className="mr-6">
                                <svg className="mr-6" width="36" height="36" viewBox="0 0 36 36" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 15C20.4853 15 22.5 12.9853 22.5 10.5C22.5 8.01472 20.4853 6 18 6C15.5147 6 13.5 8.01472 13.5 10.5C13.5 12.9853 15.5147 15 18 15Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M25.5 28.5C27.9853 28.5 30 26.4853 30 24C30 21.5147 27.9853 19.5 25.5 19.5C23.0147 19.5 21 21.5147 21 24C21 26.4853 23.0147 28.5 25.5 28.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.5 28.5C12.9853 28.5 15 26.4853 15 24C15 21.5147 12.9853 19.5 10.5 19.5C8.01472 19.5 6 21.5147 6 24C6 26.4853 8.01472 28.5 10.5 28.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-[#EDEEFF]">Team</p>
                                <p className="mt-2 font-normal text-base leading-6 text-[#EDEEFF]">The whole line introduces advanced equipment such as automatic production and quality inspection from Italy and Germany. At present, there are 2 international websites and 3 domestic websites, and the annual sales volume is doubling</p>
                            </div>
                        </div>

                        {/* <!-- Board Card --> */}
                        <div className="flex p-4 shadow-md bg-[#2C2C2E] rounded-2xl">
                            <div className="mr-6">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 10.5C12.1569 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 12.1569 4.5 10.5 4.5C8.84315 4.5 7.5 5.84315 7.5 7.5C7.5 9.15685 8.84315 10.5 10.5 10.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.5 33V25.5L6 24V18C6 17.6022 6.15804 17.2206 6.43934 16.9393C6.72064 16.658 7.10218 16.5 7.5 16.5H13.5C13.8978 16.5 14.2794 16.658 14.5607 16.9393C14.842 17.2206 15 17.6022 15 18V24L13.5 25.5V33" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M25.5 10.5C27.1569 10.5 28.5 9.15685 28.5 7.5C28.5 5.84315 27.1569 4.5 25.5 4.5C23.8431 4.5 22.5 5.84315 22.5 7.5C22.5 9.15685 23.8431 10.5 25.5 10.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22.5 33V27H19.5L22.5 18C22.5 17.6022 22.658 17.2206 22.9393 16.9393C23.2206 16.658 23.6022 16.5 24 16.5H27C27.3978 16.5 27.7794 16.658 28.0607 16.9393C28.342 17.2206 28.5 17.6022 28.5 18L31.5 27H28.5V33" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-[#EDEEFF]">Board</p>
                                <p className="mt-2 font-normal text-base leading-6 text-[#EDEEFF]">The whole line introduces advanced equipment such as automatic production and quality inspection from Italy and Germany. At present, there are 2 international websites and 3 domestic websites, and the annual sales volume is doubling.</p>
                            </div>
                        </div>

                        {/* <!-- Press Card --> */}
                        <div className="flex p-4 shadow-md bg-[#2C2C2E] rounded-2xl" >
                            <div className="mr-6">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.5 7.5H7.5C5.84315 7.5 4.5 8.84315 4.5 10.5V25.5C4.5 27.1569 5.84315 28.5 7.5 28.5H28.5C30.1569 28.5 31.5 27.1569 31.5 25.5V10.5C31.5 8.84315 30.1569 7.5 28.5 7.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.5 10.5L18 19.5L31.5 10.5" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className=""  >
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-[#EDEEFF]">Press</p>
                                <p className="mt-2 font-normal text-base leading-6 text-[#EDEEFF]">The whole line introduces advanced equipment such as automatic production and quality inspection from Italy and Germany. At present, there are 2 international websites and 3 domestic websites, and the annual sales volume is doubling.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Summery;
