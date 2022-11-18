import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Axios from 'axios'
import { Store } from '../../Store'
import { toast } from 'react-toastify'

const SignUpPage = () => {
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Confirmpassword, setConfirmPassword] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== Confirmpassword) {
            toast.error('Passwords do not match');
            return;
        }
        try {
            const { data } = await Axios.post('/api/users/signup', {
                name,
                email,
                password,
                phonenumber
            });
            ctxDispatch({ type: 'USER_SIGNIN', payload: data });
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate(redirect || '/');
        } catch (err) {
            toast.error('invalid email and password');
        }
    };

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);



    return (
        <div className='min-h-full flex items-center justify-center sm:px-6 lg:px-8'>
            <div className='max-w-md w-full space-y-8'>
                <Helmet>
                    <title>Amazona Registration</title>
                </Helmet>

                <div className='-mt-4'>
                    <div className='flex justify-center'>
                        <Link to="/"><img alt="" className="h-32 w-40 cursor-pointer" src="/img/logo2.png" /></Link>
                    </div>
                    <div className='border-2 border-gray p-4 -mt-8'>
                        <h3 className='text-center text-3xl font-extrabold text-gray-900'>Create Account</h3>
                        <form onSubmit={submitHandler} className='mt-8 space-y-6'>
                            <div className='space-y-5'>
                                <div className='my-5'>
                                    <label htmlFor="name" className='mb-1 font-semibold'>Name</label>
                                    <input type="text" placeholder='Enter Your Name' id='name' name='name' required autoComplete='name' className='fixedInputClass' onChange={(e) => setName(e.target.value)} /><br></br>
                                    <label htmlFor="email-address" className='mb-1 font-semibold'>Email</label>
                                    <input type="email" placeholder='Enter Your Email' id='email-address' name='email' required autoComplete='email' className='fixedInputClass' onChange={(e) => setEmail(e.target.value)} /><br></br>
                                    <label htmlFor="password" className='mb-1 font-semibold'>Password </label>
                                    <input type="password" placeholder='Password' id='password' name='password' required autoComplete='current-password' className='fixedInputClass' onChange={(e) => setPassword(e.target.value)} /><br />
                                    <label htmlFor="confirmpassword" className='mb-1 font-semibold'>Confirm Password </label>
                                    <input type="password" placeholder='Confirm Password' id='confirmpassword' name='confirmpassword' required autoComplete='current-password' className='fixedInputClass' onChange={(e) => setConfirmPassword(e.target.value)} /><br />
                                    <label htmlFor="phonenumber" className='mb-1 font-semibold'>Mobile Number</label>
                                    <input type="tel" placeholder='Mobile Number' id='phonenumber' pattern='[0-9]{5}-[0-9]{5}' name='phonenumber' required className='fixedInputClass' onChange={(e) => setPhoneNumber(e.target.value)} /><br />
                                    <button className="LoginButton font-bold text-base text-black" type="submit">Create</button>
                                </div>
                            </div>
                        </form>
                        <div className='mt-2 text-center text-lg text-gray-600'>
                            Already have an account?
                            <Link to={`/signin?redirect=${redirect}`} className="m-4 text-center text-decoration-none text-yellow-400">Sign-in</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignUpPage
