import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import feDoc from '../../assets/images/fe-doc.png'

const doctorData = [
    {
        name: "Dr. Sarah Connor",
        specialization: "Cardiologist",
        experience: 15, // in years
        hospital: "HeartCare Hospital",
        rating: 4.9,
        patientsTreated: 3000,
        isTopDoctor: true,
        consultationFee: "$150",
        availableFrom: "September 5, 2023"
    },
    {
        name: "Dr. John Watson",
        specialization: "Neurologist",
        experience: 12,
        hospital: "Neuro Health Clinic",
        rating: 4.8,
        patientsTreated: 2500,
        isTopDoctor: false,
        consultationFee: "$200",
        availableFrom: "October 10, 2023"
    },
    {
        name: "Dr. Alice Morgan",
        specialization: "Orthopedic Surgeon",
        experience: 10,
        hospital: "OrthoPlus Clinic",
        rating: 4.7,
        patientsTreated: 1800,
        isTopDoctor: true,
        consultationFee: "$250",
        availableFrom: "November 15, 2023"
    }
]

export default function Component() {
    return (
        <div className="container mx-auto py-8">
            <div className="space-y-8 p-20">
                {/*<p>Add a filter and heading</p>*/}
                {doctorData.map((doctor, index) => (
                    <Card key={index} className="w-full overflow-hidden p-2 bg-indigo-100">
                        <CardContent className="p-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="col-span-1 py-4 px-0 flex items-center justify-center">
                                    <div className="w-40 h-40 relative rounded-full overflow-hidden">
                                        <Image
                                            src={feDoc}
                                            alt={doctor.name}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-1 py-4 px-0 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-2xl font-bold">{doctor.name}</h2>
                                        {doctor.isTopDoctor && (
                                            <Badge variant="secondary" className="bg-yellow-200 text-yellow-800">
                                                Platinum
                                            </Badge>
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">Specialization</p>
                                        <p className="text-sm">{doctor.specialization}</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-sm font-semibold">Experience</p>
                                            <p className="text-sm">{doctor.experience} years</p>
                                        </div>
                                        <div className="mr-20">
                                            <p className="text-sm font-semibold">Patients Treated</p>
                                            <p className="text-sm">{doctor.patientsTreated.toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1 p-10 flex flex-col justify-center space-y-4">
                                    <Button className="w-full">Book Appointment</Button>
                                    <Button variant="outline" className="w-full bg-gray-300">Learn More</Button>
                                </div>
                            </div>
                            <div className="p-4 border-t">
                                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <h3 className="font-semibold text-sm">Available From</h3>
                                        <p className="text-sm">{doctor.availableFrom}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-semibold text-sm">Hospital</h3>
                                        <p className="text-sm">{doctor.hospital}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-semibold text-sm">Consultation Fee</h3>
                                        <p className="text-sm font-bold">{doctor.consultationFee}</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
