"use client";

import React, { useState } from "react";
import Image from "next/image";

type Card = {
  title: string;
  author: string;
  review: string;
  src: string;
};

function BookCard({ title, author, review, src }: Card) {
  const [showReview, setShowReview] = useState(false);

  const toggle = () => setShowReview((s) => !s);
  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <article
      className="
        group relative overflow-hidden
        rounded-md border border-neutral-200 shadow-sm
        dark:border-neutral-800 dark:bg-neutral-900
        cursor-pointer
      "
      onClick={toggle}
      role="button"
      tabIndex={0}
      onKeyDown={onKeyDown}
      aria-pressed={showReview}
      aria-label={`Toggle review for ${title}`}
    >
      {/* Book-shaped container (3:5) */}
      <div className="relative w-full aspect-[3/5]">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 640px) 150px, (max-width: 768px) 170px, (max-width: 1024px) 180px, 200px"
          className="object-cover"
        />

        {/* Overlay with title + author + review (hover on desktop, tap to toggle on mobile) */}
        <div
          className={`
            absolute inset-0 flex flex-col items-center justify-center
            px-4 text-center gap-3
            transition-opacity duration-300 bg-black/70
            ${showReview ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}
          `}
        >
          <h3 className="text-white text-base font-semibold">{title}</h3>
          <p className="text-neutral-200 text-xs">{author}</p>
          <p className="text-xs md:text-sm leading-relaxed text-white">{review}</p>
        </div>
      </div>
    </article>
  );
}

export function MyBooks() {
  const cards: Card[] = [
    {
      title: "Discourses and Selected Writings",
      author: "Epictetus",
      review:
        "My first introduction into philosophy. Epictetus's arguments for living an ethical life stick with me to this day.",
      src: "https://m.media-amazon.com/images/I/71ZWRJk1bsL._SY466_.jpg",
    },
    {
      title: "Words of Radiance",
      author: "Brandon Sanderson",
      review: "Epic fantasy with incredible characters and some great twists.",
      src: "https://m.media-amazon.com/images/I/812AFi3YPyL._SY522_.jpg",
    },
    {
      title: "Golden Son",
      author: "Pierce Brown",
      review:
        "Thrilling Sci-fi space opera with great characters and great twists.",
      src: "https://m.media-amazon.com/images/I/4175kHZcgtL._SY445_SX342_.jpg",
    },
    {
      title: "The Count of Monte Cristo",
      author: "Alexandre Dumas",
      review:
        "The most classic and iconic revenge story of all time. Has everything you could want in a book.",
      src: "https://m.media-amazon.com/images/I/41EiXfNY6wL._SY445_SX342_.jpg",
    },
  ];

  return (
    <div
      className="
        grid grid-cols-1 md:grid-cols-4
        gap-2 md:gap-4
        w-full max-w-6xl mx-auto px-4
        place-items-center
      "
    >
      {cards.map((card) => (
        <div
          key={card.title}
          className="
            w-[150px] sm:w-[170px] md:w-[180px] lg:w-[200px]
          "
        >
          <BookCard {...card} />
        </div>
      ))}
    </div>
  );
}

export default MyBooks;