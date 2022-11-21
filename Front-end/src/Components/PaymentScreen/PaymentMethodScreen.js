import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Form from 'react-bootstrap/Form';
import Footer from '../HomeScreen/Footer'
import CheckoutStep from '../ShippingScreen/CheckoutStep'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Store } from '../../Store';
import {  useNavigate } from 'react-router-dom';
import CheckOutHeader from '../Header/CheckOutHeader';

const PaymentMethodScreen = () => {

    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart:{
            shippingAddress,paymentMethod
        }
    } = state
    const [paymentMethodName,setPaymentMethodName] = useState(paymentMethod || 'PayPal')

    useEffect(() =>{
        if(!shippingAddress.address){
            navigate('/shipping')
        }
    },[shippingAddress,navigate])

    const submitHandler = (e) => {
        e.preventDefault();
        ctxDispatch({type:"SAVE_PAYMENT_METHOD", payload:paymentMethodName})
        localStorage.setItem("paymentMethod",paymentMethodName)
        navigate("/placeorder")

    }
    return (
        <div>
            <Helmet>
                <title>Payment</title>
            </Helmet>
            <CheckOutHeader/>
            <div className='mt-8 container small-container'>
                <CheckoutStep step1 step2 step3></CheckoutStep>
            </div>

            <div className='container small-container'>
                <h3 className='my-3'>Payment Method</h3>
                <Form onSubmit={submitHandler}>
                    <div className='mb-3'>
                        <Form.Check
                            type='radio'
                            id='PayPal'
                            label='PayPal'
                            value='PayPal'
                            checked={paymentMethodName === 'PayPal'}
                            onChange={(e) => setPaymentMethodName(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <Form.Check
                            type='radio'
                            id="Stripe"
                            label="Stripe"
                            value="Stripe"
                            checked={paymentMethodName === "Stripe"}
                            onChange={(e) => setPaymentMethodName(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <Button type="submit">Continue</Button>

                    </div>


                </Form>
            </div>

            <Footer />
        </div>
    )
}

export default PaymentMethodScreen
