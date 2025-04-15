"use client"

import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const options = [
    "Option 1", "Option 2", "Option 3", "Option 4", "Option 5",
    "Option 6", "Option 7", "Option 8", "Option 9", "Option 10"
]

export default function CircularSlider() {
    const [selectedIndex, setSelectedIndex] = useState(2)
    const containerRef = useRef<HTMLDivElement>(null)

    const handleSelect = (index: number) => {
        setSelectedIndex(index)
    }

    const scrollToIndex = (index: number) => {
        if (containerRef.current) {
            const container = containerRef.current
            const optionWidth = 96 // 4rem (circle) + 2rem (spacing)
            container.scrollTo({
                left: optionWidth * (index - 2),
                behavior: 'smooth'
            })
        }
    }

    const handlePrev = () => {
        const newIndex = Math.max(0, selectedIndex - 1)
        handleSelect(newIndex)
    }

    const handleNext = () => {
        const newIndex = Math.min(options.length - 1, selectedIndex + 1)
        handleSelect(newIndex)
    }

    useEffect(() => {
        scrollToIndex(selectedIndex)
    }, [selectedIndex])

    return (
        <div className="relative w-full max-w-5xl mx-auto p-4">
            <div className="flex items-center justify-between space-x-4">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={handlePrev}
                    disabled={selectedIndex === 0}
                    className="flex-shrink-0"
                    aria-label="Previous option"
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <div
                    ref={containerRef}
                    className="flex overflow-hidden py-4"
                    style={{ width: 'calc(5 * 150px)' }}
                >
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center flex-shrink-0 w-24 px-20 transition-all duration-300 ${
                                index === selectedIndex
                                    ? 'scale-110 opacity-100'
                                    : Math.abs(index - selectedIndex) <= 2
                                        ? 'opacity-70'
                                        : 'opacity-40'
                            }`}
                            onClick={() => handleSelect(index)}
                        >
                            <div
                                className={`w-16 h-16 rounded-full flex items-center justify-center text-lg font-semibold cursor-pointer transition-colors ${
                                    index === selectedIndex
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-secondary text-secondary-foreground'
                                }`}
                            >
                                {index + 1}
                            </div>
                            <span className="mt-2 text-sm text-center w-16 truncate">{option}</span>
                        </div>
                    ))}
                </div>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={handleNext}
                    disabled={selectedIndex === options.length - 1}
                    className="flex-shrink-0"
                    aria-label="Next option"
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}