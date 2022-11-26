import React from "react";
import img1 from '../../../assert/banner/banner1.webp'
import img2 from '../../../assert/banner/banner2.jpg'
import img3 from '../../../assert/banner/ban3.jpg'
import './Banner.css'
import BannerItem from "./BannerItem";

const Banner = () => {

    const bannerItem = [
        {
            image:img1,
            prev:3,
            id:1,
            next:2
        },
        {
            image:img2,
            prev:1,
            id:2,
            next:3
        },
        {
            image:img3,
            prev:2,
            id:3,
            next:1
        }
    ]

  return (
    <div className="carousel mb-12 mt-12 w-full">
      {
        bannerItem.map(slide=><BannerItem
        key={slide.id}
        slide={slide}
        ></BannerItem>)
      }
    </div>
  );
};

export default Banner;
