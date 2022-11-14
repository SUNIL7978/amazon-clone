import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation } from 'react-router-dom'

const SignInPage = () => {
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';
    return (
        <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-md w-full space-y-8'>
                <Helmet>
                    <title>Login Page</title>
                </Helmet>
                <div className='mt-32'>
                    <div className='flex justify-center'>
                        <img alt="" className="h-14 w-14" src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315" />
                    </div>
                    <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Login to your account</h2>
                    <p className='mt-2 text-center text-lg text-gray-600 '>
                        Don't have an account yet?
                        <Link to={`/signup?redirect=${redirect}`} className="font-medium text-purple-600 hover:text-purple-500 m-2">SignUp</Link>
                    </p>

                    <form action="" className='mt-8 space-y-6'>
                        <div className='space-y-5'>
                            <div className='my-5'>
                                <label htmlFor="email-address" className='sr-only'>Email address </label>
                                <input type="email" placeholder='Email address' id='email-address' name='email' required autoComplete='email' className='fixedInputClass' /><br></br>
                                <label htmlFor="password" className='sr-only'>Password </label>
                                <input type="email" placeholder='Password' id='password' name='password' required autoComplete='current-password' className='fixedInputClass' />

                            </div>

                        </div>

                    </form>

                    <div className="flex items-center justify-between ">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <Link href="\" className="font-medium text-purple-600 hover:text-purple-500">
                                Forgot your password?
                            </Link>
                        </div>
                    </div>
                    <button className="LoginButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default SignInPage
