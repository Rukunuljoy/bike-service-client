import React, { useEffect, useState } from 'react';
import RoyalCard from './RoyalCard';

const Royal = () => {
    const [royals,setRoyals] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/royalBikes')
        .then(res=>res.json())
        .then(data=>setRoyals(data))
    },[])
    return (
        <div>
            <div>
                <h2>this is Royal</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-10 mt-10'>
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