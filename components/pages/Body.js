import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'

const Body = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    getCards()
  }, [])

  const getCards = async () => {
  const response = await fetch("https://fakestoreapi.com/products")
  const data = await response?.json()
  setCards(data)
  }
  return (
    <div className=' pt-16 flex flex-wrap w-[90vw] mt-10 gap-10 mx-auto rounded-lg'>
     {cards.map(card => <ItemCard key={card?.id} info={card} />)}
    </div>
  )
}

export default Body