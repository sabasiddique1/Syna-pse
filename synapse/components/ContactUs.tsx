"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
export default function ContactUs() {
    return (
        <Card className="w-[550px] border-0">
            <CardHeader className="text-center">
                <CardTitle>Enter you email address</CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex items-center space-x-2">
                            <Input
                                id="email"
                                placeholder="Your e-mail address"
                                className="flex-grow"
                            />
                            <Button>Enter</Button>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
