import React from 'react';

const Review = ({ revw }) => {
    console.log(revw);
    const { _id, serviceId, image, serviceName, name, review } = revw
    return (
        <div className='my-3 shadow-2xl p-3'>
            <div className='flex'>
                <img className='w-16 h-16 rounded-full' src={image} alt="" />
                <div className='ml-3'>
                    <h2 className='my-2'>{name}</h2>
                    <p>{serviceName}</p>
                </div>
            </div>
            <hr />
            <p>Review : {review}</p>

        </div>
    );
};

export default Review;