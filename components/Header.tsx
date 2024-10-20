"use client";
import dynamic from "next/dynamic";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

import Image from "next/image";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="container mx-auto max-w-7xl py-10 px-6 flex-grow">
      <div className="grid grid-cols-1 mdh:grid-cols-2 gap-4">
        {/* Left Side */}
        <div>
          <div>
            <h1 className="text-[55px] md:text-[68px] font-[800] text-left">
              Moving data.
            </h1>
            <h1 className="text-[55px] md:text-[68px] font-[800] text-left">
              Powering
            </h1>
            <h1 className="text-[55px] md:text-[68px] font-[800] text-left text-[#306BEA]">
              innovation.
            </h1>
            <br />
          </div>
          <p className="text-[#222222] text-[16px] roboto-flex-regular">
            From start-ups to global enterprises, the Fivetran data movement
            <br />
            platform unlocks innovation by accelerating insights, optimizing
            <br />
            operations and powering data-driven decisions.
          </p>
        </div>

        {/* Right Side */}
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <Image src="/1.png" alt="Image 1" width={700} height={500} />
            </div>
            <div>
              <Image src="/2.png" alt="Image 2" width={700} height={500} />
            </div>
            <div>
              <Image src="/3.png" alt="Image 3" width={700} height={500} />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Header;
