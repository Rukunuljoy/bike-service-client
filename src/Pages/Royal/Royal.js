import React from 'react';
import RoyalCard from './RoyalCard';
import { useQuery } from '@tanstack/react-query'
import BookingModal from '../RoyalDetail/BookingModal';

const Royal = () => {

 const {data:royals = []} = useQuery({
        queryKey: ['royalBikes'],
        queryFn:async() =>{
           const res= await fetch('http://localhost:5000/royalBikes')
           const data = await res.json();
           return data;
        }
        
    })

    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 m-20'>
                {
                    royals.map(data=><RoyalCard
                    key={data.id}
                    data={data}
                    ></RoyalCard>)
                }
            </div>
            
        </div>
    );
};

export default Royal;