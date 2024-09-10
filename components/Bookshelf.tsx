import React from 'react'
import Review from './Review'
import { MyBooks } from './MyBooks'

const Bookshelf = () => {
  return (
    <div className="p-24" id='bookshelf'>
        <h1 className="heading mb-16">My Bookshelf</h1>
      <MyBooks />
    </div>
  )
}

export default Bookshelf
