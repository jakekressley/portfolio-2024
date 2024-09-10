import React from 'react'
import Review from './Review'

const Bookshelf = () => {
  return (
    <div className="p-24" id='bookshelf'>
        <h1 className="heading">My Bookshelf</h1>
      <p>Some of my favorite books that shape who I am</p>
      <Review img="https://m.media-amazon.com/images/I/4175kHZcgtL._SY445_SX342_.jpg" title="Golden Son" author="Pierce Brown" rating={10} thoughts=""/>
      <Review img="https://m.media-amazon.com/images/I/71ZWRJk1bsL._SY466_.jpg" title="Discourses and Selected Writings" author="Epictetus" rating={10} thoughts=""/>
      <Review img="https://m.media-amazon.com/images/I/51B2cB-c9DL._SY466_.jpg" title="Atomic Habits" author="James Clear" rating={10} thoughts=""/>
      <Review img="https://m.media-amazon.com/images/I/41EiXfNY6wL._SY445_SX342_.jpg" title="The Count of Monte Cristo" author="Alexandre Dumas" rating={8} thoughts=""/>
    </div>
  )
}

export default Bookshelf
