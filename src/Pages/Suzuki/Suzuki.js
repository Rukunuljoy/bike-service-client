import React from 'react';
import { useQuery } from '@tanstack/react-query'
import SuzukiCard from './SuzukiCard';

const Suzuki = () => {

    const {data:services = []} = useQuery({
        queryKey: ['services'],
        queryFn:async() =>{
           const res= await fetch('http://localhost:5000/suzukiBike')
           const data = await res.json();
           return data;
        }
        
    })
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 m-20'>
            {
                services?.map(service=><SuzukiCard
                key={service._id}
                service={service}
                ></SuzukiCard>)
            }
        </div>
    );
};

export default Suzuki;