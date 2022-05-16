import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import AddBooking from './AddBooking';
import Service from './Service';
import Loading from '../Shared/Loading/Loading';

const AvailableAppointment = ({ date }) => {
    const [booking, setBooking] = useState({})
    const bookingDate = format(date, 'PP')
    const { data: services, isLoading, refetch } = useQuery(['available', bookingDate], () => fetch(`http://localhost:5000/available?date=${bookingDate}`)
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-8'>
            <div>
                <p className='text-center font-bold text-secondary'>Available Appointment Date : {format(date, 'PP')}</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-8'>
                {
                    services?.map(service => <Service key={service._id} service={service} setBooking={setBooking}></Service>)
                }
            </div>
            {booking && <AddBooking
                booking={booking}
                setBooking={setBooking}
                date={date}
                refetch={refetch}
            ></AddBooking>}
        </div>
    );
};

export default AvailableAppointment;