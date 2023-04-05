import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const AddServices = () => {

    const { user } = useContext(AuthContext)

    const handleAddService = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const price = Number(e.target.price.value);
        const description = e.target.description.value;
        const email = e.target.email.value;
        const url = e.target.url.value;

        const newData = {
            title,
            price,
            description,
            email,
            url,
            rating: 0,
        };

        fetch('http://localhost:5000/add-service', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success(' successfully')
                    e.target.reset();
                }
            })
            .catch(er => console.error(er.message));

    };

    return (
        <div>
            <form
                onSubmit={handleAddService}
                className='w-4/5 m-10 shadow-2xl p-10'>
                <h2 className="text-4xl m-10"> Add new services </h2>
                <div className=''>
                    <div className='flex'>
                        <input name="title" type="text" placeholder="Service Name" className="input input-ghost w-full  my-5 input-bordered" required />
                        <input name="price" type="text" placeholder="price" className="input input-ghost w-3/4 ml-5 my-5 input-bordered" required />
                    </div>
                    <input name="url" type="text" placeholder="Service Thumbnail" className="input input-ghost w-full  my-5 input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost  my-5 w-full  input-bordered" readOnly />
                </div>
                <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="Service Details" required></textarea>

                <input className='btn btn-warning my-5' type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddServices;