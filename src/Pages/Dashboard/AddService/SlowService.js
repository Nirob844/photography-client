import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import ListService from './ListService';

const SlowService = () => {

    const { user, logOut } = useContext(AuthContext);
    const [slowService, setSlowService] = useState([]);

    useEffect(() => {
        fetch(`https://photography-server-five.vercel.app/user-service?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('user-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setSlowService(data);
                //console.log(data);
            })
    }, [user?.email, logOut])

    const handleDelete = id => {
        console.log('count');
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if (proceed) {
            fetch(`https://photography-server-five.vercel.app/user-service/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log("delete", data);
                    if (data.deletedCount > 0) {
                        toast.success('delete successful')
                        const remaining = slowService.filter(service => service._id !== id);
                        setSlowService(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <Link to='/add-services'><button className='btn m-10 flex justify-center mx-auto'>add new service</button></Link>

            <div className='my-3 ml-12'>
                {
                    slowService.map(service => <ListService
                        key={service._id}
                        service={service}
                        handleDelete={handleDelete}
                    >
                    </ListService>
                    )
                }
            </div>
        </div>
    );
};

export default SlowService;