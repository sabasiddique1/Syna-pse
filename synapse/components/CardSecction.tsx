"use client";

import { Icon } from "lucide-react"; // Example, use any icon package or create your own icons

const cardsData = [
    {
        id: 1,
        title: "Card 1",
        icon: "☀️", // Example of an icon (you can replace it with any icon component)
        description: "This is a short description for card 1.",
    },
    {
        id: 2,
        title: "Card 2",
        icon: "🌙",
        description: "This is a short description for card 2.",
    },
    {
        id: 3,
        title: "Card 3",
        icon: "⭐",
        description: "This is a short description for card 3.",
    },
    {
        id: 4,
        title: "Card 4",
        icon: "⚡",
        description: "This is a short description for card 4.",
    },
];

export default function CardsSection() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            {[...Array(4)].map((_, index) => (
                <div key={index} className="bg-blue-500 text-white rounded-lg shadow-lg p-6 flex flex-col">
                    {/* Heading */}
                    <h2 className="text-xl font-bold mb-4 text-center">Card {index + 1}</h2>

                    {/* Image and Text Side by Side */}
                    <div className="flex items-center">
                        {/* Image - 33% width */}
                        <div className="w-1/3 flex justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-16 w-16"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zM12 5V4M6 12h-1M12 19v1m6-7h1M7.757 7.757l.707-.707M16.243 16.243l-.707.707m0-10.486l.707-.707M7.757 16.243l-.707.707"
                                />
                            </svg>
                        </div>

                        {/* Text - 67% width */}
                        <div className="w-2/3 text-left pl-4">
                            <p className="text-sm">
                                This is a description for the card.
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
}
