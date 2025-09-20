"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Navigation, DashboardHeader } from "@/components/navigation"
import { ArrowLeft, Plus, Pill, Bell, Calendar, Trash2, Edit } from "lucide-react"
import Link from "next/link"

// Sample medication data (same as in appointments page)
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
    notes: "Take with food to reduce stomach upset",
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
    notes: "Best absorbed with fat-containing meal",
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
    notes: "",
  },
]

export default function MedicationsPage() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [newMedication, setNewMedication] = useState({
    name: "",
    dosage: "",
    frequency: "",
    prescribedBy: "",
    startDate: "",
    reminders: false,
    notes: "",
  })

  const handleAddMedication = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle adding new medication
    console.log("New medication:", newMedication)
    setShowAddForm(false)
    setNewMedication({
      name: "",
      dosage: "",
      frequency: "",
      prescribedBy: "",
      startDate: "",
      reminders: false,
      notes: "",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="appointments" />
      <DashboardHeader />

      <main className="lg:ml-64 p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/appointments">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Appointments
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                  Medication Management
                </h1>
                <p className="text-muted-foreground">Track your medications and set reminders</p>
              </div>
            </div>
            <Button
              onClick={() => setShowAddForm(true)}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Medication
            </Button>
          </div>

          {/* Add medication form */}
          {showAddForm && (
            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-poppins)]">Add New Medication</CardTitle>
                <CardDescription>Enter the details of your new medication</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddMedication} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Medication Name</Label>
                      <Input
                        id="name"
                        placeholder="e.g., Metformin"
                        value={newMedication.name}
                        onChange={(e) => setNewMedication({ ...newMedication, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dosage">Dosage</Label>
                      <Input
                        id="dosage"
                        placeholder="e.g., 500mg"
                        value={newMedication.dosage}
                        onChange={(e) => setNewMedication({ ...newMedication, dosage: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="frequency">Frequency</Label>
                      <Input
                        id="frequency"
                        placeholder="e.g., Twice daily with meals"
                        value={newMedication.frequency}
                        onChange={(e) => setNewMedication({ ...newMedication, frequency: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prescribedBy">Prescribed By</Label>
                      <Input
                        id="prescribedBy"
                        placeholder="e.g., Dr. Sarah Johnson"
                        value={newMedication.prescribedBy}
                        onChange={(e) => setNewMedication({ ...newMedication, prescribedBy: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={newMedication.startDate}
                      onChange={(e) => setNewMedication({ ...newMedication, startDate: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any special instructions or notes"
                      value={newMedication.notes}
                      onChange={(e) => setNewMedication({ ...newMedication, notes: e.target.value })}
                      rows={2}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="reminders"
                      checked={newMedication.reminders}
                      onCheckedChange={(checked) =>
                        setNewMedication({ ...newMedication, reminders: checked as boolean })
                      }
                    />
                    <Label htmlFor="reminders" className="text-sm">
                      Enable daily reminders
                    </Label>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowAddForm(false)}
                      className="flex-1 bg-transparent"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                      Add Medication
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Current medications */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
              Current Medications ({medications.length})
            </h2>

            {medications.map((medication) => (
              <Card key={medication.id} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Pill className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-semibold text-foreground">
                          {medication.name} {medication.dosage}
                        </h3>
                        {medication.reminders && (
                          <Badge variant="secondary" className="text-xs">
                            <Bell className="h-3 w-3 mr-1" />
                            Reminders On
                          </Badge>
                        )}
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="font-medium text-foreground">Frequency:</span>
                            <p className="text-muted-foreground">{medication.frequency}</p>
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Prescribed by:</span>
                            <p className="text-muted-foreground">{medication.prescribedBy}</p>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="font-medium text-foreground">Started:</span>
                            <p className="text-muted-foreground">
                              {new Date(medication.startDate).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Next refill:</span>
                            <p className="text-muted-foreground">
                              {new Date(medication.nextRefill).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                        </div>
                      </div>

                      {medication.notes && (
                        <div className="p-3 bg-muted/30 rounded-lg mb-4">
                          <span className="font-medium text-foreground text-sm">Notes:</span>
                          <p className="text-sm text-muted-foreground mt-1">{medication.notes}</p>
                        </div>
                      )}

                      <div className="flex items-center gap-4">
                        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                          <Calendar className="h-3 w-3 mr-1" />
                          Log Dose
                        </Button>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          Set Reminder
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 ml-6">
                      <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-foreground">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Medication reminders */}
          <Card>
            <CardHeader>
              <CardTitle className="font-[family-name:var(--font-poppins)]">Reminder Settings</CardTitle>
              <CardDescription>Manage your medication reminder preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div>
                  <h4 className="font-medium text-foreground">Daily Reminders</h4>
                  <p className="text-sm text-muted-foreground">Get notified when it's time to take your medications</p>
                </div>
                <Checkbox defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div>
                  <h4 className="font-medium text-foreground">Refill Reminders</h4>
                  <p className="text-sm text-muted-foreground">Get notified 7 days before your prescription runs out</p>
                </div>
                <Checkbox defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div>
                  <h4 className="font-medium text-foreground">Appointment Reminders</h4>
                  <p className="text-sm text-muted-foreground">Get notified about upcoming medical appointments</p>
                </div>
                <Checkbox defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
