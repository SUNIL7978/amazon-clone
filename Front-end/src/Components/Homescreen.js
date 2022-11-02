import React from 'react'
import axios from 'axios'
import { useEffect, useReducer } from 'react';
import logger from 'logger-for-use-reducer';
import Header from './Header';
import Banner from './Banner';
import ProductFeed from './ProductFeed'


const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, products: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const Homescreen = () => {
    const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get('/api/products');
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }

            // setProducts(result.data);
        };
        fetchData();
    }, []);
    return (
        <div className="bg-gray-100">
            <Header/>

            <main className='max-w-screen-2xl mx-auto'>

                <Banner/>
                {loading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    <ProductFeed products={products}/>
                )}
            </main>

        </div>
    )
}

export default Homescreen
