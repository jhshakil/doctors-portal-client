import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ date }) => {
    return (
        <div>
            <p className='text-center font-bold text-secondary'>Available Appointment Date : {format(date, 'PP')}</p>
        </div>
    );
};

export default AvailableAppointment;