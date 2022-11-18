import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Axios from 'axios'
import { Store } from '../../Store'
import { toast } from 'react-toastify'

const SignInPage = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/api/users/signin', {
        email,
        password,
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

  const showPassword = () => {
    let x = document.getElementById("password")
    if (x.type === "password") {
      x.type = "text"
    } else {
      x.type = "password"
    }

  }


  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <Helmet>
          <title>Amazona Sign in</title>
        </Helmet>

        <div className='-mt-10'>
          <div className='flex justify-center'>
            <Link to="/"><img alt="" className="h-32 w-32 cursor-pointer" src="/img/logo2.png" /></Link>
          </div>
          <div className='border-2 border-gray p-4 -mt-8'>
            <h2 className='text-center text-3xl font-extrabold text-gray-900'>Login to your account</h2>
            <form onSubmit={submitHandler} className='mt-8 space-y-6'>
              <div className='space-y-5'>
                <div className='my-5'>
                  <label htmlFor="email-address" className='sr-only'>Email address </label>
                  <input type="email" placeholder='Enter Your Email' id='email-address' name='email' required autoComplete='email' className='fixedInputClass' onChange={(e) => setEmail(e.target.value)} /><br></br>
                  <label htmlFor="password" className='sr-only'>Password </label>
                  <input type="password" placeholder='Enter your Password' id='password' name='password' required autoComplete='current-password' className='fixedInputClass' onChange={(e) => setPassword(e.target.value)} /><br />
                  <input type="checkbox" onClick={showPassword} /> Show Password
                  <button className="LoginButton" type="submit">Login</button>
                </div>

              </div>

            </form>
          </div>

          <div className='mt-2 text-center text-lg text-gray-600 flex flex-col'>
              <span>New Account Amazona</span>
              <Link to={`/signup?redirect=${redirect}`} className=" text-black m-4 text-center"><button type='submit' className='w-full border border-black bg-amber-50 p-1 rounded-md hover:bg-yellow-300'>Create your Account</button></Link>
            </div>



        </div>
      </div>
    </div>
  )
}

export default SignInPage
