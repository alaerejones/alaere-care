"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Navigation, DashboardHeader } from "@/components/navigation"
import { Calendar, Save, ArrowLeft } from "lucide-react"
import Link from "next/link"

const symptomOptions = [
  "Cramps",
  "Bloating",
  "Headache",
  "Fatigue",
  "Nausea",
  "Breast tenderness",
  "Back pain",
  "Mood swings",
  "Acne",
  "Food cravings",
  "Insomnia",
  "Hot flashes",
]

const flowOptions = ["None", "Light", "Medium", "Heavy"]

export default function LogSymptomsPage() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0])
  const [symptoms, setSymptoms] = useState<string[]>([])
  const [flow, setFlow] = useState("")
  const [pain, setPain] = useState([0])
  const [mood, setMood] = useState([5])
  const [energy, setEnergy] = useState([5])
  const [sleep, setSleep] = useState([7])
  const [notes, setNotes] = useState("")
  const [medications, setMedications] = useState("")

  const handleSymptomChange = (symptom: string, checked: boolean) => {
    if (checked) {
      setSymptoms([...symptoms, symptom])
    } else {
      setSymptoms(symptoms.filter((s) => s !== symptom))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({
      date: selectedDate,
      symptoms,
      flow,
      pain: pain[0],
      mood: mood[0],
      energy: energy[0],
      sleep: sleep[0],
      notes,
      medications,
    })
    // Redirect back to tracking page
    window.location.href = "/tracking"
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="tracking" />
      <DashboardHeader />

      <main className="lg:ml-64 p-6">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center gap-4">
            <Link href="/tracking">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Calendar
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                Log Symptoms
              </h1>
              <p className="text-muted-foreground">Record your daily health information</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Date selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-[family-name:var(--font-poppins)]">
                  <Calendar className="h-5 w-5 text-primary" />
                  Date
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="date">Select Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    max={new Date().toISOString().split("T")[0]}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Menstrual flow */}
            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-poppins)]">Menstrual Flow</CardTitle>
                <CardDescription>Select your flow level for today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {flowOptions.map((option) => (
                    <Button
                      key={option}
                      type="button"
                      variant={flow === option ? "default" : "outline"}
                      className={`${
                        flow === option ? "bg-primary text-primary-foreground" : "bg-transparent hover:bg-muted/50"
                      }`}
                      onClick={() => setFlow(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Symptoms */}
            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-poppins)]">Symptoms</CardTitle>
                <CardDescription>Select all symptoms you're experiencing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {symptomOptions.map((symptom) => (
                    <div key={symptom} className="flex items-center space-x-2">
                      <Checkbox
                        id={symptom}
                        checked={symptoms.includes(symptom)}
                        onCheckedChange={(checked) => handleSymptomChange(symptom, checked as boolean)}
                      />
                      <Label htmlFor={symptom} className="text-sm">
                        {symptom}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Rating scales */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-[family-name:var(--font-poppins)]">Pain Level</CardTitle>
                  <CardDescription>Rate your pain from 0 (none) to 10 (severe)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="px-2">
                    <Slider value={pain} onValueChange={setPain} max={10} step={1} className="w-full" />
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>No pain</span>
                    <span className="font-medium text-foreground">{pain[0]}/10</span>
                    <span>Severe pain</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-[family-name:var(--font-poppins)]">Mood</CardTitle>
                  <CardDescription>Rate your mood from 1 (very low) to 10 (excellent)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="px-2">
                    <Slider value={mood} onValueChange={setMood} min={1} max={10} step={1} className="w-full" />
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Very low</span>
                    <span className="font-medium text-foreground">{mood[0]}/10</span>
                    <span>Excellent</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-[family-name:var(--font-poppins)]">Energy Level</CardTitle>
                  <CardDescription>Rate your energy from 1 (exhausted) to 10 (energetic)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="px-2">
                    <Slider value={energy} onValueChange={setEnergy} min={1} max={10} step={1} className="w-full" />
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Exhausted</span>
                    <span className="font-medium text-foreground">{energy[0]}/10</span>
                    <span>Energetic</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-[family-name:var(--font-poppins)]">Sleep Quality</CardTitle>
                  <CardDescription>Hours of sleep you got last night</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="px-2">
                    <Slider value={sleep} onValueChange={setSleep} min={0} max={12} step={0.5} className="w-full" />
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>0 hours</span>
                    <span className="font-medium text-foreground">{sleep[0]} hours</span>
                    <span>12 hours</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional information */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-[family-name:var(--font-poppins)]">Medications</CardTitle>
                  <CardDescription>Any medications or supplements taken today</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="e.g., Ibuprofen 400mg, Vitamin D..."
                    value={medications}
                    onChange={(e) => setMedications(e.target.value)}
                    rows={3}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-[family-name:var(--font-poppins)]">Notes</CardTitle>
                  <CardDescription>Any additional observations or thoughts</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="How are you feeling today? Any triggers or patterns you noticed?"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Submit button */}
            <div className="flex gap-4 pt-4">
              <Link href="/tracking" className="flex-1">
                <Button type="button" variant="outline" className="w-full bg-transparent">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                <Save className="mr-2 h-4 w-4" />
                Save Entry
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
