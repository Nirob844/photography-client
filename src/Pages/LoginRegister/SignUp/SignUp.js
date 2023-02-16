import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photoURL = form.photoURL.value;
        console.log(email, password, confirm, name, photoURL)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                //  console.log(user);
                toast.success('sign up successful')
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });

        const handleUpdateUserProfile = (name, photoURL) => {
            const profile = {
                displayName: name,
                photoURL: photoURL
            }
            updateUserProfile(profile)
                .then(() => { })
                .catch(error => console.error(error));
        }

        if (password.length < 6) {
            setError('password must be 6 character');
            return;
        }
        if (password !== confirm) {
            setError('your password did not match');
            return;
        }
    }

    return (
        <div>
            <div className='mx-auto flex justify-center my-10'>
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white text-black shadow-2xl">
                    <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                    <Form onSubmit={handleSubmit} novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-1 text-sm">
                            <label for="User name" className="block text-black">User Name</label>
                            <input type="text" name="username" id="username" placeholder="Enter your name" required className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-100 text-black focus:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label for="photoURL" className="block text-black">Photo URL</label>
                            <input type="text" name="photoURL" id="username" placeholder="Enter your photoURL" required className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-100 text-black focus:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label for="email" className="block text-black">Email</label>
                            <input type="email" name="email" id="username" placeholder="Enter your email" required className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-100 text-black focus:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label for="password" className="block text-black">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" required className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-100 text-black focus:border-violet-400" />

                        </div>
                        <div className="space-y-1 text-sm">
                            <label for="email" className="block text-black">Confirm Password</label>
                            <input type="password" name="confirm" id="username" placeholder="Confirm Password" required className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-100 text-black focus:border-violet-400" />

                        </div>
                        <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-yellow-400">Sign Up</button>
                    </Form>

                    <p className="text-xs text-center sm:px-6 text-black"> have an account?
                        <Link rel="noopener noreferrer" to="/login" className="underline text-black">Sign in</Link>
                    </p>
                    <p className='text-red-500'>{error}</p>
                </div>
            </div>
        </div>
    );

};

export default SignUp;