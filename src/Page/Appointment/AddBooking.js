import React from 'react';
import { format } from 'date-fns';

const AddBooking = ({ booking, date, setBooking }) => {
    const { name, slots } = booking;
    const handleSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        setBooking(null)
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-center">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 justify-items-center my-4'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Enter Your Name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Enter Your Email" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Enter Your Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="Submit" value="Submit" class="btn btn-secondary text-white w-full max-w-xs" />
                    </form>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBooking;