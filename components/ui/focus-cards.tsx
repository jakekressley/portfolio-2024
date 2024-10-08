"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type CardType = {
    title: string;
    author: string;
    review: string;
    src: string;
};

export const Card = React.memo(
    ({
        card,
        index,
        hovered,
        setHovered,
    }: {
        card: CardType;
        index: number;
        hovered: number | null;
        setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    }) => (
        <div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
                hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
            )}
        >
            <Image
                src={card.src}
                alt={card.title}
                fill
                className="object-cover absolute inset-0"
            />
            <div
                className={cn(
                    "absolute inset-0 bg-black/50 flex flex-col py-8 px-4 transition-opacity duration-300",
                    hovered === index ? "opacity-100" : "opacity-0"
                )}
            >
                <div className="text-xl md:text-2xl text-center font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                    {card.title}
                </div>
                <div className="text-xl text-center md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 mt-4">
                    {card.author}
                </div>
                <div className="text-lg md:text-lg font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 mt-8">
                    {card.review}
                </div>
            </div>
        </div>
    )
);

Card.displayName = "Card";

type Card = {
    title: string;
    author: string;
    review: string;
    src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="book-grid xl:flex xl:flex-row xl:gap-10 xl:max-w-7xl w-full">
            {cards.map((card, index) => (
                <Card
                    key={card.title}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                />
            ))}
        </div>
    );
}
