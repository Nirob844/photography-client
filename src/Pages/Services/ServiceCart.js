import React from 'react';
import { Link } from 'react-router-dom';


const ServiceCart = ({ service }) => {

    const { _id, url, price, title, description } = service;


    return (
        <div className="w-4/5 mx-auto py-30 card card-compact  bg-base-100 shadow-xl">
            <figure><img src={url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='bg-orange-500 text-white p-1.5 rounded-full absolute top-1 right-1'>Price: ${price}</p>
                <p>{description.slice(0, 100) + "..."}</p>
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