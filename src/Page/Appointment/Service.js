import React from 'react';

const Service = ({ service, setBooking }) => {
    const { name, slots } = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>No Slots Available</span>}</p>
                <p>{slots.length} Slots Available</p>
                <div class="card-actions">
                    {/* <button disabled={slots.length == 0} class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Book Appointment</button> */}
                    <label onClick={() => setBooking(service)} disabled={slots.length == 0} for="my-modal-6" class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;