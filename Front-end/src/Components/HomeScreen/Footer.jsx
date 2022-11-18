import React from "react"


const Footer = () => {
  return (
    <>
      <footer className="bg-amazon_blue-light p-16 text-white mt-96 w-full">
        <div className='container m-auto grid grid-cols-4 gap-2'>
          <div className='box'>
            <h3 className="text-lg">Get to Know Us</h3>
                <ul>
                    <li>About Us</li>
                    <li>Carrer</li>
                    <li>Press Release</li>
                    <li>Estore Science</li>
                </ul>
          </div>

          <div className='box'>
            <h2 className="text-lg">About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>70 Washington Square South, New York, NY 10012, United States </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
          </div>
        </div>

       
      </footer>
      <div className="bg-amazon_blue text-center text-white p-4 tex-lg">
            <p>
               <span>&#169;</span>
                <date>1962-1998</date> Amazon Shopping line
            </p>
        </div>
    </>
  )
}

export default Footer