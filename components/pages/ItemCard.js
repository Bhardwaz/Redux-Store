import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../utils/cartSlice'

const ItemCard = ({info}) => {
  const {image, price} = info
  const dispatch = useDispatch()
  const handleAddItem = (info) => {
      dispatch(addItem(info))
  }
  return (
   <div className='border flex flex-col bg-white items-center gap-5'> 
     <div className='p-5'>
     <img className='w-[250px] h-[250px]' src={image} alt="card image" />
     </div>
     <p className='font-bold'>{price}$</p>
     <button
     onClick={() => handleAddItem(info)}
    type="button"
    className="rounded-md my-2 bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 active:translate-y-0.5"
  >
    Add to Cart
  </button>
   </div>
  )
}

export default ItemCard