import React from 'react';
import { Link } from 'react-router-dom';

const SuzukiCard = ({service}) => {
    const {_id,img,title,price,description} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>{price}</p>
          <div className="card-actions">
            <Link to={`/suzukiBike/${_id}`}><button className="btn btn-primary">See Detail</button></Link>
          </div>
        </div>
      </div>
    );
};

export default SuzukiCard;