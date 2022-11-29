import React from 'react';
import { Link } from 'react-router-dom';
import BookingModal from '../RoyalDetail/BookingModal';

const RoyalCard = ({royal}) => {
    const {_id,img,title,resalePrice,sellerName,originalPrice,users,dates,description} = royal;
    return (
        <div className="card w-96 text-black bg-indigo-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body font-semibold items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{description.length > 100 ?
                            <p>{description.slice(0, 100) + '...'}<strong>Read More</strong></p>
                            :
                            <>
                                {description}
                            </>
                        }</p>
    <p>Seller-Name: {sellerName}</p>
    <p>ResalePrice: {resalePrice}</p>
    <p>originalPrice: {originalPrice}</p>
    <p>Years-of-use: {users}</p>
    <p>Post-date:{dates}</p>
    <div className="card-actions">
      <Link to={`/royalDetails/${_id}`}><button className="btn btn-primary">See Detail</button></Link>
      <label htmlFor="Booking-modal" className="btn btn-primary">Book Now</label>
    </div>
  </div>
  <BookingModal
       
      ></BookingModal>
</div>
    );
};

export default RoyalCard;