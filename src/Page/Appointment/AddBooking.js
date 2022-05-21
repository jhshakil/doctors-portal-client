import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddBooking = ({ booking, date, setBooking, refetch }) => {
    const [user] = useAuthState(auth);
    const { _id, name, slots, price } = booking;
    const bookingDate = format(date, 'PP')
    const handleSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;


        const bookingInfo = {
            treatmentId: _id,
            treatment: name,
            date: bookingDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Your Appointment is set ${bookingDate} at ${slot}`)
                } else {
                    toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch()
                setBooking(null);
            })


    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 justify-items-center my-4'>
                        <input type="text" readOnly value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots?.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' readOnly value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' readOnly value={user.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Enter Your Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="Submit" value="Submit" className="btn btn-secondary text-white w-full max-w-xs" />
                    </form>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBooking;