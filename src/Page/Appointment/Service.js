import React from 'react';

const Service = ({ service, setBooking }) => {
    const { name, slots, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>No Slots Available</span>}</p>
                <p>{slots.length} Slots Available</p>
                <p>Price: ${price}</p>
                <div className="card-actions">
                    {/* <button disabled={slots.length == 0} className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Book Appointment</button> */}
                    <label onClick={() => setBooking(service)} disabled={slots.length == 0} for="my-modal-6" className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;