import React from 'react';

const ListService = ({ service, handleDelete }) => {
    const { _id, title, description, price, url } = service
    console.log(service);
    return (
        <div className='flex justify-between m-5 p-5 shadow-2xl'>
            <img className='w-10 h-10' src={url} alt="" />
            <h3>{title}</h3>
            <p>Price : {price}</p>
            <p>{description}</p>
            <button onClick={() => handleDelete(_id)} className='btn btn-sm btn-outline btn-error'>delete</button>
        </div>
    );
};

export default ListService;