import axios from 'axios'
import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { usePayPalScriptReducer, PayPalButtons } from '@paypal/react-paypal-js'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useReducer } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Store } from '../../Store'
import MessageBox from '../../MessageBox';
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom';
import CheckOutHeader from '../Header/CheckOutHeader';


const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true, error: '' }
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, order: action.payload, error: '' }
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload }
        case 'PAY_REQUEST':
            return { ...state, loadingPay: true }
        case 'PAY_SUCCESS':
            return { ...state, loadingPay: false, successPay: true }
        case 'PAY_FAIL':
            return { ...state, loadingPay: false }
        case 'PAY_RESET':
            return { ...state, loadingPay: false, successPay: false }
        default:
            return state;
    }
}

const OrderScreen = () => {
    const { state } = useContext(Store);
    const { userInfo } = state;
    const params = useParams();
    const { id: orderId } = params;
    const navigate = useNavigate();
    const [{ loading, error, order, successPay, loadingPay }, dispatch] = useReducer(reducer, {
        loading: true,
        order: {},
        error: '',
        successPay: false,
        loadingPay: false
    })

    const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();



    const createOrder = (data, actions) => {
        return actions.order.create({

            purchase_units: [
                {
                  amount: { value: order.totalPrice },
                },
              ],

        }).then((orderId) => {
        return orderId
    })
}

const onApprove = (data, actions) => {
    return actions.order.capture().then(async function (details) {
        try {
            dispatch({ type: 'PAY_REQUEST' })
            const { data } = await axios.put(`/api/orders/${order._id}/pay`, details, {
                headers: { authorization: `Bearer ${userInfo.token}` },

            })
            dispatch({ type: 'PAY_SUCCESS', payload: data })
            toast.success("Order is Paid")
        } catch (err) {
            dispatch({ type: 'PAY_FAIL', payload: (err) })
            toast.error(err)

        }
    })
}

const onError = (err) => {
    toast.error(err)
}

useEffect(() => {
    const fetchOrder = async () => {
        try {
            dispatch({ type: 'FETCH_REQUEST' });
            const { data } = await axios.get(`/api/orders/${orderId}`, {
                headers: { authorization: `Bearer ${userInfo.token}` },
            });
            dispatch({ type: 'FETCH_SUCCESS', payload: data });
        } catch (err) {
            dispatch({ type: 'FETCH_FAIL', payload: toast.error(err) });
        }
    };

    if (!userInfo) {
        return navigate('/signin')
    }

    if (!order._id || successPay || (order._id && order._id !== orderId)) {
        fetchOrder();
        if (successPay) {
            dispatch({ type: 'PAY_RESET' });
        }
    } else {
        const loadPaypalScript = async () => {
            const { data: clientId } = await axios.get('/api/keys/paypal', {
                headers: { authorization: `Bearer ${userInfo.token}` },
            });
            paypalDispatch({
                type: 'resetOptions',
                value: {
                    'client-id': clientId,
                        currency: 'USD',
                },
            });
            paypalDispatch({ type: 'setLoadingStatus', value: 'pending' });
        };
        loadPaypalScript();
    }
}, [order, userInfo, orderId, navigate, paypalDispatch, successPay])

return (

    loading ? (<div><img src="https://m.media-amazon.com/images/G/31/amazonui/loading/loading-4x._CB485930736_.gif" alt="" /></div>)
        : error ? (<MessageBox variant="danger">{error}</MessageBox>)
            : (
                <div>
                    <CheckOutHeader />
                    <div className='container'>
                        <Helmet>
                            <title>Order {orderId}</title>
                        </Helmet>
                        <h1 className='my-3'>Order {orderId}</h1>
                        <Row>
                            <Col md={8}>
                                <Card className='mb-3'>
                                    <Card.Body>
                                        <Card.Title><strong>Shipping</strong></Card.Title>
                                        <Card.Text>
                                            <strong>Name : </strong>{order.shippingAddress.fullName}<br />
                                            <strong>Address : </strong>{order.shippingAddress.address}{","}
                                            {order.shippingAddress.city}{","}{order.shippingAddress.pincode}{","}
                                            {order.shippingAddress.country}<br />
                                            <strong>Mobile Number : </strong>{order.shippingAddress.mobileNumber}
                                        </Card.Text>
                                        {order.isDelivered ? (
                                            <MessageBox variant="success">
                                                Delivered at {order.deliveredAt}
                                            </MessageBox>
                                        ) : <MessageBox variant="danger">Not Delivered</MessageBox>
                                        }
                                    </Card.Body>
                                </Card>
                                <Card className='mb-3'>
                                    <Card.Body>
                                        <Card.Title><strong>Payment</strong></Card.Title>
                                        <Card.Text>
                                            <strong>Method :</strong>{" "}{order.paymentMethod}
                                        </Card.Text>
                                        {order.isPaid ? (
                                            <MessageBox variant="success">
                                                Paid at {order.paidAt}
                                            </MessageBox>
                                        ) : <MessageBox variant="danger">Not Paid</MessageBox>
                                        }
                                    </Card.Body>
                                </Card>
                                <Card className='mb-3'>
                                    <Card.Body>
                                        <Card.Title><strong>Product Item</strong></Card.Title>
                                        <ListGroup varient="flush">
                                            {order.orderItems.map((item) => (
                                                <ListGroup.Item key={item._id}>
                                                    <Row className='items-center'>
                                                        <Col md={6}>
                                                            <img src={item.image} alt={item.name} style={{ width: "50%", height: "20vh" }} />{" "}
                                                            <strong>{item.slug}</strong>
                                                            <Link to={`/product/${item.slug}`}>{item.name}</Link>
                                                        </Col>
                                                        <Col md={3}>
                                                            <strong>{item.quantity}</strong>
                                                        </Col>
                                                        <Col md={3}>
                                                            <strong>${(item.price).toFixed(2)} </strong>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title><strong>Order Summary</strong></Card.Title>
                                        <ListGroup varient="flush">
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Items:</Col>
                                                    <Col>${(order.itemsPrice).toFixed(2)} </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Shipping:</Col>
                                                    <Col>${(order.shippingPrice).toFixed(2)} </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Tax:</Col>
                                                    <Col>${(order.taxPrice).toFixed(2)} </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>
                                                        <strong> Order Total</strong>
                                                    </Col>
                                                    <Col>
                                                        <strong>${(order.totalPrice).toFixed(2)}</strong>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            {!order.isPaid && (
                                                <ListGroup.Item>
                                                    {isPending ? (
                                                        <div><img src="https://m.media-amazon.com/images/G/31/amazonui/loading/loading-4x._CB485930736_.gif" alt="" /></div>
                                                    ) : (<div>
                                                        <PayPalButtons
                                                            createOrder={createOrder}
                                                            onApprove={onApprove}
                                                            onError={onError}
                                                        >
                                                        </PayPalButtons>
                                                    </div>)
                                                    }
                                                    {loadingPay && <div><img src="https://m.media-amazon.com/images/G/31/amazonui/loading/loading-4x._CB485930736_.gif" alt="" /></div>}
                                                </ListGroup.Item>
                                            )}
                                        </ListGroup>
                                    </Card.Body>
                                </Card>

                            </Col>
                        </Row>
                    </div>
                </div>
            )
)
}


export default OrderScreen
