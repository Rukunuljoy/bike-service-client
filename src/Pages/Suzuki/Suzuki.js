import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import SuzukiCard from './SuzukiCard';

const Suzuki = () => {
    const [suzuki, setSuzuki] = useLoaderData([]);

    useEffect(()=>{
        fetch('http://localhost:5000/suzukiBike')
        .then(res=>res.json())
        .then(data=>setSuzuki(data))
    },[])
    return (
        <div>
            {
                suzuki.map(service=><SuzukiCard
                key={service.id}
                data={service}
                ></SuzukiCard>)
            }
        </div>
    );
};

export default Suzuki;