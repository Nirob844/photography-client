import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const servicesDetails = useLoaderData();
    console.log(servicesDetails)
    const { _id, url, price, title, description } = servicesDetails;

    return (
        <div className=''>
            <div className="h-96 w-full carousel carousel-vertical rounded-box">
                <div className="carousel-item h-full">
                    <img className='w-full' src={url} alt="Shoes" />
                </div>

            </div>
            <div className='my-10 w-3/4 mx-auto p-5 shadow-2xl'>
                <div className='flex justify-between mb-5'>

                    <h1 className='text-2xl font-bold'>Services</h1>
                    <p>price${price}</p>

                </div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServicesDetails;