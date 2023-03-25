import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const SignIn = () => {
    const [error, setError] = useState('');

    const { signIn, setLoading, providerLogin, } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || '/';


    const googleProvider = new GoogleAuthProvider()


    const handleGoogleSingIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })


    }


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                toast.success('sign in successful')
                form.reset();
                setError('');

                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }



    return (
        <div className='mx-auto flex justify-center my-10'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white text-black shadow-2xl">
                <h1 className="text-2xl font-bold text-center">Sign In</h1>
                <Form onSubmit={handleSubmit} novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label for="email" className="block text-black">Email</label>
                        <input type="email" name="email" id="username" placeholder="Enter your email" required className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block text-black">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" required className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400" />
                        <div className="flex justify-end text-xs text-black">
                            <Link rel="noopener noreferrer" to="#">Forgot Password?</Link>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-yellow-500">Sign in</button>
                </Form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    <p className="px-3 text-sm text-black">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleSingIn} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>


                </div>
                <p className="text-xs text-center sm:px-6 text-black">Don't have an account?
                    <Link rel="noopener noreferrer" to="/register" className="underline text-black">signup</Link>
                </p>
                <p className='text-red-600'>{error}</p>
            </div>
        </div>
    );

};

export default SignIn;