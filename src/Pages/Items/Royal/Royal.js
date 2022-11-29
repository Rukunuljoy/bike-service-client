import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingItems from '../Bookings/BookingItems';
import Items from '../Items/Items';

const Royal = () => {
    const [nameOfCar, setCarName] = useState(null);

    const { data: cars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: () => fetch('http://localhost:5000/royalBikes')
            .then(res => res.json())
    })
    return (
        <>
        <div>
            {
                cars.map(car => <Items
                    key={car._id}
                    car={car}
                    setCarName={setCarName}
                ></Items>)
            }
        </div>
        {
            nameOfCar &&
            <BookingItems
                nameOfCar={nameOfCar}
            ></BookingItems>
        }


    </>
    );
};

export default Royal;