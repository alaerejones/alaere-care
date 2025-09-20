"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Calendar, Plus, TrendingUp, Heart, Users, BookOpen, Stethoscope, Bell, Settings, Menu, X } from "lucide-react"
import Link from "next/link"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Sample data for charts
const symptomData = [
  { day: "Mon", pain: 3, mood: 7, energy: 6 },
  { day: "Tue", pain: 4, mood: 6, energy: 5 },
  { day: "Wed", pain: 2, mood: 8, energy: 7 },
  { day: "Thu", pain: 3, mood: 7, energy: 6 },
  { day: "Fri", pain: 5, mood: 5, energy: 4 },
  { day: "Sat", pain: 2, mood: 8, energy: 8 },
  { day: "Sun", pain: 1, mood: 9, energy: 8 },
]

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                <span className="font-semibold text-foreground font-[family-name:var(--font-poppins)]">
                  Alaere Care
                </span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <nav className="p-4 space-y-2">
              <Link href="/dashboard">
                <Button variant="secondary" className="w-full justify-start bg-secondary/50">
                  <Heart className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              <Link href="/tracking">
                <Button variant="ghost" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Cycle Tracking
                </Button>
              </Link>
              <Link href="/resources">
                <Button variant="ghost" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Resources
                </Button>
              </Link>
              <Link href="/community">
                <Button variant="ghost" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Community
                </Button>
              </Link>
              <Link href="/appointments">
                <Button variant="ghost" className="w-full justify-start">
                  <Stethoscope className="mr-2 h-4 w-4" />
                  Appointments
                </Button>
              </Link>
              <Link href="/settings">
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:left-0 lg:top-0 lg:h-full lg:w-64 lg:bg-card lg:border-r lg:border-border lg:block">
        <div className="flex items-center gap-2 p-4 border-b border-border">
          <Heart className="h-6 w-6 text-primary" />
          <span className="font-semibold text-foreground font-[family-name:var(--font-poppins)]">Alaere Care</span>
        </div>
        <nav className="p-4 space-y-2">
          <Link href="/dashboard">
            <Button variant="secondary" className="w-full justify-start bg-secondary/50">
              <Heart className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          <Link href="/tracking">
            <Button variant="ghost" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              Cycle Tracking
            </Button>
          </Link>
          <Link href="/resources">
            <Button variant="ghost" className="w-full justify-start">
              <BookOpen className="mr-2 h-4 w-4" />
              Resources
            </Button>
          </Link>
          <Link href="/community">
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Community
            </Button>
          </Link>
          <Link href="/appointments">
            <Button variant="ghost" className="w-full justify-start">
              <Stethoscope className="mr-2 h-4 w-4" />
              Appointments
            </Button>
          </Link>
          <Link href="/settings">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Top header */}
        <header className="bg-card border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                  Good morning, Sarah
                </h1>
                <p className="text-muted-foreground">Here's your health overview for today</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-primary-foreground">S</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="p-6 space-y-6">
          {/* Quick actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/tracking/log">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Plus className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Log Symptoms</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/tracking">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">View Calendar</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/community">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Community</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/appointments">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Stethoscope className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Appointments</p>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Health insights */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Cycle status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-[family-name:var(--font-poppins)]">
                  <Calendar className="h-5 w-5 text-primary" />
                  Cycle Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Current phase</span>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Follicular
                    </Badge>
                  </div>
                  <p className="text-2xl font-bold text-foreground">Day 8</p>
                  <p className="text-sm text-muted-foreground">Next period in ~20 days</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Cycle progress</span>
                    <span>29%</span>
                  </div>
                  <Progress value={29} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Recent symptoms */}
            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-poppins)]">Recent Symptoms</CardTitle>
                <CardDescription>Last 7 days average</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Pain Level</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">2.9/10</span>
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Mood</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">7.1/10</span>
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Energy</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">6.3/10</span>
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming */}
            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-poppins)]">Upcoming</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Dr. Johnson Appointment</p>
                      <p className="text-xs text-muted-foreground">Tomorrow, 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Medication Reminder</p>
                      <p className="text-xs text-muted-foreground">Daily at 8:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg">
                    <div className="w-2 h-2 bg-chart-2 rounded-full" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Period Expected</p>
                      <p className="text-xs text-muted-foreground">In 20 days</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Symptom trends chart */}
          <Card>
            <CardHeader>
              <CardTitle className="font-[family-name:var(--font-poppins)]">Weekly Symptom Trends</CardTitle>
              <CardDescription>Track your symptoms over the past week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={symptomData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="pain"
                      stroke="hsl(var(--chart-1))"
                      strokeWidth={2}
                      name="Pain Level"
                    />
                    <Line type="monotone" dataKey="mood" stroke="hsl(var(--chart-2))" strokeWidth={2} name="Mood" />
                    <Line type="monotone" dataKey="energy" stroke="hsl(var(--accent))" strokeWidth={2} name="Energy" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Recent activity */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-poppins)]">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Plus className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Logged symptoms</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                      <BookOpen className="h-4 w-4 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Read article: "Managing PCOS"</p>
                      <p className="text-xs text-muted-foreground">Yesterday</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-chart-2/10 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-chart-2" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Posted in community</p>
                      <p className="text-xs text-muted-foreground">3 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-poppins)]">Health Tips</CardTitle>
                <CardDescription>Personalized recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="font-medium text-foreground mb-2">Stay Hydrated</h4>
                  <p className="text-sm text-muted-foreground">
                    Drinking plenty of water can help reduce bloating and improve energy levels during your cycle.
                  </p>
                </div>
                <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <h4 className="font-medium text-foreground mb-2">Gentle Exercise</h4>
                  <p className="text-sm text-muted-foreground">
                    Light yoga or walking can help manage pain and improve mood during your follicular phase.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
