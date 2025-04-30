import React from "react";
import Slider from "react-slick";

function Responsive() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay:true,
    autoplaySpeed: 3000,
    centerPadding: "5px",
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300, 
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <div className="slider-container">
      <Slider className="padding-slide" {...settings}>
        <div className="padding-slider">
        <div className="back-div-class">
         <img src="/assets/images/slide1.png" alt="" className="img-radius img-fluidd"/>
         <p className="class-tanya">Tanya, 28</p>
         <p className="lost-class">Lost 40 pounds
         in 4 months</p>
         <div className="class-ease-flex">
         <img src="/assets/images/ticky.svg" alt="" className="tick-img"/>
         <p className="class-easee">EaseMD customer</p>
         </div>
        </div>
        </div>
        <div className="padding-slider">
        <div className="back-div-class">
         <img src="/assets/images/slide2.png" alt="" className="img-radius img-fluidd"/>
         <p className="class-tanya">Kim, 32</p>
         <p className="lost-class">Lost 35 pounds
         in 3 months</p>
         <div className="class-ease-flex">
         <img src="/assets/images/ticky.svg" alt="" className="tick-img"/>
         <p className="class-easee">EaseMD customer</p>
         </div>
        </div>
        </div>
        <div className="padding-slider">
        <div className="back-div-class">
         <img src="/assets/images/slide3.png" alt="" className="img-radius img-fluidd"/>
         <p className="class-tanya">Daisy, 30</p>
         <p className="lost-class">Lost 25 pounds
         in 3 months</p>
         <div className="class-ease-flex">
         <img src="/assets/images/ticky.svg" alt="" className="tick-img"/>
         <p className="class-easee">EaseMD customer</p>
         </div>
        </div>
        </div>
        <div className="padding-slider">
        <div className="back-div-class">
         <img src="/assets/images/slide4.png" alt="" className="img-radius img-fluidd"/>
         <p className="class-tanya">Kathy, 33</p>
         <p className="lost-class">Lost 27 pounds
         in 2 months</p>
         <div className="class-ease-flex">
         <img src="/assets/images/ticky.svg" alt="" className="tick-img"/>
         <p className="class-easee">EaseMD customer</p>
         </div>
        </div>
        </div>
        <div className="padding-slider">
        <div className="back-div-class">
         <img src="/assets/images/slide5.png" alt="" className="img-radius img-fluidd"/>
         <p className="class-tanya">Lily, 38</p>
         <p className="lost-class">Lost 43 pounds
         in 4 months</p>
         <div className="class-ease-flex">
         <img src="/assets/images/ticky.svg" alt="" className="tick-img"/>
         <p className="class-easee">EaseMD customer</p>
         </div>
        </div>
        </div>
        <div className="padding-slider">
        <div className="back-div-class">
         <img src="/assets/images/slide1.png" alt="" className="img-radius img-fluidd"/>
         <p className="class-tanya">Mia, 37</p>
         <p className="lost-class">Lost 35 pounds
         in 3 months</p>
         <div className="class-ease-flex">
         <img src="/assets/images/ticky.svg" alt="" className="tick-img"/>
         <p className="class-easee">EaseMD customer</p>
         </div>
        </div>
        </div>
        <div className="padding-slider">
        <div className="back-div-class">
         <img src="/assets/images/slide2.png" alt="" className="img-radius img-fluidd"/>
         <p className="class-tanya">Suzie, 28</p>
         <p className="lost-class">Lost 40 pounds
         in 4 months</p>
         <div className="class-ease-flex">
         <img src="/assets/images/ticky.svg" alt="" className="tick-img"/>
         <p className="class-easee">EaseMD customer</p>
         </div>
        </div>
        </div>
        <div className="padding-slider">
        <div className="back-div-class">
         <img src="/assets/images/slide3.png" alt="" className="img-radius img-fluidd"/>
         <p className="class-tanya">Tanya, 28</p>
         <p className="lost-class">Lost 40 pounds
         in 4 months</p>
         <div className="class-ease-flex">
         <img src="/assets/images/ticky.svg" alt="" className="tick-img"/>
         <p className="class-easee">EaseMD customer</p>
         </div>
        </div>
        </div>
        <div className="padding-slider">
        <div className="back-div-class">
         <img src="/assets/images/slide4.png" alt="" className="img-radius img-fluidd"/>
         <p className="class-tanya">Tanya, 28</p>
         <p className="lost-class">Lost 40 pounds
         in 4 months</p>
         <div className="class-ease-flex">
         <img src="/assets/images/ticky.svg" alt="" className="tick-img"/>
         <p className="class-easee">EaseMD customer</p>
         </div>
        </div>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
