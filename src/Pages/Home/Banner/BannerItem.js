import React from 'react';

const BannerItem = ({slide}) => {
    const {image,id,prev,next} = slide;
    return (
        <div id={`#slide${id}`} className="carousel-item relative w-full">
            <div className="carousel-img">
                <img src={image} alt="" className="w-full rounded-lg" />
                
            </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <h2 className="text-6xl ml-24 mb-72 font-bold text-white">
                All You Need <br/>
                To Know About <br/>
                the Bike
            </h2>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
           <p className="text-white font-semibold ml-24 mt-20 text-lg">The best rough and tough bike range in India includes <br/> Royal Enfield, Gixxer, Suzuki </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
           <button className="btn btn-primary mt-72 ml-24">Selected</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 mr-20 right-5 bottom-0 ">
          <a href={`#slide${prev}`} className="btn btn-circle">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    );
};

export default BannerItem;