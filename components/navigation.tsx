"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Calendar, Users, BookOpen, Stethoscope, Settings, Menu, X, Bell } from "lucide-react"
import Link from "next/link"

interface NavigationProps {
  currentPage?: string
}

export function Navigation({ currentPage = "dashboard" }: NavigationProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navItems = [
    { href: "/dashboard", icon: Heart, label: "Dashboard", id: "dashboard" },
    { href: "/tracking", icon: Calendar, label: "Cycle Tracking", id: "tracking" },
    { href: "/resources", icon: BookOpen, label: "Resources", id: "resources" },
    { href: "/community", icon: Users, label: "Community", id: "community" },
    { href: "/appointments", icon: Stethoscope, label: "Appointments", id: "appointments" },
    { href: "/settings", icon: Settings, label: "Settings", id: "settings" },
  ]

  return (
    <>
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
              {navItems.map((item) => (
                <Link key={item.id} href={item.href}>
                  <Button
                    variant={currentPage === item.id ? "secondary" : "ghost"}
                    className={`w-full justify-start ${currentPage === item.id ? "bg-secondary/50" : ""}`}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              ))}
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
          {navItems.map((item) => (
            <Link key={item.id} href={item.href}>
              <Button
                variant={currentPage === item.id ? "secondary" : "ghost"}
                className={`w-full justify-start ${currentPage === item.id ? "bg-secondary/50" : ""}`}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="lg:hidden fixed top-4 left-4 z-40"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu className="h-4 w-4" />
      </Button>
    </>
  )
}

export function DashboardHeader({ userName = "Sarah" }: { userName?: string }) {
  return (
    <header className="bg-card border-b border-border p-4 lg:ml-64">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="lg:hidden w-10" /> {/* Spacer for mobile menu button */}
          <div>
            <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
              Good morning, {userName}
            </h1>
            <p className="text-muted-foreground">Here's your health overview for today</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Bell className="h-4 w-4" />
          </Button>
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-primary-foreground">{userName.charAt(0)}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
