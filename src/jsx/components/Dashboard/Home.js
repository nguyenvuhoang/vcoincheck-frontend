import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Project from "../vKnightHub/Home/slider/Project";
import ProjectList from "./project/ProjectList";

import banner from "../../../images/banner/main-banner.png";
import slogan from "../../../images/banner/slogan.png";
// images
import bit_1 from "../../../images/svg/bitcoin-1.svg";
import bit_2 from "../../../images/svg/ethereum-1.svg";
import bit_4 from "../../../images/svg/litecoin-1.svg";
import bit_3 from "../../../images/svg/ripple-1.svg";
// Slider

const Home = () => {
   return (
      <Fragment>
         <>
            <div className="row">
               <div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
                  <div className="card overflow-hidden">
                     <div className="card-header border-0 pb-0">
                        <div className="mr-auto">
                           <h2 className="text-black mb-2 font-w600">
                              65,123
                           </h2>
                           <p className="mb-1 fs-13">
                              <svg
                                 width={21}
                                 height={15}
                                 viewBox="0 0 21 15"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M1 13.5C1.91797 12.4157 4.89728 9.22772 6.5 7.5L12.5 10.5L19.5 1.5"
                                    stroke="#2BC155"
                                    strokeWidth={2}
                                 />
                                 <path d="M6.5 7.5C4.89728 9.22772 1.91797 12.4157 1 13.5H19.5V1.5L12.5 10.5L6.5 7.5Z" />
                                 <defs>
                                    <linearGradient
                                       x1="10.25"
                                       y1={3}
                                       x2={11}
                                       y2="13.5"
                                       gradientUnits="userSpaceOnUse"
                                    >
                                       <stop
                                          stopColor="#2BC155"
                                          offset={1}
                                          stopOpacity="0.73"
                                       />
                                       <stop
                                          offset={1}
                                          stopColor="#2BC155"
                                          stopOpacity={0}
                                       />
                                    </linearGradient>
                                 </defs>
                              </svg>
                              4%(30 days)
                           </p>
                        </div>
                        <img src={bit_1} alt="" />
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
                  <div className="card overflow-hidden">
                     <div className="card-header border-0 pb-0">
                        <div className="mr-auto">
                           <h2 className="text-black mb-2 font-w600">2,551</h2>
                           <p className="mb-1 fs-13">
                              <svg
                                 width={21}
                                 height={15}
                                 viewBox="0 0 21 15"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M1 13.5C1.91797 12.4157 4.89728 9.22772 6.5 7.5L12.5 10.5L19.5 1.5"
                                    stroke="#2BC155"
                                    strokeWidth={2}
                                 />
                                 <path d="M6.5 7.5C4.89728 9.22772 1.91797 12.4157 1 13.5H19.5V1.5L12.5 10.5L6.5 7.5Z" />
                                 <defs>
                                    <linearGradient
                                       x1="10.25"
                                       y1={3}
                                       x2={11}
                                       y2="13.5"
                                       gradientUnits="userSpaceOnUse"
                                    >
                                       <stop
                                          stopColor="#2BC155"
                                          offset={1}
                                          stopOpacity="0.73"
                                       />
                                       <stop
                                          offset={1}
                                          stopColor="#2BC155"
                                          stopOpacity={0}
                                       />
                                    </linearGradient>
                                 </defs>
                              </svg>
                              4%(30 days)
                           </p>
                        </div>
                        <img src={bit_2} alt="" />
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
                  <div className="card overflow-hidden">
                     <div className="card-header border-0 pb-0">
                        <div className="mr-auto">
                           <h2 className="text-black mb-2 font-w600">0,55</h2>
                           <p className="mb-1 fs-13">
                              <svg
                                 width={21}
                                 height={15}
                                 viewBox="0 0 21 15"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M1 13.5C1.91797 12.4157 4.89728 9.22772 6.5 7.5L12.5 10.5L19.5 1.5"
                                    stroke="#2BC155"
                                    strokeWidth={2}
                                 />
                                 <path d="M6.5 7.5C4.89728 9.22772 1.91797 12.4157 1 13.5H19.5V1.5L12.5 10.5L6.5 7.5Z" />
                                 <defs>
                                    <linearGradient
                                       x1="10.25"
                                       y1={3}
                                       x2={11}
                                       y2="13.5"
                                       gradientUnits="userSpaceOnUse"
                                    >
                                       <stop
                                          stopColor="#2BC155"
                                          offset={1}
                                          stopOpacity="0.73"
                                       />
                                       <stop
                                          offset={1}
                                          stopColor="#2BC155"
                                          stopOpacity={0}
                                       />
                                    </linearGradient>
                                 </defs>
                              </svg>
                              4%(30 days)
                           </p>
                        </div>
                        <img src={bit_3} alt="" />
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
                  <div className="card overflow-hidden">
                     <div className="card-header border-0 pb-0">
                        <div className="mr-auto">
                           <h2 className="text-black mb-2 font-w600">
                              65,123
                           </h2>
                           <p className="mb-1 fs-13">
                              <svg
                                 width={21}
                                 height={15}
                                 viewBox="0 0 21 15"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M1 13.5C1.91797 12.4157 4.89728 9.22772 6.5 7.5L12.5 10.5L19.5 1.5"
                                    stroke="#2BC155"
                                    strokeWidth={2}
                                 />
                                 <path d="M6.5 7.5C4.89728 9.22772 1.91797 12.4157 1 13.5H19.5V1.5L12.5 10.5L6.5 7.5Z" />
                                 <defs>
                                    <linearGradient
                                       x1="10.25"
                                       y1={3}
                                       x2={11}
                                       y2="13.5"
                                       gradientUnits="userSpaceOnUse"
                                    >
                                       <stop
                                          stopColor="#2BC155"
                                          offset={1}
                                          stopOpacity="0.73"
                                       />
                                       <stop
                                          offset={1}
                                          stopColor="#2BC155"
                                          stopOpacity={0}
                                       />
                                    </linearGradient>
                                 </defs>
                              </svg>
                              4%(30 days)
                           </p>
                        </div>
                        <img src={bit_4} alt="" />
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-xxl-12 col-lg-12">
                  <div className="card">
                     <img src={banner} alt="" className="img-fluid w-100" />
                  </div>
               </div>
               <div className="col-xl-6 col-xxl-12 col-lg-12">
                  <div className="card">
                     <img src={slogan} alt="" className="img-fluid w-100" />
                  </div>
               </div>
               <div className="col-xl-12 col-xxl-12 col-lg-12">
                  <div className="card">
                     <ProjectList title="HOT PROJECT"/>
                  </div>
               </div>
               
               <div className="col-xl-12 col-xxl-12">
                  <div className="card">
                     
                     <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                           <h4 className="fs-20 text-black mb-0">
                              New Project
                           </h4>
                           <Link to="/" className="btn btn-link">
                              View more
                           </Link>
                        </div>
                        <div className="testimonial-one owl-right-nav owl-carousel owl-loaded owl-drag">
                           <Project />
                        </div>
                     </div>
                     <div className="card-footer border-0 pt-0">
                        <div className="row align-items-center">
                           <div className="col-md-7">
                              <p className="mb-0 fs-14">
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit, sed do eiusmod tempor
                                 incididunt ut
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </>
      </Fragment>
   );
};

export default Home;
