import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import project10 from "../../../../../images/project/10.png";
import project11 from "../../../../../images/project/11.png";
import project12 from "../../../../../images/project/12.png";
import project13 from "../../../../../images/project/13.png";
import project14 from "../../../../../images/project/14.png";
import project15 from "../../../../../images/project/15.png";

function SampleNextArrow(props) {
   const { onClick } = props;
   return (
      <div className="conteact-next c-pointer" onClick={onClick}>
         <i className="las la-long-arrow-alt-right" />
      </div>
   );
}

const Project = () => {
   const settings = {
      slidesToShow: 7,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      infinite: true,
      touchMove: true,
      className: "contacts-card",
      centerPadding: "60px",
      speed: 100,
      accessibility: false,
      nextArrow: <SampleNextArrow />,
      responsive: [
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 5,
               slidesToScroll: 1,
               centerPadding: 0,
               centerMode: false,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               centerPadding: 0,
               centerMode: false,
            },
         },
      ],
   };
   return (
      <Slider {...settings}>
         <div className="items ">
            <div>
               <img className="mb-3" src={project10} alt="" />
               <h5 className="text-black mb-0">Turing</h5>
               <span className="fs-12">TUR</span>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3" src={project11} alt="" />
               <h5 className="text-black mb-0">Talisman</h5>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3" src={project12} alt="" />
               <h5 className="text-black mb-0">Peaq</h5>
               <span className="fs-12">PEAQ</span>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3" src={project13} alt="" />
               <h5 className="text-black mb-0">Exiled</h5>
               <span className="fs-12">EXR</span>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3" src={project14} alt="" />
               <h5 className="text-black mb-0">Stella</h5>
               <span className="fs-12">STELLA</span>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3" src={project15} alt="" />
               <h5 className="text-black mb-0">Moon</h5>
               <span className="fs-12">GLMR</span>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3" src={project10} alt="" />
               <h5 className="text-black mb-0">Turing</h5>
               <span className="fs-12">@sam224</span>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3" src={project11} alt="" />
               <h5 className="text-black mb-0">Talisman</h5>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3" src={project12} alt="" />
               <h5 className="text-black mb-0">Peaq</h5>
               <span className="fs-12">PEAQ</span>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3" src={project13} alt="" />
               <h5 className="text-black mb-0">Exiled</h5>
               <span className="fs-12">EXR</span>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3" src={project14} alt="" />
               <h5 className="text-black mb-0">Stella</h5>
               <span className="fs-12">STELLA</span>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3" src={project15} alt="" />
               <h5 className="text-black mb-0">Moon</h5>
               <span className="fs-12">GLMR</span>
            </div>
         </div>
      </Slider>
   );
};

export default Project;
