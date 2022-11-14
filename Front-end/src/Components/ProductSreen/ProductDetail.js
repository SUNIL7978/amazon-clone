import axios from 'axios';
import React, { useEffect, useReducer } from 'react'
import {  NavLink, useNavigate, useParams } from 'react-router-dom'
import Header from '../Header/Header';
import Star from './Star';
import { TbTruckDelivery, TbReplace } from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'
import MyImage from './MyImage';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { Store } from '../../Store';


const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, product: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};



const ProductDetail = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { slug } = params;
   

    const [{ loading, error, product }, dispatch] = useReducer((reducer), {
        product: [],
        loading: true,
        error: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get(`/api/products/slug/${slug}`);

                console.log(slug)

                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }

            // setProducts(result.data);
        };
        fetchData();
    }, [slug]);

    const { state, dispatch: ctxDispatch } = useContext(Store);

    const { cart } = state;



    const AddCartHandller = async () => {
        const existItem = cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;

        const { data } = await axios.get(`/api/products/${product._id}`);

        if (data.inStock < quantity) {
            window.alert('Sorry. Product is out of stock');
            return;
        }
        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...product, quantity }
        })
        navigate("/cart");
    }

    return (

        <div className='sm:px-1 sm:py-0'>
            <Header />
            <div className='h-16 flex justify-start items-center text-base pl-5'>
                <NavLink to="/" className='font-bold'>Home</NavLink>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>

                <div className='font-bold'>{product.slug}</div>

            </div>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                <div className='max-w-screen-xl mx-auto w-full py-0 px-12'>
                    <div className='grid grid-cols-2 gap-8'>
                        <div className='flex items-center justify-center flex-col'>
                            <span className='max-w-screen-md flex items-center object-contain'><MyImage images={product.images} style={{ width: "100%", height: "100%" }} /></span>
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <Helmet><title>{product.title}</title></Helmet>
                            <h2 className='font-bold text-3xl'>{product.title}</h2>
                            <Star stars={product.rating.rate} reviews={product.rating.review} />
                            <p className='font-bold border-t-2 border-black w-full'>
                                <span className='mt-8'> MRP :
                                    <del>
                                        ₹{parseFloat(product.price + 2500).toFixed(2)}
                                    </del>
                                </span>
                            </p>

                            <p className='font-bold '>
                                <span className='text-violet-700'>Deal of the Day : </span> <span>₹{parseFloat(product.price).toFixed(2)}</span>
                            </p>

                            <p className='leading-4 mb-8'>
                                <span className='font-bold'>About this item :-</span> <span className='leading-6'> {product.description}</span>

                            </p>
                            <div className="w-full flex justify-between border-b-2 border-black">
                                <div className="text-center mb-4 flex items-center flex-col">
                                    <TbTruckDelivery className="bg-icon_bg_color-white w-6 h-6 rounded-full" />
                                    <p>Free Delivery</p>
                                </div>

                                <div className="text-center mb-4 flex items-center flex-col">
                                    <TbReplace className="bg-icon_bg_color-white w-6 h-6 rounded-full" />
                                    <p>30 Days Replacement</p>
                                </div>

                                <div className="text-center mb-4 flex items-center flex-col">
                                    <TbTruckDelivery className="bg-icon_bg_color-white w-6 h-6 rounded-full" />
                                    <p>Thapa Delivered </p>
                                </div>

                                <div className="text-center mb-4 flex items-center flex-col">
                                    <MdSecurity className="bg-icon_bg_color-white w-6 h-6 rounded-full" />
                                    <p>2 Year Warranty </p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-4 text-base space-x-1'>
                                <p>
                                    Available : <span className='font-bold'>{product.inStock > 0 ? "In Stock" : "Not Available"}</span>
                                </p>

                                <p>
                                    Brand : <span className='font-bold'>{product.brand}</span>
                                </p>

                            </div>
                               
                            <div>
                                {product.inStock > 0 && (
                                    <span className='flex mt-4 gap-3'>

                                        <button className="button" onClick={AddCartHandller}>Add To Cart</button>
                                    </span>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            )
            }

        </div>
    )
}

export default ProductDetail
