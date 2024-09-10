import React from 'react'
import Review from './Review'

const Bookshelf = () => {
  return (
    <div className="p-24" id='bookshelf'>
        <h1 className="heading">My Bookshelf</h1>
      <p>Some of my favorite books that shape who I am</p>
      <h1>All time favorites</h1>
      <Review img="https://m.media-amazon.com/images/I/4175kHZcgtL._SY445_SX342_.jpg" title="Golden Son" author="Pierce Brown" rating={10} thoughts=""/>
      <h1>Recent books</h1>
      <Review img="https://m.media-amazon.com/images/I/91Fo63S5U+L._SY466_.jpg" title="Blood Meridian" author="Cormac McCarthy" rating={8} thoughts=""/>
    </div>
  )
}

export default Bookshelf
