import React from 'react'
import Image from 'next/image'

interface ReviewProps {
    img: string,
    title: string,
    author: string,
    rating: number,
    thoughts?: string
}

const Review: React.FC<ReviewProps> = ({ img, title, author, rating, thoughts }) => {
    return (
        <div>
            <Image
                src={img}
                alt='book'
                width={180}
                height={270}
            />
            <h1>{title}</h1>
            <p>{author}</p>
            <p>{rating}</p>
            <p>{thoughts}</p>
        </div>
    )
}

export default Review
