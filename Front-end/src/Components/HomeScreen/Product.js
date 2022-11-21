import { Link } from "react-router-dom";
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { BiStar } from 'react-icons/bi'
import { useContext } from "react";
import { Store } from "../../Store";
import axios from "axios";



const Product = (currElem) => {

    const { _id,slug, price, category, image, rating,inStock } = currElem;

    const { state, dispatch: ctxDispatch } = useContext(Store);

    const {
        cart: { cartItems },
    } = state;

    const AddCartHandller = async (item) => {
        const existItem = cartItems.find((x) => x._id === _id);
        const quantity = existItem ? existItem.quantity + 1 : 1;

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



    return (
        <div className='relative flex items-center justify-center flex-col z-30 p-3 m-3 bg-white' key={slug}>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            <Link to={`/product/${slug}`} className='cursor-pointer font-bold text-center mt-8 flex items-center flex-col text-decoration-none text-black'>
                <span className="cursor-pointer"><img src={image} alt="Pics not found" style={{ width: "100%", height: "20vh" }} /></span>
                <div className="mt-16 flex items-center">{slug}</div>
            </Link>
            <div className="flex text-yellow-500 mt-8">
                <span>
                    {rating.rate >= 1 ? <BsStarFill /> : rating.rate >= 0.5 ? <BsStarHalf /> : <BiStar />}
                </span>
                <span>
                    {rating.rate >= 2 ? <BsStarFill /> : rating.rate >= 1.5 ? <BsStarHalf /> : <BiStar />}
                </span>
                <span>
                    {rating.rate >= 3 ? <BsStarFill /> : rating.rate >= 2.5 ? <BsStarHalf /> : <BiStar />}
                </span>
                <span>
                    {rating.rate >= 4 ? <BsStarFill /> : rating.rate >= 3.5 ? <BsStarHalf /> : <BiStar />}
                </span>
                <span>
                    {rating.rate >= 5 ? <BsStarFill /> : rating.rate >= 4.5 ? <BsStarHalf /> : <BiStar />}
                </span>
            </div>
            <p className="mt-4 mb-3">${(price).toFixed(2)}</p>
            <div>
                {inStock === 0 ? (
                    <button disabled className="button_disabled">Out of Stock</button>
                ):(
                    <button onClick={() => AddCartHandller(currElem) } className="button">Add to Cart</button>
                )}
            </div>

        </div>
    )
}

export default Product
