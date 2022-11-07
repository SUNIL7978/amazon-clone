import React from 'react'
import {BsStarFill,BsStarHalf} from 'react-icons/bs'
import {BiStar} from 'react-icons/bi'

const Star = ({stars,reviews}) => {

    console.log(stars,reviews)

    
  return (
    <div className='h-16 flex justify-start items-center text-base pl-5'>
        <div className='flex gap-1 items-center justify-start'>
                <span className='text-yellow-500'>
                    {stars >= 1 ? <BsStarFill/> : stars >= 0.5 ? <BsStarHalf/> : <BiStar/>}
                </span>
                <span className='text-yellow-500'>
                    {stars >= 2 ? <BsStarFill/> : stars >= 1.5 ? <BsStarHalf/> : <BiStar/>}
                </span>
                <span className='text-yellow-500'>
                    {stars >= 3 ? <BsStarFill/> : stars >= 2.5 ? <BsStarHalf/> : <BiStar/>}
                </span>
                <span className='text-yellow-500'>
                    {stars >= 4 ? <BsStarFill/> : stars >= 3.5 ? <BsStarHalf/> : <BiStar/>}
                </span>
                <span className='text-yellow-500'>
                    {stars >= 5 ? <BsStarFill/> : stars >= 4.5 ? <BsStarHalf/> : <BiStar/>}
                </span>
            <p className='m-0 pl-5'>({reviews} customer reviews)</p>
        </div>
      
    </div>
  )
}

export default Star
