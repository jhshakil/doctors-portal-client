import React from 'react';
import chair from '../../assets/images/chair.png';
import bgimage from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanners = ({ date, setDate }) => {
    return (
        <div className='px-4'>
            <div style={{
                background: `url(${bgimage})`
            }} class='hero min-h-screen'>
                <div class="hero-content flex-col lg:flex-row-reverse w-full">
                    <img src={chair} class="max-w-lg rounded-lg shadow-2xl w-full lg:w-1/2" alt='' />
                    <div className='px-4 w-full lg:w-1/2'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanners;