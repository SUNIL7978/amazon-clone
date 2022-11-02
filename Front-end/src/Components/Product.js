import { useState } from "react";

const MAX_RATING = 5;
const MIN_RATING = 1;


const Product = (currElem) => {

    const { id, slug, price, brand, category, image } = currElem;

    const [rating] = useState(
        Math.floor(Math.random() * MAX_RATING - MIN_RATING +1) + MIN_RATING
    )



    return (
        <div className='relative flex items-center justify-center flex-col z-30 p-3 m-3 bg-white'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            <img src={image} alt={id.name} height="100vh" width="200" className="mt-auto" />
            <p className="my-auto font-arial font-bold">{brand}</p>
            <h4 className="flex flex-nowrap items-center font-bold">{slug}</h4>
            <div className="flex text-yellow-500">
                {Array(rating).fill().map((_,i)=>(
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                ))}
            </div>
            <p className="mt-4">₹{parseFloat(price).toFixed(2)}</p>
            <button className="mt-auto w-48 p-2 border border-yellow-500 text-sm md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 focus:ring-2 focus:ring-yellow-500 active:from-yellow-400 rounded-sm">Add To Cart</button>

        </div>
    )
}

export default Product
