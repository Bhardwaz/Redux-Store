import React from 'react'
import { useSelector } from 'react-redux'
import store from '../../utils/store'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const cartItems = useSelector(store => store.cart.items)
  return(
    <div className='flex bg-white shadow-md w-full justify-around items-center h-10 fixed top-2'>
      <h1 className='font-bold text-lg cursor-pointer'> <Link to={'/'}> Redux Store </Link> </h1>
      <ul className='flex justify-end gap-5 cursor-pointer text-md font-medium'>
         <li className='border bg-green-600 py-1 px-2 rounded-md text-white'> <Link to={'/'}>Home</Link> </li>

         <Link to='/cart'>
         <li className='border bg-green-600 py-1 px-2 rounded-md text-white'> Cart </li>
         </Link>

         <li className='border bg-green-600 py-1 px-2 rounded-md text-white'> CART ITEMS: {cartItems.length} </li>
      </ul>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default Home