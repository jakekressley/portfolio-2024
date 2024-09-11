import React from 'react'
import Review from './Review'
import { MyBooks } from './MyBooks'

const Bookshelf = () => {
  return (
    <div className="lg:p-24 flex flex-col items-center" id='bookshelf'>
        <h1 className="heading mb-16">My Bookshelf</h1>
      <MyBooks />
    </div>
  )
}

export default Bookshelf
