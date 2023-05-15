import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../utils/cartSlice'

const CartCard = ({info}) => {
  const {image, price, title} = info
  const dispatch = useDispatch()
  const handleRemoveItem = info => {
    dispatch(removeItem(info))
  }
  return (
    <div className='border w-[600px] flex bg-white items-center gap-10'> 
     <div className='w-[300px]'>
     <img className='w-[300px] max-w-md' src={image} alt="card image" />
     </div>
     <div className=' w-[200px] flex flex-col justify-around px-3'>
     <p className='font-bold'>{title}</p>
     <p className='font-bold'>{price}$</p>
     <button
     onClick={() => handleRemoveItem(info)}
    type="button"
    className="rounded-md my-2 bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 active:translate-y-0.5"
  >
    Remove
  </button>
     </div>
   </div>
  )
}

export default CartCard