import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../../Store';
import Header from '../Header/Header';
import Footer from '../HomeScreen/Footer';
import CheckOutProduct from './CheckOutProduct';

const ShoppingCart = () => {

    const navigate = useNavigate();

    const { state} = useContext(Store); //, dispatch: ctxDispatch 

    const { cart: { cartItems } } = state;

    const checkoutHandler = () => {
        navigate('/signin?redirect=/shipping');
    };

    return (
        <div className='bg-gray-100'>
            <Helmet>
                <title>Cart Shopping</title>
            </Helmet>
            <Header />
            <main className='lg:flex max-w-screen-2xl mx-auto'>
                <div className='flex-grow m-5 shadow-sm'>
                    <div className='flex flex-col p-5 space-y-5 bg-white'>
                        <h1 className='text-3xl font-bold font-mono border-b pb-4'>Shopping Cart</h1>
                        <div>
                            {cartItems.length === 0 ?
                                (<span className='bg-red-300 block border border-black p-3 font-bold text-center text-2xl rounded-md'>
                                    Cart is Empty : <Link to="/" className='text-decoration-none text-black'>Go To Shopping</Link>
                                </span>
                                )
                                :
                                (
                                    <div>
                                        {cartItems.map((item) => (
                                            <CheckOutProduct item={item} key={item._id} />
                                        ))}
                                    </div>
                                )}
                        </div>

                    </div>
                </div>

                <div className='flex flex-col bg-white p-10 shadow-md'>
                    <h3 className='whitespace-nowrap'>
                        <span className='text-lg font-bold'> Subtotal </span><span className='text-lg font-bold'>({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                            items)</span> : $
                        <span className='text-lg font-bold'> {(cartItems.reduce((a, c) => a + c.price * c.quantity, 0)).toFixed(2)}</span>
                    </h3>
                    <button disabled={cartItems.length === 0} className="mt-4 button" onClick={checkoutHandler}>Proceed To Buy</button>
                </div>

            </main>
            <Footer />
        </div>
    )
}

export default ShoppingCart
