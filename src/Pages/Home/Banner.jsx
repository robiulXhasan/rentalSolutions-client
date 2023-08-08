import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpeg'
import banner3 from '../../assets/images/banner3.jpg'
import banner4 from '../../assets/images/banner4.jpg'

const Banner = () => {
    const bannerContent= <>  <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    <div className="absolute inset-0  flex flex-col justify-center items-center w-2/3 md:w-1/2 mx-auto">
    </div></>
  return (
    <Carousel className="text-center" showStatus={0} showThumbs={false} autoPlay={true} infiniteLoop={true}>
      <div
        className="relative bg-cover bg-center h-72 md:h-[60vh]"
        style={{
          backgroundImage: `url(
           ${banner1}
          )`,
        }}
      >
        {bannerContent}
       
      </div>
      <div
        className="relative bg-cover bg-center h-72 md:h-[60vh]"
        style={{
          backgroundImage: `url(${banner2})`,
        }}
      >
       {bannerContent}
      </div>
      <div
        className="relative bg-cover bg-center h-72 md:h-[60vh]"
        style={{
            backgroundImage: `url(${banner3})`,
        }}
      >
         {bannerContent}
      </div>

      <div
        className="relative bg-cover bg-center h-72 md:h-[60vh]"
        style={{
            backgroundImage: `url(${banner4})`,
        }}
      >
        {bannerContent}
      </div>
      <div
        className="relative bg-cover bg-center h-72 md:h-[60vh]"
        style={{
          backgroundImage: `url(
            "https://img.freepik.com/free-vector/realistic-soccer-league-final-illustration_52683-60374.jpg?w=1060&t=st=1686151973~exp=1686152573~hmac=73c691360ff17d060e9c51f6537bb6cfe6d86ff3e0c0016db3ab2e2864085fbe"
          )`,
        }}
      >
        {bannerContent}
      </div>
    </Carousel>
  );
};

export default Banner;
