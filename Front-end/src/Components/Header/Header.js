import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Store } from '../../Store';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import '../Header/Header.css'


const Header = () => {

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo} = state;

  const signOutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' })
    localStorage.removeItem('userInfo')
    localStorage.removeItem('shippingAddress')
    localStorage.removeItem('paymentMethod')
  }

  return (
    <header className='w-full lg:w-full'>

      <div className='flex items-center flex-grow bg-amazon_blue  p-1'>
        <div className='flex mt-2 mr-2 flex-grow items-center sm:flex-grow-0'>
          <Link to='/'><img src="/img/logo.png" alt="amazon logo" width="150" height="40" className='cursor-pointer' /></Link>
        </div>
        <div className='hidden sm:flex items-center rounded-md h-10 flex-grow bg-yellow-400 hover:bg-yellow-500 hover:cursor-pointer focus:outline-orange-400'>

          <input className='p-2 h-full w-6 rounded-l-md flex-grow flex-shrink focus:outline-none px-4' type="text" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 p-3 font-bold">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

        </div>

        <div className='text-white flex items-center space-x-6 mx-6 text-md whitespace-nowrap'>
          <div className='mt-4'>
            {
              userInfo ? (
                <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                  <div>
                    <LinkContainer to="/profile" >
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link to="#signout" className="dropdown-item" onClick={signOutHandler}>Sign Out</Link>
                  </div>
                </NavDropdown>
              ) : (
                <Link className="nav-link link_Change" to="/signin">
                  Sign In
                </Link>
              )
            }
          </div>
          <div className='link flex flex-col items-center space-x-1'>
            <span>Retuns</span>
            <span className='font-extrabold md:text-sm'>& Order</span>
          </div>
          <div className='link flex items-center relative'>
            <Link to="/cart" className='font-black text-decoration-none text-white md:text-sm flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <span className='font-black md:text-sm'>Cart</span>
              {cart.cartItems.length > 0 && (
                <div className='absolute bg-yellow-500 top-0 right-0 h-4 w-4 rounded-full text-center md:right-10 text-black font-bold'> {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</div>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className='flex items-center space-x-4 bg-amazon_blue-light text-white p-1  pl-4'>
        <span className='link flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          All
        </span>
        <Link className='link link_Change'>Fresh</Link>

        <Link className='link link_Change'>Fashion</Link>

        <Link className='link link_Change'>Mobiles</Link>

        <Link className='link link_Change'>Sell</Link>

        <Link className='link link_Change'>Gift Cards</Link>

        <Link className='link hidden lg:inline-flex link_Change'><span>Amazon Business</span></Link>

        <Link className='link hidden lg:inline-flex link_Change'><span>Browsing History</span></Link>

        <Link className='link hidden lg:inline-flex link_Change'>Baby</Link>

        <Link className='link hidden lg:inline-flex link_Change'>Buy Again</Link>

        <Link className='link hidden lg:inline-flex link_Change'>Health, Household & Personal Care</Link>


      </div>
    </header>
  )
}

export default Header
