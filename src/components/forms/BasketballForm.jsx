import { useState } from "react"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"

export default function BasketballForm({ onSubmit }) {
    const [ answers, setAnswers ] = useState({
        frequency: "",
        courttype: "",
        position: "",
        pastinjury: "",
        agegroup: ""
    })

    return (
        <div>
            <Card>
                <div>
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold">
                        Injury Risk Assessment for Basketball Athletes
                        </CardTitle>
                        <CardDescription>
                        Choose an answer for each of the following questions:
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        
                        {/* Question 1 */}
                        <p className="mb-4">How often do you play basketball within a week?</p>
                        <Select
                            onValueChange={(value) =>
                                setAnswers(prev => ({ ...prev, frequency: value }))
                            }
                        >
                            <SelectTrigger className="w-full max-w-48">
                                <SelectValue placeholder="Select a frequency" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Frequency</SelectLabel>
                                    <SelectItem value="high">High (5+ days)</SelectItem>
                                    <SelectItem value="medium">Medium (3-4 days)</SelectItem>
                                    <SelectItem value="low">Low (1-2 days)</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        {/* Question 2 */}
                        <p className="py-4">What type of court do you play on?</p>
                        <Select
                            onValueChange={(value) =>
                                setAnswers(prev => ({ ...prev, courttype: value }))
                            }
                        >
                            <SelectTrigger className="w-full max-w-48">
                                <SelectValue placeholder="Select a court type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Court Type</SelectLabel>
                                    <SelectItem value="indoor">Indoor</SelectItem>
                                    <SelectItem value="outdoor">Outdoor</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        {/* Question 3 */}
                        <p className="py-4">What position do you play?</p>
                        <Select
                            onValueChange={(value) =>
                                setAnswers(prev => ({ ...prev, position: value }))
                            }
                        >
                            <SelectTrigger className="w-full max-w-48">
                                <SelectValue placeholder="Select a court type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Position</SelectLabel>
                                    <SelectItem value="guard">Guard</SelectItem>
                                    <SelectItem value="wing">Wing</SelectItem>
                                    <SelectItem value="big">Big</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        {/* Question 4 */}
                        <p className="py-4">Any past injuries?</p>
                        <Select 
                            onValueChange={(value) =>
                                setAnswers(prev => ({ ...prev, pastinjury: value }))
                            }
                        >
                            <SelectTrigger className="w-full max-w-48">
                                <SelectValue placeholder="Select a injury type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Injury Type</SelectLabel>
                                    <SelectItem value="none">None</SelectItem>
                                    <SelectItem value="ankle">Ankle</SelectItem>
                                    <SelectItem value="knee">Knee</SelectItem>
                                    <SelectItem value="multiple">Multiple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        {/* Question 5 */}
                        <p className="py-4">Age Group</p>
                        <Select
                            onValueChange={(value) =>
                                setAnswers(prev => ({ ...prev, agegroup: value }))
                            }
                        >
                            <SelectTrigger className="w-full max-w-48">
                                <SelectValue placeholder="Select a age group" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Age Group Type</SelectLabel>
                                    <SelectItem value="under13">Under 13</SelectItem>
                                    <SelectItem value="14-18">14-18</SelectItem>
                                    <SelectItem value="18up">18+</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                    </CardContent>
                </div>

                <div className="flex justify-center pt-4">
                    <Button className="px-8 py-4 cursor-pointer" onClick={() => {
                        onSubmit(answers)
                    }}>Submit</Button>
                </div>

            </Card>
        </div>
    )
}