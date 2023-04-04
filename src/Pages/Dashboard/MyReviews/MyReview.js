import React from 'react';

const MyReview = ({ myReview }) => {
    const { image, serviceName, name, review } = myReview
    return (
        <div className='my-3 shadow-2xl p-3'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-16 h-16 rounded-full' src={image} alt="" />
                    <div className='ml-3'>
                        <h2 className='my-2'>{name}</h2>
                        <p>{serviceName}</p>
                    </div>
                </div>
                <div className=''>
                    <button className='btn btn-sm btn-outline btn-warning mr-3'>edit</button>
                    <button className='btn btn-sm btn-outline btn-error'>delete</button>
                </div>
            </div>
            <hr />
            <p>Review : {review}</p>

        </div>
    );
};

export default MyReview;