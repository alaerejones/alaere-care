"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation, DashboardHeader } from "@/components/navigation"
import { Calendar, ChevronLeft, ChevronRight, Plus, TrendingUp, BarChart3 } from "lucide-react"
import Link from "next/link"

// Sample cycle data
const cycleData = {
  currentDay: 8,
  cycleLength: 28,
  periodLength: 5,
  phase: "Follicular",
  nextPeriod: 20,
}

// Sample calendar data with symptoms
const calendarData = [
  { date: 1, period: true, symptoms: ["cramps", "fatigue"], mood: 4, pain: 6 },
  { date: 2, period: true, symptoms: ["cramps", "bloating"], mood: 5, pain: 7 },
  { date: 3, period: true, symptoms: ["fatigue"], mood: 6, pain: 4 },
  { date: 4, period: true, symptoms: [], mood: 7, pain: 3 },
  { date: 5, period: true, symptoms: [], mood: 8, pain: 2 },
  { date: 6, period: false, symptoms: [], mood: 8, pain: 1 },
  { date: 7, period: false, symptoms: ["headache"], mood: 7, pain: 2 },
  { date: 8, period: false, symptoms: [], mood: 8, pain: 1, isToday: true },
  // Add more days...
]

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export default function TrackingPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay()
  }

  const navigateMonth = (direction: "prev" | "next") => {
    if (direction === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11)
        setCurrentYear(currentYear - 1)
      } else {
        setCurrentMonth(currentMonth - 1)
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0)
        setCurrentYear(currentYear + 1)
      } else {
        setCurrentMonth(currentMonth + 1)
      }
    }
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear)
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear)
    const days = []

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-20" />)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayData = calendarData.find((d) => d.date === day)
      const isToday = dayData?.isToday || false
      const isPeriod = dayData?.period || false
      const hasSymptoms = dayData?.symptoms && dayData.symptoms.length > 0

      days.push(
        <div
          key={day}
          className={`h-20 border border-border p-2 cursor-pointer hover:bg-muted/30 transition-colors ${
            isToday ? "bg-primary/10 border-primary" : ""
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-1">
              <span className={`text-sm font-medium ${isToday ? "text-primary" : "text-foreground"}`}>{day}</span>
              {isPeriod && <div className="w-2 h-2 bg-accent rounded-full" />}
            </div>
            {hasSymptoms && (
              <div className="flex-1 flex flex-wrap gap-1">
                {dayData?.symptoms?.slice(0, 2).map((symptom, index) => (
                  <Badge key={index} variant="secondary" className="text-xs px-1 py-0">
                    {symptom}
                  </Badge>
                ))}
                {dayData?.symptoms && dayData.symptoms.length > 2 && (
                  <Badge variant="secondary" className="text-xs px-1 py-0">
                    +{dayData.symptoms.length - 2}
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>,
      )
    }

    return days
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="tracking" />
      <DashboardHeader />

      <main className="lg:ml-64 p-6 space-y-6">
        {/* Header with quick stats */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
              Cycle Tracking
            </h1>
            <p className="text-muted-foreground">Monitor your menstrual cycle and symptoms</p>
          </div>
          <div className="flex gap-3">
            <Link href="/tracking/log">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                Log Symptoms
              </Button>
            </Link>
            <Link href="/tracking/insights">
              <Button variant="outline" className="bg-transparent">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Insights
              </Button>
            </Link>
          </div>
        </div>

        {/* Cycle overview cards */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Current Day</span>
              </div>
              <p className="text-2xl font-bold text-foreground">Day {cycleData.currentDay}</p>
              <p className="text-xs text-muted-foreground">of {cycleData.cycleLength}-day cycle</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-primary rounded-full" />
                <span className="text-sm font-medium">Current Phase</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{cycleData.phase}</p>
              <p className="text-xs text-muted-foreground">Optimal for exercise</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-accent rounded-full" />
                <span className="text-sm font-medium">Next Period</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{cycleData.nextPeriod} days</p>
              <p className="text-xs text-muted-foreground">Expected date</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium">Avg Pain</span>
              </div>
              <p className="text-2xl font-bold text-foreground">2.9/10</p>
              <p className="text-xs text-green-600">Improving</p>
            </CardContent>
          </Card>
        </div>

        {/* Calendar */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="font-[family-name:var(--font-poppins)]">
                  {monthNames[currentMonth]} {currentYear}
                </CardTitle>
                <CardDescription>Click on any day to view or add symptoms</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => navigateMonth("prev")}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => navigateMonth("next")}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Calendar header */}
            <div className="grid grid-cols-7 gap-0 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                  {day}
                </div>
              ))}
            </div>
            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-0 border border-border rounded-lg overflow-hidden">
              {renderCalendar()}
            </div>
            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full" />
                <span className="text-sm text-muted-foreground">Period</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary/20 border border-primary rounded" />
                <span className="text-sm text-muted-foreground">Today</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  symptom
                </Badge>
                <span className="text-sm text-muted-foreground">Logged symptoms</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent entries */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-[family-name:var(--font-poppins)]">Recent Entries</CardTitle>
              <CardDescription>Your latest symptom logs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">Today - Day 8</p>
                    <p className="text-sm text-muted-foreground">No symptoms logged</p>
                  </div>
                  <Link href="/tracking/log">
                    <Button size="sm" variant="outline" className="bg-transparent">
                      Add
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">Yesterday - Day 7</p>
                    <p className="text-sm text-muted-foreground">Headache, Mood: 7/10</p>
                  </div>
                  <Badge variant="secondary">Logged</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">Day 6</p>
                    <p className="text-sm text-muted-foreground">Mood: 8/10, Energy: 8/10</p>
                  </div>
                  <Badge variant="secondary">Logged</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-[family-name:var(--font-poppins)]">Quick Insights</CardTitle>
              <CardDescription>Patterns from your recent data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-medium text-foreground mb-2">Cycle Regularity</h4>
                <p className="text-sm text-muted-foreground">
                  Your cycles have been consistent at 28 days. Great job tracking!
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-medium text-foreground mb-2">Pain Improvement</h4>
                <p className="text-sm text-muted-foreground">
                  Your average pain levels have decreased by 15% this month compared to last month.
                </p>
              </div>
              <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                <h4 className="font-medium text-foreground mb-2">Mood Patterns</h4>
                <p className="text-sm text-muted-foreground">
                  Your mood tends to improve during the follicular phase. Consider planning activities accordingly.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
