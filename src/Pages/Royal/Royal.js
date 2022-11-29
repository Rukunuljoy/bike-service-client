import React from 'react';
import RoyalCard from './RoyalCard';
import { useQuery } from '@tanstack/react-query'

const Royal = () => {

 const {data:royals = []} = useQuery({
        queryKey: ['royals'],
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
                    royals?.map(royal=><RoyalCard
                    key={royal._id}
                    royal={royal}
                    ></RoyalCard>)
                }
            </div>
            
        </div>
    );
};

export default Royal;