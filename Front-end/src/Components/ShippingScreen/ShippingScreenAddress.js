import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Footer from '../HomeScreen/Footer'
import { useNavigate } from 'react-router-dom';
import { Store } from '../../Store';
import { useEffect } from 'react';
import CheckoutStep from './CheckoutStep';
import CheckOutHeader from '../Header/CheckOutHeader';

const ShippingScreenAddress = () => {

    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);

    const { userInfo, cart: { shippingAddress } } = state

    const [fullName, setFullName] = useState(shippingAddress.fullName || "");
    const [address, setAdrress] = useState(shippingAddress.address || "");
    const [city, setCity] = useState(shippingAddress.city || "");
    const [pincode, setPincode] = useState(shippingAddress.pincode || "");
    const [country, setCountry] = useState(shippingAddress.country || "");
    const [mobileNumber, setMobileNumber] = useState(shippingAddress.mobileNumber || "");

    useEffect(() => {
        if (!userInfo) {
            navigate('/signin?redirect=/shipping')
        }
    }, [userInfo, navigate])

    const submitHandler = (e) => {
        e.preventDefault();

        ctxDispatch({
            type: "SAVE_SHIPPING_ADDRESS",
            payload: {
                fullName, address, city, pincode, country,mobileNumber
            }
        })
        localStorage.setItem('shippingAddress', JSON.stringify({ fullName, address, city, pincode, country,mobileNumber }))
        navigate("/payment")
    }
    return (
        <div>
            <Helmet>
                <title>Shipping Address</title>
            </Helmet>
            <CheckOutHeader/>
            <div className='mt-8 container small-container'>
                <CheckoutStep step1 step2></CheckoutStep>
            </div>
            <div className='container small-container'>
                <h1 className='my-7'>Shipping Address</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="fullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            className='w-4'
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="fullName">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            value={address}
                            onChange={(e) => setAdrress(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="fullName">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="fullName">
                        <Form.Label>PinCode</Form.Label>
                        <Form.Control
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="fullName">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="fullName">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <div className='mb-3'>
                        <Button variant="primary" type="submit">
                            Continue
                        </Button>
                    </div>
                </Form>
            </div>
            <Footer />
        </div>
    )
}

export default ShippingScreenAddress
