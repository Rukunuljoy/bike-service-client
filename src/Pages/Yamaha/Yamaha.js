import React from 'react';
import { useQuery } from '@tanstack/react-query'
import YamahaCard from './YamahaCard';

const Yamaha = () => {

    const {data:yamaha = []} = useQuery({
        queryKey: ['yamahaBike'],
        queryFn:async() =>{
           const res= await fetch('http://localhost:5000/yamahaBike')
           const data = await res.json();
           return data;
        }
        })

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-10 mt-10'>
            {
                yamaha.map(ser=><YamahaCard
                key={ser._id}
                ser={ser}
                ></YamahaCard>)
            }
        </div>
    );
};

export default Yamaha;