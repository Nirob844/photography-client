import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/add-review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])


    return (
        <div className='m-3/4 text-center mx-auto'>
            {
                reviews.map(revw => <Review
                    key={reviews._id}
                    revw={revw}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;