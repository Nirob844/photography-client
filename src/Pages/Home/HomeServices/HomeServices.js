import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCart from '../../Services/ServiceCart';

const HomeServices = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services?limit=3&page=1')
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
            })
            .catch(() => {
            });
    }, []);

    console.log(services)
    return (
        <div className="">
            <div className='my-20 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services?.map(service => <ServiceCart
                        key={service._id}
                        service={service}
                    ></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default HomeServices;