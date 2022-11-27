import React from 'react';
import { useQuery } from '@tanstack/react-query'
import SuzukiCard from './SuzukiCard';

const Suzuki = () => {

    const {data:suzuki = []} = useQuery({
        queryKey: ['suzukiBike'],
        queryFn:async() =>{
           const res= await fetch('http://localhost:5000/suzukiBike')
           const data = await res.json();
           return data;
        }
        
    })
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-10 mt-10'>
            {
                suzuki.map(service=><SuzukiCard
                key={service._id}
                service={service}
                ></SuzukiCard>)
            }
        </div>
    );
};

export default Suzuki;