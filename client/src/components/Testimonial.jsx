import React from "react";
import Slider from "react-slick";
import badge from "../assets/images/Badge.png";

const Testimonial = () => {
  return (
      <Slider {...settings}>
    <div className="py-16 lg:py-48">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-pastel p-12 max-w-4xl mx-auto rounded-lg flex flex-col md:flex-row">
          <img
            className="h-32 w-32 rounded-full"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQUg4Xk19rc-zuZjC-hHjCu0hdGZP0y4loqYDTn4xrWsKXYEB2B"
            alt="Segun"
          />
          <div className="md:ml-8 ">
            <h1 className="font-semibold text-2xl mt-2">Dr. Lisa</h1>
            <h4 className="text-sm text-slate-500">Head Surgeon, SUM Hospital</h4>
            <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odio unde nemo, libero debitis ab fugiat non, accusantium cupiditate consectetur numquam, asperiores natus sunt. Iusto nam quam neque dolor ullam.           
            </p>
          </div>
          <img
            className="absolute -top-6 right-8 h-12 w-12"
            src={badge}
            alt="quote"
          />
        </div>
      </div>
    </div>
</Slider>
  );
};

const settings = {
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default Testimonial;
