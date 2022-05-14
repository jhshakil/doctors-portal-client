import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AddBooking from './AddBooking';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [booking, setBooking] = useState({})
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-8'>
            <div>
                <p className='text-center font-bold text-secondary'>Available Appointment Date : {format(date, 'PP')}</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-8'>
                {
                    services.map(service => <Service key={service._id} service={service} setBooking={setBooking}></Service>)
                }
            </div>
            {booking && <AddBooking booking={booking} setBooking={setBooking} date={date}></AddBooking>}
        </div>
    );
};

export default AvailableAppointment;