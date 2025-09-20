"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation, DashboardHeader } from "@/components/navigation"
import { Calendar, Plus, Clock, MapPin, Phone, Video, Pill, FileText, Bell } from "lucide-react"
import Link from "next/link"

// Sample appointment data
const upcomingAppointments = [
  {
    id: 1,
    title: "Dr. Sarah Johnson - Gynecologist",
    date: "2024-03-20",
    time: "2:00 PM",
    type: "in-person",
    location: "Women's Health Center, Suite 205",
    phone: "(555) 123-4567",
    notes: "Follow-up for PCOS management",
    status: "confirmed",
  },
  {
    id: 2,
    title: "Dr. Michael Rodriguez - Endocrinologist",
    date: "2024-03-25",
    time: "10:30 AM",
    type: "telehealth",
    location: "Video Call",
    phone: "(555) 987-6543",
    notes: "Hormone level review and medication adjustment",
    status: "confirmed",
  },
  {
    id: 3,
    title: "Lisa Chen - Nutritionist",
    date: "2024-04-02",
    time: "1:15 PM",
    type: "in-person",
    location: "Wellness Center, Room 12",
    phone: "(555) 456-7890",
    notes: "PCOS diet plan consultation",
    status: "pending",
  },
]

const pastAppointments = [
  {
    id: 4,
    title: "Dr. Sarah Johnson - Gynecologist",
    date: "2024-02-15",
    time: "3:00 PM",
    type: "in-person",
    notes: "Initial PCOS consultation and blood work",
    status: "completed",
  },
  {
    id: 5,
    title: "Dr. Amanda Foster - Therapist",
    date: "2024-02-08",
    time: "11:00 AM",
    type: "telehealth",
    notes: "Mental health support session",
    status: "completed",
  },
]

const medications = [
  {
    id: 1,
    name: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily with meals",
    prescribedBy: "Dr. Sarah Johnson",
    startDate: "2024-02-15",
    nextRefill: "2024-04-15",
    reminders: true,
  },
  {
    id: 2,
    name: "Vitamin D3",
    dosage: "2000 IU",
    frequency: "Once daily",
    prescribedBy: "Dr. Michael Rodriguez",
    startDate: "2024-02-20",
    nextRefill: "2024-05-20",
    reminders: true,
  },
  {
    id: 3,
    name: "Omega-3",
    dosage: "1000mg",
    frequency: "Once daily with dinner",
    prescribedBy: "Lisa Chen",
    startDate: "2024-03-01",
    nextRefill: "2024-06-01",
    reminders: false,
  },
]

export default function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
      case "completed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="appointments" />
      <DashboardHeader />

      <main className="lg:ml-64 p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
              Appointments & Care
            </h1>
            <p className="text-muted-foreground">Manage your healthcare appointments and medications</p>
          </div>
          <div className="flex gap-3">
            <Link href="/appointments/schedule">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                Schedule Appointment
              </Button>
            </Link>
            <Link href="/appointments/medications">
              <Button variant="outline" className="bg-transparent">
                <Pill className="mr-2 h-4 w-4" />
                Manage Medications
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Upcoming</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{upcomingAppointments.length}</p>
              <p className="text-xs text-muted-foreground">appointments</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Pill className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">Active</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{medications.length}</p>
              <p className="text-xs text-muted-foreground">medications</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Bell className="h-4 w-4 text-chart-2" />
                <span className="text-sm font-medium">Reminders</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{medications.filter((med) => med.reminders).length}</p>
              <p className="text-xs text-muted-foreground">active</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-4 w-4 text-chart-3" />
                <span className="text-sm font-medium">Records</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{pastAppointments.length}</p>
              <p className="text-xs text-muted-foreground">past visits</p>
            </CardContent>
          </Card>
        </div>

        {/* Appointment tabs */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Button
                variant={activeTab === "upcoming" ? "default" : "ghost"}
                onClick={() => setActiveTab("upcoming")}
                className={activeTab === "upcoming" ? "bg-primary text-primary-foreground" : ""}
              >
                Upcoming Appointments
              </Button>
              <Button
                variant={activeTab === "past" ? "default" : "ghost"}
                onClick={() => setActiveTab("past")}
                className={activeTab === "past" ? "bg-primary text-primary-foreground" : ""}
              >
                Past Appointments
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {activeTab === "upcoming" && (
              <div className="space-y-4">
                {upcomingAppointments.length === 0 ? (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">No upcoming appointments</h3>
                    <p className="text-muted-foreground mb-4">Schedule your next appointment to stay on track</p>
                    <Link href="/appointments/schedule">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Schedule Appointment
                      </Button>
                    </Link>
                  </div>
                ) : (
                  upcomingAppointments.map((appointment) => (
                    <Card key={appointment.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold text-foreground">{appointment.title}</h3>
                              <Badge className={getStatusColor(appointment.status)}>{appointment.status}</Badge>
                            </div>
                            <div className="space-y-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {new Date(appointment.date).toLocaleDateString("en-US", {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {appointment.time}
                              </div>
                              <div className="flex items-center gap-2">
                                {appointment.type === "telehealth" ? (
                                  <Video className="h-4 w-4" />
                                ) : (
                                  <MapPin className="h-4 w-4" />
                                )}
                                {appointment.location}
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                {appointment.phone}
                              </div>
                            </div>
                            {appointment.notes && (
                              <p className="text-sm text-foreground mt-3 p-3 bg-muted/30 rounded-lg">
                                {appointment.notes}
                              </p>
                            )}
                          </div>
                          <div className="flex flex-col gap-2 ml-4">
                            <Button size="sm" variant="outline" className="bg-transparent">
                              Reschedule
                            </Button>
                            <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            )}

            {activeTab === "past" && (
              <div className="space-y-4">
                {pastAppointments.map((appointment) => (
                  <Card key={appointment.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-foreground">{appointment.title}</h3>
                            <Badge className={getStatusColor(appointment.status)}>{appointment.status}</Badge>
                          </div>
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {new Date(appointment.date).toLocaleDateString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              {appointment.time}
                            </div>
                          </div>
                          {appointment.notes && (
                            <p className="text-sm text-foreground mt-3 p-3 bg-muted/30 rounded-lg">
                              {appointment.notes}
                            </p>
                          )}
                        </div>
                        <div className="flex flex-col gap-2 ml-4">
                          <Button size="sm" variant="outline" className="bg-transparent">
                            View Details
                          </Button>
                          <Button size="sm" variant="ghost">
                            Book Follow-up
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Current medications */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="font-[family-name:var(--font-poppins)]">Current Medications</CardTitle>
                <CardDescription>Track your medications and set reminders</CardDescription>
              </div>
              <Link href="/appointments/medications">
                <Button variant="outline" size="sm" className="bg-transparent">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Medication
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {medications.map((medication) => (
                <Card key={medication.id} className="border-l-4 border-l-primary">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-foreground">
                            {medication.name} {medication.dosage}
                          </h4>
                          {medication.reminders && (
                            <Badge variant="secondary" className="text-xs">
                              <Bell className="h-3 w-3 mr-1" />
                              Reminders On
                            </Badge>
                          )}
                        </div>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p>
                            <strong>Frequency:</strong> {medication.frequency}
                          </p>
                          <p>
                            <strong>Prescribed by:</strong> {medication.prescribedBy}
                          </p>
                          <p>
                            <strong>Started:</strong>{" "}
                            {new Date(medication.startDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                          <p>
                            <strong>Next refill:</strong>{" "}
                            {new Date(medication.nextRefill).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 ml-4">
                        <Button size="sm" variant="outline" className="bg-transparent">
                          Edit
                        </Button>
                        <Button size="sm" variant="ghost" className="text-muted-foreground">
                          Log Dose
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Video className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-poppins)]">
                Telemedicine
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Connect with healthcare providers from the comfort of your home
              </p>
              <Button variant="outline" className="bg-transparent">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <FileText className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-poppins)]">
                Health Records
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Access and manage your medical records and test results
              </p>
              <Button variant="outline" className="bg-transparent">
                View Records
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
