import React from 'react';

const InfoCard = ({ info }) => {
    const { title, description, icon, bgcolour } = info;
    return (
        <div className={`${bgcolour} p-8 rounded-lg flex items-center`}>
            <div className='w-1/4'>
                <img src={icon} alt="" />
            </div>
            <div className='mx-8'>
                <h3 className='text-xl font-bold mb-2'>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;