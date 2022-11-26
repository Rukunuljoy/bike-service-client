import React from 'react';
import CardInfo from './CardInfo';

const InfoCards = () => {

    const cardData = [
        {
            id:1,
            name:'',
            description:'',
            icon:'parts',
        },
        {
            id:2,
            name:'',
            description:'',
            icon:'parts',
        },
         
        {
            id:3,
            name:'',
            description:'',
            icon:'parts',
        },
        {
            id:4,
            name:'',
            description:'',
            icon:'parts',
        },
        {
            id:5,
            name:'',
            description:'',
            icon:'parts',
        },
        {
            id:6,
            name:'',
            description:'',
            icon:'parts',
        },
         
      
       
    ]
    return (
        <div className='grid md:grid-cols-2 gap-7 mb-12 mt-12 text-center sm:grid-cols-1 lg:grid-cols-3'>
            {
                cardData.map(card=><CardInfo
                key={card.id}
                card={card}
                ></CardInfo>)
            }
        </div>
    );
};

export default InfoCards;