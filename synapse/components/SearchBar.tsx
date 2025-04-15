// "use client"
//
// import { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
// import { MapPin, Clock, Activity, DollarSign } from "lucide-react"
//
// const cities = [
//     "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat"
// ]
//
// const conditions = [
//     "Stress", "OCD", "Anxiety", "Depression", "PTSD", "Bipolar Disorder", "Schizophrenia", "Eating Disorders"
// ]
//
// const hours = [
//     "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM",
//     "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"
// ]
//
// const priceRanges = [
//     "Rs. 0 - Rs. 500", "Rs. 501 - Rs. 1000", "Rs. 1001 - Rs. 2000", "Rs. 2001 - Rs. 5000", "Rs. 5001+"
// ]
//
// export default function SearchCard() {
//     const [locationInput, setLocationInput] = useState('')
//     const [filteredCities, setFilteredCities] = useState(cities)
//
//     const handleLocationInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = e.target.value
//         setLocationInput(value)
//         setFilteredCities(cities.filter(city => city.toLowerCase().includes(value.toLowerCase())))
//     }
//
//     return (
//         <Card className="w-full max-w-3xl">
//             <CardHeader>
//                 <CardTitle>Search for Mental Health Services</CardTitle>
//             </CardHeader>
//             <CardContent className="grid gap-6">
//                 <div className="grid grid-cols-2 gap-4">
//                     <div className="flex flex-col space-y-1.5">
//                         <Label htmlFor="location">
//                             <MapPin className="h-4 w-4 inline-block mr-2" />
//                             Location
//                         </Label>
//                         <div className="relative">
//                             <Input
//                                 id="location"
//                                 placeholder="Search for a city"
//                                 value={locationInput}
//                                 onChange={handleLocationInputChange}
//                             />
//                             {locationInput && (
//                                 <div className="absolute z-10 w-full mt-1 bg-background border rounded-md shadow-lg">
//                                     {filteredCities.length > 0 ? (
//                                         filteredCities.map((city) => (
//                                             <div
//                                                 key={city}
//                                                 className="px-4 py-2 cursor-pointer hover:bg-accent"
//                                                 onClick={() => {
//                                                     setLocationInput(city)
//                                                     setFilteredCities([])
//                                                 }}
//                                             >
//                                                 {city}
//                                             </div>
//                                         ))
//                                     ) : (
//                                         <div className="px-4 py-2">No matching cities found</div>
//                                     )}
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                     <div className="flex flex-col space-y-1.5">
//                         <Label htmlFor="hours">
//                             <Clock className="h-4 w-4 inline-block mr-2" />
//                             Hours
//                         </Label>
//                         <Select>
//                             <SelectTrigger id="hours">
//                                 <SelectValue placeholder="Select hours" />
//                             </SelectTrigger>
//                             <SelectContent>
//                                 {hours.map((hour) => (
//                                     <SelectItem key={hour} value={hour}>{hour}</SelectItem>
//                                 ))}
//                             </SelectContent>
//                         </Select>
//                     </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                     <div className="flex flex-col space-y-1.5">
//                         <Label htmlFor="condition">
//                             <Activity className="h-4 w-4 inline-block mr-2" />
//                             Condition
//                         </Label>
//                         <Select>
//                             <SelectTrigger id="condition">
//                                 <SelectValue placeholder="Select condition" />
//                             </SelectTrigger>
//                             <SelectContent>
//                                 {conditions.map((condition) => (
//                                     <SelectItem key={condition} value={condition}>{condition}</SelectItem>
//                                 ))}
//                             </SelectContent>
//                         </Select>
//                     </div>
//                     <div className="flex flex-col space-y-1.5">
//                         <Label htmlFor="price">
//                             <DollarSign className="h-4 w-4 inline-block mr-2" />
//                             Price Range
//                         </Label>
//                         <Select>
//                             <SelectTrigger id="price">
//                                 <SelectValue placeholder="Rs. 0 - Rs. 5000+" />
//                             </SelectTrigger>
//                             <SelectContent>
//                                 {priceRanges.map((range) => (
//                                     <SelectItem key={range} value={range}>{range}</SelectItem>
//                                 ))}
//                             </SelectContent>
//                         </Select>
//                     </div>
//                 </div>
//             </CardContent>
//             <CardFooter>
//                 <Button className="w-full">Search</Button>
//             </CardFooter>
//         </Card>
//     )
// }


"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Clock, Activity, DollarSign, Search } from "lucide-react"

const cities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat"
]

const conditions = [
    "Stress", "OCD", "Anxiety", "Depression", "PTSD", "Bipolar Disorder", "Schizophrenia", "Eating Disorders"
]

const hours = [
    "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM",
    "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"
]

const priceRanges = [
    "Rs. 0 - Rs. 500", "Rs. 501 - Rs. 1000", "Rs. 1001 - Rs. 2000", "Rs. 2001 - Rs. 5000", "Rs. 5001+"
]

export default function SearchCard() {
    const [locationInput, setLocationInput] = useState('')
    const [filteredCities, setFilteredCities] = useState(cities)

    const handleLocationInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setLocationInput(value)
        setFilteredCities(cities.filter(city => city.toLowerCase().includes(value.toLowerCase())))
    }

    return (
        <Card className="bg-background/80 backdrop-blur-sm z-10 lg:w-[calc(100%+10rem)] lg:-mr-16">
            <CardHeader>
                <CardTitle className="text-2xl font-bold divide-red-800👇🏻">Book Your Appointment Now</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-[1fr_1fr_1fr_1fr_auto] gap-4 items-end">
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <MapPin className="h-5 w-5 text-primary" />
                            <Label htmlFor="location" className="font-medium">Location</Label>
                        </div>
                        <div className="relative">
                            <Input
                                id="location"
                                placeholder="Search for a city"
                                value={locationInput}
                                onChange={handleLocationInputChange}
                                className="w-full"
                            />
                            {locationInput && (
                                <div className="absolute z-10 w-full mt-1 bg-background border rounded-md shadow-lg max-h-40 overflow-auto">
                                    {filteredCities.length > 0 ? (
                                        filteredCities.map((city) => (
                                            <div
                                                key={city}
                                                className="px-4 py-2 cursor-pointer hover:bg-accent"
                                                onClick={() => {
                                                    setLocationInput(city)
                                                    setFilteredCities([])
                                                }}
                                            >
                                                {city}
                                            </div>
                                        ))
                                    ) : (
                                        <div className="px-4 py-2">No matching cities found</div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <Clock className="h-5 w-5 text-primary" />
                            <Label htmlFor="hours" className="font-medium">Hours</Label>
                        </div>
                        <Select>
                            <SelectTrigger id="hours" className="w-full">
                                <SelectValue placeholder="Select hours" />
                            </SelectTrigger>
                            <SelectContent>
                                {hours.map((hour) => (
                                    <SelectItem key={hour} value={hour}>{hour}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <Activity className="h-5 w-5 text-primary" />
                            <Label htmlFor="condition" className="font-medium">Condition</Label>
                        </div>
                        <Select>
                            <SelectTrigger id="condition" className="w-full">
                                <SelectValue placeholder="Select condition" />
                            </SelectTrigger>
                            <SelectContent>
                                {conditions.map((condition) => (
                                    <SelectItem key={condition} value={condition}>{condition}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <DollarSign className="h-5 w-5 text-primary" />
                            <Label htmlFor="price" className="font-medium">Price Range</Label>
                        </div>
                        <Select>
                            <SelectTrigger id="price" className="w-full">
                                <SelectValue placeholder="Select price" />
                            </SelectTrigger>
                            <SelectContent>
                                {priceRanges.map((range) => (
                                    <SelectItem key={range} value={range}>{range}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <Button
                        className="bg-primary text-primary-foreground hover:bg-primary/90 w-10 h-10 p-0 flex items-center justify-center"
                        aria-label="Search Appointments"
                    >
                        <Search className="h-5 w-5" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}