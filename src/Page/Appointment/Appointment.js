import React, { useState } from 'react';

import AppointmentBanners from './AppointmentBanners';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanners date={date} setDate={setDate}></AppointmentBanners>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;