import React, { useEffect, useState } from 'react';
import Review from './Review';


const Reviews = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://photography-server-five.vercel.app/add-review')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    console.log(reviews);

    return (
        <div className=' w-3/4 mx-auto  '>
            <h1 className='text-center text-2xl font-semibold'>
                All review
            </h1>
            <div className='my-3 ml-12'>
                {
                    reviews.map(revw => <Review
                        key={reviews._id}
                        revw={revw}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;