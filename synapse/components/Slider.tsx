"use client";

import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "Option 8",
    "Option 9",
    "Option 10",
];

export default function Component() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const containerRef = useRef(null);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (options.length - 2));
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + (options.length - 2)) % (options.length - 2)
        );
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const diffX = e.clientX - startX;
        setTranslateX(diffX);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (translateX < -50) {
            nextSlide();
        } else if (translateX > 50) {
            prevSlide();
        }
        setTranslateX(0);
    };

    return (
        <div className="w-full max-w-5xl mx-auto p-4">
            <div className="relative">
                <div className="flex justify-between items-center space-x-4">
                    <Button variant="outline" size="icon" onClick={prevSlide}>
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div
                        className="flex-1 overflow-hidden"
                        ref={containerRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={() => {
                            if (isDragging) handleMouseUp();
                        }}
                    >
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{
                                transform: `translateX(calc(-${currentIndex * 33.33}% + ${translateX}px))`,
                            }}
                        >
                            {options.map((option, index) => (
                                <Card key={index} className="flex-shrink-0 w-1/3 mx-7">
                                    <CardContent className="flex items-center justify-center h-32">
                                        <p>{option}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                    <Button variant="outline" size="icon" onClick={nextSlide}>
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
