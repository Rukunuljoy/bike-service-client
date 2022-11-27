import { data } from "autoprefixer";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import {AuthContext} from '../../Contexts/AuthProvider/AuthProvider' 

const BookingModal = () => {

  const {user}= useContext(AuthContext)
  // fetch("http://localhost:5000/royalEnfield", {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  // if(data.acknowledge){
        
    //     // toast.success("Booking confirmation successful");
  // }
  //   });

  // const handleBooking = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const name= form.name.value;
  //   const email = form.email.value;
  //   const item = form.item.value;
  //   const price = form.price.value;

  //   const booking ={
  //     name,
  //     email,
  //     itemName:item,
  //     price
  //   }
      
  //   // console.log(booking)
  // };

  return (
    <>
      <div>
        <input type="checkbox" id="Booking-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="Booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">Bikes</h3>
            <form  className="grid grid-cols-1 mt-10 gap-3">
              <input
                type="text"
                name="name"
                placeholder="User Name"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                readOnly
                placeholder="email Address"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                item="item"
                defaultValue={user?.item}
                readOnly
                placeholder="item name"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="price"
                defaultValue={user?.price}
                readOnly
                placeholder="Price"
                className="input input-bordered w-full"
              />
              <br />
              <input
                className="w-full mx-w-xsm mt-5 btn btn-primary"
                type="submit"
                value="submit"
              />
            </form>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;