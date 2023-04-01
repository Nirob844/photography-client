import { Link, useLocation } from 'react-router-dom';


const UserRequired = () => {

    const location = useLocation();

    return (
        <div className='flex flex-col w-4/5 mx-auto my-5 p-8 rounded-xl bg-base-100 shadow-xl text-center'>
            <h2 className='text-3xl'>
                Your opinion matters!
            </h2>
            <p>
                Kindly login or register to leave your feedback!
                <>
                    <Link
                        state={{ from: location }}
                        replace
                        to='/login'><br />
                        <button className='btn btn-warning my-2'>Sign In</button>
                    </Link>
                    <Link
                        state={{ from: location }}
                        replace
                        to='/register'><br />
                        <button className='btn btn-warning my-2'>Sign Up</button>
                    </Link>
                </>
            </p>
        </div>
    );
};

export default UserRequired;