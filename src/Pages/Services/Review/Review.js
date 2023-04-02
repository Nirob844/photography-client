import React from 'react';

const Review = ({ revw }) => {
    console.log(revw);
    const { _id, serviceId, serviceName, name, review } = revw
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Review;