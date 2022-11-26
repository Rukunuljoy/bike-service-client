import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import YamahaCard from './YamahaCard';

const Yamaha = () => {
    const [yamaha, setYamaha] = useLoaderData([]);

    useEffect(()=>{
        fetch('')
        .then(res=>res.json())
        .then(data=>setYamaha(data))
    },[])

    return (
        <div>
            {
                yamaha.map(ser=><YamahaCard
                key={ser.id}
                ser={ser}
                ></YamahaCard>)
            }
        </div>
    );
};

export default Yamaha;