import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TbCirclePlus, TbCircleMinus } from 'react-icons/tb'
import { Store } from '../../Store';
import axios from 'axios';

const CheckOutProduct = ({item}) => {

    const { state, dispatch: ctxDispatch } = useContext(Store);

    const { cart: { cartItems} } = state;
 
    const updateItemHandler = async (item,quantity) =>{
        const { data } = await axios.get(`/api/products/${item._id}`);

        if (data.inStock < quantity) {
            window.alert('Sorry. Product is out of stock');
            return;
        }
        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...item, quantity }
        })
    }

    const removeItemHandler = (item) => {
            ctxDispatch({  
                type: 'REMOVE_CART_ITEM',
                payload: item  })
    }

    return (
        <div className='grid grid-cols-5 border-b pb-4 mt-4'>
            <img src={item.image} alt={item.slug} style={{ width: "100%", height: "20vh" }} />

            <div className='col-span-3 mx-5'>
                <span className='text-2xl'> <Link to={`/product/${item.slug}`} className="text-decoration-none text-black">{item.title}</Link></span>
                <div className='flex space-x-3 mt-5'>
                    <button disabled={item.quantity === 0} className="text-2xl" onClick={() =>
                          updateItemHandler(item, item.quantity - 1)
                        }>
                        <TbCircleMinus />
                    </button>
                    <div className="text-2xl">{item.quantity}</div>
                    <button disabled={item.quantity === item.inStock} className="text-2xl" onClick={() =>
                            updateItemHandler(item,item.quantity + 1)
                    }>
                        <TbCirclePlus />
                    </button>
                </div>
                <div className='text-lg mt-5 '> <span className='text-purple-400'>Price :</span>${(item.price).toFixed(2)} </div>
            </div>
            
            <div className='flex flex-col justify-self-end my-auto space-y-2'>
            <button className="button" onClick={() => removeItemHandler(item)}>Remove</button>
            </div>
        </div>
    )
}

export default CheckOutProduct
