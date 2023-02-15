import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCart = ({ service }) => {

    const { _id, url, price, title, description } = service;


    return (
        <div className="py-30 card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`../Services/${_id}`}>
                        <button className="btn btn-warning">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );

};

export default ServiceCart;