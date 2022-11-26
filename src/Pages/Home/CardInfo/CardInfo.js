import React from "react";

const CardInfo = ({card}) => {
    const {name,icon,description} = card;
  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title items-center justify-center">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
              <button className="btn btn-sm btn-primary ">Add to Cart</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CardInfo;
