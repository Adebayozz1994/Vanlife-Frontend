import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { FaEnvelope, FaLock } from 'react-icons/fa'; // Import icons

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const signup = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setMessage('Please fill in all fields');
            setTimeout(() => setMessage(''), 3000);
            return;
        }

        const isExistingEmail = false;
        if (isExistingEmail) {
            setMessage('Email already in use');
            setTimeout(() => setMessage(''), 3000);
            return;
        }

        setMessage('Signup successful');
        setTimeout(() => {
            setMessage('');
            navigate("/home");
        }, 3000);
    };

    return (
        <div className='min-h-screen bg-[#faf0e2]  flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <h2 className='text-center text-3xl font-extrabold text-gray-900'>Sign in to your account</h2>
            </div>

            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-[#FFF7ED] py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                    <form className='space-y-6' onSubmit={signup}>
                        {message && (
                            <div className={`text-center mt-4  text-xl ${message === 'Signup successful' ? 'text-green-500' : 'text-red-500'}`}>
                                {message}
                            </div>
                        )}
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                                Email address
                            </label>
                            <div className='mt-1 relative rounded-md shadow-sm'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    {/* <FaEnvelope className='text-gray-400' /> */}
                                </div>
                                <input
                                    type='text'
                                    id='email'
                                    autoComplete='email'
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='appearance-none block w-full px-3 py-2 pl-10 border border-orange-300 rounded-md placeholder-orange-400 focus:outline-none focus:ring-orange-200 focus:border-orange-500 sm:text-sm'
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                                Password
                            </label>
                            <div className='mt-1 relative rounded-md shadow-sm'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    {/* <FaLock className='text-gray-400' /> */}
                                </div>
                                <input
                                    type='password'
                                    id='password'
                                    autoComplete='current-password'
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='appearance-none block w-full px-3 py-2 pl-10 border border-orange-300 rounded-md placeholder-orange-400 focus:outline-none focus:ring-orange-200 focus:border-orange-500 sm:text-sm'
                                />
                            </div>
                        </div>

                        <div className='flex items-center justify-between'>
                            <div className='text-sm'>
                                <Link to='/' className='font-medium text-orange-600 hover:text-orange-400'>
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
                            >
                                Sign in
                            </button>
                        </div>
                        <div>
                            <p className=' font-semibold'>Don’t have an account?
                                <span className='text-[#FF8C38] ml-1'><Link to="/signup">Create one now</Link></span>
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
