import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import AddReview from './Review/AddReview';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import UserRequired from './Review/UserRequired';


const ServicesDetails = () => {
    const servicesDetails = useLoaderData();
    const { user } = useContext(AuthContext)
    const { _id, url, price, title, description } = servicesDetails;

    return (
        <div>
            <div className=''>
                <div className="mt-5 h-96 w-full carousel carousel-vertical rounded-box">
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
                <div>
                    {user ? (
                        <AddReview serviceId={_id} serviceName={title} />
                    ) : (
                        <UserRequired />
                    )}
                </div>
            </div>

        </div>
    );
};

export default ServicesDetails;