import React from 'react';

const ListService = ({ service }) => {
    const { title } = service
    return (
        <div>
            service{service.length}
        </div>
    );
};

export default ListService;