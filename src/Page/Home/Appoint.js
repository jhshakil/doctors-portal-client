import React from 'react';
import doctors from '../../assets/images/doctor-small.png';
import appoinment from '../../assets/images/appointment.png';

const Appoint = () => {
    return (
        <div className="hero min-h-screen mt-16">
            <div style={{
                background: `url(${appoinment})`
            }} className="hero-content flex-col lg:flex-row p-0">
                <img className='hidden lg:block' src={doctors} className="max-w-lg w-full lg:w-1/2 mt-[-100px]" />
                <div className='px-12 w-full lg:w-1/2 text-white'>
                    <h1 className="text-lg font-bold my-4 text-primary">Appoinment</h1>
                    <h1 className="text-3xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary mb-4">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Appoint;