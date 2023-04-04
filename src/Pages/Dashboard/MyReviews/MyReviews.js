import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import MyReview from './MyReview';

const MyReviews = () => {

    const { user, logOut } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/user-review?email=${user?.email}`, {
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
                console.log(data);
            })
    }, [user?.email, logOut])
    return (
        <div className='w-3/4 mx-auto'>
            <h2 className="my-3 text-5xl text-center">You have {myReviews.length} Reviews</h2>
            <div className='my-3 ml-12'>
                {
                    myReviews.map(myReview => <MyReview
                        key={myReview._id}
                        myReview={myReview}
                    // handleDelete={handleDelete}
                    // handleStatusUpdate={handleStatusUpdate}
                    >
                    </MyReview>
                    )
                }
            </div>

        </div>
    );
};

export default MyReviews;