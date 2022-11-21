import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Store } from '../../Store';

const CheckOutHeader = () => {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart } = state;
    return (
        <header className='header_checkout'>
            <div className='flex items-center justify-around flex-grow sm:flex-grow-0'>
                <Link to='/'><img src="/img/logo2.png" alt="amazon logo" width="80" height="10" className='cursor-pointer' /></Link>
                <h3 className='text-center'>Checkout</h3>
                <img src="https://m.media-amazon.com/images/G/31/x-locale/checkout/truespc/secured-ssl._CB485936980_.png" alt="img_not_found" />
            </div>
            <Link to="/cart" className='font-black text-decoration-none text-white md:text-sm flex items-center'>
                {cart.cartItems.length > 0 && (
                    <div > {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</div>
                )}
            </Link>
        </header>
    )
}

export default CheckOutHeader
