import React from 'react';
import { useQuery } from '@tanstack/react-query'
import YamahaCard from './YamahaCard';

const Yamaha = () => {

    const {data:yamahas = []} = useQuery({
        queryKey: ['yamahas'],
        queryFn:async() =>{
           const res= await fetch('http://localhost:5000/yamahaBike')
           const data = await res.json();
           return data;
        }
        })

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 m-20'>
            {
                yamahas.map(yamaha=><YamahaCard
                    key={yamaha._id}
                    yamaha={yamaha}
                ></YamahaCard>)
            }
        </div>
    );
};

export default Yamaha;