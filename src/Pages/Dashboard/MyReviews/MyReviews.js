import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import MyReview from './MyReview';
import { toast } from 'react-hot-toast';

const MyReviews = () => {

    const { user, logOut } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])
    useEffect(() => {
        fetch(`https://photography-server-five.vercel.app/user-review?email=${user?.email}`, {
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
                setMyReviews(data);
                //console.log(data);
            })
    }, [user?.email, logOut])

    const handleDelete = id => {
        console.log('count');
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if (proceed) {
            fetch(`https://photography-server-five.vercel.app/user-review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log("delete", data);
                    if (data.deletedCount > 0) {
                        toast.success('delete successful')
                        const remaining = myReviews.filter(review => review._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`https://photography-server-five.vercel.app/user-review/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Edit' })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = myReviews.filter(review => review._id !== id);
                    const edit = myReviews.find(review => review._id === id);
                    edit.status = 'Edit'

                    const newOrders = [edit, ...remaining];
                    setMyReviews(newOrders);
                }
            })
    }

    return (
        <div className='w-3/4 mx-auto'>
            <h2 className="w-3/4 m-3 p-5 text-5xl mx-auto ">You have {myReviews.length} Reviews</h2>
            <div className='my-3 ml-12'>
                {
                    myReviews.map(myReview => <MyReview
                        key={myReview._id}
                        myReview={myReview}
                        handleDelete={handleDelete}
                        handleStatusUpdate={handleStatusUpdate}
                    >
                    </MyReview>
                    )
                }
            </div>

        </div>
    );
};

export default MyReviews;