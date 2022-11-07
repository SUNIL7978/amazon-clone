import { Link } from "react-router-dom";
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { BiStar } from 'react-icons/bi'
import { useContext } from "react";
import { Store } from "../../Store";



const Product = (currElem) => {

    const { slug, price, category, image, rating } = currElem;

    const { state, dispatch: ctxDispatch } = useContext(Store);

    const AddCartHandller = () => {
        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...currElem, quantity: 1 }
        })
    }



    return (
        <div className='relative flex items-center justify-center flex-col z-30 p-3 m-3 bg-white' key={slug}>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            <Link to={`/product/${slug}`} className='cursor-pointer font-bold text-center mt-8 flex items-center flex-col'>
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
            <p className="mt-4 mb-3">₹{parseFloat(price).toFixed(2)}</p>
            <button className="mt-auto w-48 p-2 border border-yellow-500 text-sm md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 focus:ring-2 focus:ring-yellow-500 active:from-yellow-400 rounded-sm" onClick={AddCartHandller}>Add To Cart</button>

        </div>
    )
}

export default Product
