import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/blog">blog</Link></li>
        <li><Link to="/about">About</Link></li>
        {user?.uid ?
            <>
                <li className='lg:hidden'><button onClick={handleLogOut}>Sign out</button></li>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="">
                        <img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" />
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 w-32">
                        <li><Link to="/slow-services">My service</Link></li>
                        <li><Link to="/my-reviews">My review</Link></li>
                        <li><button onClick={handleLogOut}>Sign out</button></li>
                    </ul>
                </div>
            </>
            :
            <>
                <li><Link to="/add-services">My service</Link></li>
                <li><Link to="/my-reviews">My review</Link></li>
                <li><Link to="/login">Sign in</Link></li>
                <li><Link to="/register">sign up</Link></li>
            </>
        }
    </React.Fragment>

    return (
        <div>
            <header className="p-4 bg-white shadow-2xl text-black">
                <div className="container flex justify-between h-16 mx-auto">
                    <div className="navbar bg-base-100 flex justify-between">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    {menuItems}
                                </ul>
                            </div>
                            <Link to="/" className="btn btn-ghost normal-case text-xl">Nirob's Photography</Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal p-0">
                                {menuItems}
                            </ul>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;