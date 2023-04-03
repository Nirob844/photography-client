import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyReviews = () => {

    const { user, logOut } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/add-review?email=${user?.email}`, {
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
            })
    }, [user?.email, logOut])
    return (
        <div>
            <p>review:{myReviews.length}</p>
        </div>
    );
};

export default MyReviews;