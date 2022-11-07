import React from 'react'
import {TbCirclePlus,TbCircleMinus} from 'react-icons/tb'

const CartAmountToggle = ({amount,setDecrease,setIncrease}) => {
  return (
    <div>
      <div className='flex justify-between space-x-2 items-center mt-5 mb-2 text-2xl'>
        <button onClick={() => setDecrease()}><TbCircleMinus/></button>
          <div className='text-2xl'>
            {amount}
          </div>
        <button onClick={() => setIncrease()}><TbCirclePlus/></button>
      </div>
      
    </div>
  )
}

export default CartAmountToggle
