import { useState } from "react"

import { Separator } from "@/components/ui/separator"

import {
  Card,
  CardContent,
  CardDescription,
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

export default function VolleyballForm({ onSubmit }) {
    const [ answers, setAnswers ] = useState({
        frequency: "",
        jumpintensity: "",
        position: "",
        courttype: "",
        rolestyle: "",
        pastinjury: ""
    })

    const [ submitted, setSubmitted ] = useState(false)

    const isMissing = (field) => submitted && !answers[field];

    const missingCount = Object.values(answers).filter(v => !v).length;

    const handleSubmit = () => {
        setSubmitted(true);
        if (missingCount > 0) return;
        onSubmit(answers);
    };

    return (
        <div className="pb-12 max-w-2xl mx-auto">
            <Card>
                <div>
                    <CardHeader>
                        <CardTitle className="text-base sm:text-lg font-semibold">
                        Injury Risk Assessment for Volleyball Athletes
                        </CardTitle>
                        <Separator className="mt-2"/>
                        <CardDescription className="py-2">
                        Choose an answer for each of the following questions:
                        </CardDescription>
                    </CardHeader>

                    <CardContent>

                        {submitted && missingCount > 0 && (
                            <div className="mb-4 rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                                Please answer all {missingCount === 1 ? "1 remaining question" : `${missingCount} remaining questions`} before submitting.
                            </div>
                        )}

                        {/* Question 1 */}
                        <p className="mb-4">How often do you play volleyball within a week?</p>
                        <Select
                            value={answers.frequency}
                            onValueChange={(value) =>
                                setAnswers(prev => ({ ...prev, frequency: value }))
                            }
                        >
                            <SelectTrigger className="w-full sm:max-w-56" aria-invalid={isMissing("frequency")}>
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
                        {isMissing("frequency") && <p className="mt-1 text-xs text-destructive">Required</p>}

                        {/* Question 2 */}
                        <p className="py-4">How intense is your jumping during play?</p>
                        <Select
                            value={answers.jumpintensity}
                            onValueChange={(value) =>
                                setAnswers(prev => ({ ...prev, jumpintensity: value }))
                            }
                        >
                            <SelectTrigger className="w-full sm:max-w-56" aria-invalid={isMissing("jumpintensity")}>
                                <SelectValue placeholder="Select an intensity" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Jump Intensity</SelectLabel>
                                    <SelectItem value="high">High</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="low">Low</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {isMissing("jumpintensity") && <p className="mt-1 text-xs text-destructive">Required</p>}

                        {/* Question 3 */}
                        <p className="py-4">What position do you play?</p>
                        <Select
                            value={answers.position}
                            onValueChange={(value) =>
                                setAnswers(prev => ({ ...prev, position: value }))
                            }
                        >
                            <SelectTrigger className="w-full sm:max-w-56" aria-invalid={isMissing("position")}>
                                <SelectValue placeholder="Select a position" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Position</SelectLabel>
                                    <SelectItem value="setter">Setter</SelectItem>
                                    <SelectItem value="outside">Outside Hitter</SelectItem>
                                    <SelectItem value="opposite">Opposite</SelectItem>
                                    <SelectItem value="middle">Middle Blocker</SelectItem>
                                    <SelectItem value="libero">Libero</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {isMissing("position") && <p className="mt-1 text-xs text-destructive">Required</p>}

                        {/* Question 4 */}
                        <p className="py-4">What type of court do you play on?</p>
                        <Select
                            value={answers.courttype}
                            onValueChange={(value) =>
                                setAnswers(prev => ({ ...prev, courttype: value }))
                            }
                        >
                            <SelectTrigger className="w-full sm:max-w-56" aria-invalid={isMissing("courttype")}>
                                <SelectValue placeholder="Select a court type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Court Type</SelectLabel>
                                    <SelectItem value="indoor">Indoor</SelectItem>
                                    <SelectItem value="outdoor">Outdoor (Beach)</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {isMissing("courttype") && <p className="mt-1 text-xs text-destructive">Required</p>}

                        {/* Question 5 */}
                        <p className="py-4">Which best describes your role style?</p>
                        <Select
                            value={answers.rolestyle}
                            onValueChange={(value) =>
                                setAnswers(prev => ({ ...prev, rolestyle: value }))
                            }
                        >
                            <SelectTrigger className="w-full sm:max-w-56" aria-invalid={isMissing("rolestyle")}>
                                <SelectValue placeholder="Select a role style" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Role Style</SelectLabel>
                                    <SelectItem value="offensive">Offensive</SelectItem>
                                    <SelectItem value="defensive">Defensive</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {isMissing("rolestyle") && <p className="mt-1 text-xs text-destructive">Required</p>}

                        {/* Question 6 */}
                        <p className="py-4">Any past injuries?</p>
                        <Select
                            value={answers.pastinjury}
                            onValueChange={(value) =>
                                setAnswers(prev => ({ ...prev, pastinjury: value }))
                            }
                        >
                            <SelectTrigger className="w-full sm:max-w-56" aria-invalid={isMissing("pastinjury")}>
                                <SelectValue placeholder="Select an injury type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Injury Type</SelectLabel>
                                    <SelectItem value="none">None</SelectItem>
                                    <SelectItem value="ankle">Ankle</SelectItem>
                                    <SelectItem value="knee">Knee</SelectItem>
                                    <SelectItem value="shoulder">Shoulder</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {isMissing("pastinjury") && <p className="mt-1 text-xs text-destructive">Required</p>}

                    </CardContent>
                </div>

                <div className="flex justify-center pt-4">
                    <Button className="px-8 py-4 cursor-pointer" onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>

            </Card>
        </div>
    )
}
