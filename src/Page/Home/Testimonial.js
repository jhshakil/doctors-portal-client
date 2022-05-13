import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            title: 'Fluoride Treatment',
            location: 'california',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: people1
        },
        {
            _id: 2,
            title: 'Cavity Filling',
            location: 'california',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: people2
        },
        {
            _id: 3,
            title: 'Teeth Whitening',
            location: 'california',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: people3
        }
    ]
    return (
        <div className='mb-8'>
            <div className='px-4'>
                <div class='hero'>
                    <div class="hero-content justify-between flex-row-reverse w-full">
                        <img src={quote} class="max-w-sm rounded-lg w-32 lg:w-48" alt='' />
                        <div className='px-4 w-full lg:w-1/2'>
                            <p className='text-secondary text-lg font-bold'>Testimonial</p>
                            <h1 class="text-3xl lg:text-5xl font-bold">What Our Patients Says</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    reviews.map(review =>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                                {/* <h2 class="card-title">Shoes!</h2> */}
                                <p>{review.description}</p>
                            </div>
                            <div class="card-body flex flex-row">
                                <div class="w-14 rounded-full">
                                    <img src={review.icon} alt='' />
                                </div>
                                <h2 class="card-title mx-4">Shoes!</h2>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Testimonial;