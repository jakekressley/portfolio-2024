import { FocusCards } from "@/components/ui/focus-cards";

export function MyBooks() {
    const cards = [
        {
            title: "Discourses and Selected Writings",
            author: "Epictetus",
            review: "My first introduction into philosophy. Epictetus's arguments for living an ethical life and mental resiliance stick with me to this day.",
            src: "https://m.media-amazon.com/images/I/71ZWRJk1bsL._SY466_.jpg",
        },
        {
            title: "Atomic Habits",
            author: "James Clear",
            review: "Contains some incredible advice about creating systems to maximize your potential in life.",
            src: "https://m.media-amazon.com/images/I/51B2cB-c9DL._SY466_.jpg",
        },
        {
            title: "Golden Son",
            author: "Pierce Brown",
            review: "Thrilling Sci-fi space opera with great characters and a gripping plot.",
            src: "https://m.media-amazon.com/images/I/4175kHZcgtL._SY445_SX342_.jpg",
        },
        {
            title: "The Count of Monte Cristo",
            author: "Alexandre Dumas",
            review: "The most classic iconic revenge story of all time. Contains everything you could want in a book.",
            src: "https://m.media-amazon.com/images/I/41EiXfNY6wL._SY445_SX342_.jpg",
        },
    ];

    return <FocusCards cards={cards} />;
}
