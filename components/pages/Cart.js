import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from './cartCard'

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items)
  const bill = Object.keys(cartItems).reduce((acc, cur) => acc + cartItems[0].price, 0)
  return (
  <div>
  <div className='pt-16 flex flex-wrap gap-5 w-[80%] mx-auto'>
      {cartItems.length && cartItems.map(item => <CartCard key={item?.id} info={item} />)}
  </div>

  <div className='flex justify-center gap-10 items-center mt-10'>
  <div className='mt-16 text-lg flex justify-center'> { bill ? (`Total   Bill : ${bill}$`) : "PLEASE ADD ITEM INTO CART "} </div>

   {bill && <button className=' text-white text-center mt-16 text-lg bg-green-600 p-1 rounded-sm hover:bg-green-500'> Checkout 🛍️ </button>}
  </div>
  </div>
  ) 
}

export default Cart