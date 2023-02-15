import { useLoaderData } from 'react-router-dom';
import ServiceCart from './ServiceCart';

const Services = () => {


    const services = useLoaderData();
    //console.log(services)
    return (
        <div className='my-20 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map(service => <ServiceCart
                    key={service._id}
                    service={service}
                ></ServiceCart>)
            }
        </div>
    );
};

export default Services;