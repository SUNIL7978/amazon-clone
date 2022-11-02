import React from 'react'


const Header = () => {
  return (
    <header className='w-full sticky'>

      <div className='flex items-center flex-grow bg-amazon_blue  p-1'>
        <div className='flex mt-2 mr-2 flex-grow items-center sm:flex-grow-0'>
          <a href='/'><img src="/img/logo.png" alt="amazon logo" width="150" height="40" className='cursor-pointer' /></a>
        </div>
        <div className='hidden sm:flex items-center rounded-md h-10 flex-grow bg-yellow-400 hover:bg-yellow-500 hover:cursor-pointer focus:outline-orange-400'>

          <input className='p-2 h-full w-6 rounded-l-md flex-grow flex-shrink focus:outline-none px-4' type="text" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 p-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

        </div>

        <div className='text-white flex items-center space-x-6 mx-6 text-md whitespace-nowrap'>
          <div className='link'>
            <p>Hello Sunil</p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>
          <div className='link'>
            <p>Retuns</p>
            <p className='font-extrabold md:text-sm'>& Order</p>
          </div>
          <div className='link flex items-center relative'>
            <span className='absolute bg-yellow-500 top-0 right-0 h-4 w-4 rounded-full text-center md:right-10 text-black font-bold'>0</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <p className='font-black md:text-sm'>Cart</p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className='flex items-center space-x-4 bg-amazon_blue-light text-white p-1  pl-4'>
        <p className='link flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          All
        </p>
        <a href="/fresh?ref_=nav_cs_fresh" className='link'>Fresh</a>

        <a href="/gp/browse.html?node=6648217031&ref_=nav_cs_fashion" className='link'>Fashion</a>

        <a href="/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles" className='link'>Mobiles</a>

        <a href="/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3" className='link'>Sell</a>

        <a href="/gift-card-store/b/?ie=UTF8&node=3704982031&ref_=nav_cs_gc" className='link'>Gift Cards</a>

        <a href="/business/register/org/landing?ref_=nav_cs_business" className='link hidden lg:inline-flex'><span>Amazon Business</span></a>

        <a href="/gp/history?ref_=nav_cs_timeline" className='link hidden lg:inline-flex'><span>Browsing History</span></a>

        <a href="/Baby/b/?ie=UTF8&node=1571274031&ref_=nav_cs_baby" className='link hidden lg:inline-flex'>Baby</a>

        <a href="/gp/buyagain?ie=UTF8&ref_=nav_cs_buy_again" className='link hidden lg:inline-flex'>Buy Again</a>

        <a href="/gcx/-/gfhz/?ref_=nav_cs_giftfinder" className='link hidden lg:inline-flex'>Gift Ideas	</a>

        <a href="/auto-deliveries/landing?ref_=nav_cs_sns" className='link hidden lg:inline-flex'>Subscribe & Save</a>

        <a href="/gp/yourstore/home?ref_=nav_cs_ys" className='link hidden lg:inline-flex'><span >Sunil</span><span>'s Amazon.in</span></a>

        <a href="/health-and-personal-care/b/?ie=UTF8&node=1350384031&ref_=nav_cs_hpc" className='link hidden lg:inline-flex'>Health, Household & Personal Care</a>

        <img src="/img/Prime.jpg" alt="img not found" height="40" width="350" className='link hidden lg:inline-flex'/>

      </div>
    </header>
  )
}

export default Header
