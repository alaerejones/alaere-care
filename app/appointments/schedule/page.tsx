"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Navigation, DashboardHeader } from "@/components/navigation"
import { ArrowLeft, Calendar, MapPin, Video, User } from "lucide-react"
import Link from "next/link"

const appointmentTypes = [
  {
    id: "gynecologist",
    name: "Gynecologist",
    description: "Reproductive health specialist",
    icon: User,
  },
  {
    id: "endocrinologist",
    name: "Endocrinologist",
    description: "Hormone specialist",
    icon: User,
  },
  {
    id: "nutritionist",
    name: "Nutritionist",
    description: "Diet and nutrition counseling",
    icon: User,
  },
  {
    id: "therapist",
    name: "Therapist",
    description: "Mental health support",
    icon: User,
  },
]

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
]

export default function ScheduleAppointmentPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    appointmentType: "",
    preferredDate: "",
    preferredTime: "",
    visitType: "in-person",
    reason: "",
    notes: "",
    contactPhone: "",
    contactEmail: "",
  })

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Appointment request:", formData)
    // Redirect back to appointments
    window.location.href = "/appointments"
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="appointments" />
      <DashboardHeader />

      <main className="lg:ml-64 p-6">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center gap-4">
            <Link href="/appointments">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Appointments
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                Schedule Appointment
              </h1>
              <p className="text-muted-foreground">Book your next healthcare appointment</p>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center justify-center mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    i <= step
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground border border-border"
                  }`}
                >
                  {i}
                </div>
                {i < 3 && <div className={`w-12 h-0.5 ${i < step ? "bg-primary" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Appointment Type */}
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-[family-name:var(--font-poppins)]">Select Appointment Type</CardTitle>
                  <CardDescription>Choose the type of healthcare provider you'd like to see</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {appointmentTypes.map((type) => (
                      <Card
                        key={type.id}
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          formData.appointmentType === type.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setFormData({ ...formData, appointmentType: type.id })}
                      >
                        <CardContent className="p-4 text-center">
                          <type.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                          <h3 className="font-semibold text-foreground mb-1">{type.name}</h3>
                          <p className="text-sm text-muted-foreground">{type.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Date and Time */}
            {step === 2 && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-[family-name:var(--font-poppins)]">Select Date & Time</CardTitle>
                    <CardDescription>Choose your preferred appointment date and time</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        min={new Date().toISOString().split("T")[0]}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Preferred Time</Label>
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            type="button"
                            variant={formData.preferredTime === time ? "default" : "outline"}
                            size="sm"
                            onClick={() => setFormData({ ...formData, preferredTime: time })}
                            className={
                              formData.preferredTime === time ? "bg-primary text-primary-foreground" : "bg-transparent"
                            }
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-[family-name:var(--font-poppins)]">Visit Type</CardTitle>
                    <CardDescription>Choose how you'd like to attend your appointment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          formData.visitType === "in-person"
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setFormData({ ...formData, visitType: "in-person" })}
                      >
                        <CardContent className="p-4 text-center">
                          <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                          <h3 className="font-semibold text-foreground mb-1">In-Person</h3>
                          <p className="text-sm text-muted-foreground">Visit the healthcare provider's office</p>
                        </CardContent>
                      </Card>

                      <Card
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          formData.visitType === "telehealth"
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setFormData({ ...formData, visitType: "telehealth" })}
                      >
                        <CardContent className="p-4 text-center">
                          <Video className="h-8 w-8 text-primary mx-auto mb-2" />
                          <h3 className="font-semibold text-foreground mb-1">Telehealth</h3>
                          <p className="text-sm text-muted-foreground">Video call from home</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Step 3: Details */}
            {step === 3 && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-[family-name:var(--font-poppins)]">Appointment Details</CardTitle>
                    <CardDescription>Provide additional information about your visit</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="reason">Reason for Visit</Label>
                      <Input
                        id="reason"
                        placeholder="e.g., Follow-up appointment, new symptoms, routine check-up"
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        placeholder="Any additional information you'd like to share with your healthcare provider"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-[family-name:var(--font-poppins)]">Contact Information</CardTitle>
                    <CardDescription>How should we contact you about this appointment?</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.contactPhone}
                        onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.contactEmail}
                        onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                        required
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex gap-3 pt-4">
              {step > 1 && (
                <Button type="button" variant="outline" onClick={handleBack} className="flex-1 bg-transparent">
                  Back
                </Button>
              )}
              {step < 3 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 bg-primary hover:bg-primary/90"
                  disabled={
                    (step === 1 && !formData.appointmentType) ||
                    (step === 2 && (!formData.preferredDate || !formData.preferredTime))
                  }
                >
                  Continue
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                  disabled={!formData.reason || !formData.contactPhone || !formData.contactEmail}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Request Appointment
                </Button>
              )}
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
