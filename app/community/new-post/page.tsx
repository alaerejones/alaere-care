"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Navigation, DashboardHeader } from "@/components/navigation"
import { ArrowLeft, Send, AlertCircle } from "lucide-react"
import Link from "next/link"

const categories = ["PCOS Support", "Endometriosis Warriors", "Fibroid Support", "Nutrition & Wellness"]

export default function NewPostPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
    isAnonymous: false,
    agreedToGuidelines: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("New post:", formData)
    // Redirect back to community
    window.location.href = "/community"
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="community" />
      <DashboardHeader />

      <main className="lg:ml-64 p-6">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center gap-4">
            <Link href="/community">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Community
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                Create New Post
              </h1>
              <p className="text-muted-foreground">Share your thoughts with the community</p>
            </div>
          </div>

          {/* Guidelines reminder */}
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Before you post</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Be respectful and supportive to all community members</li>
                    <li>• Share experiences, not medical advice</li>
                    <li>• Use content warnings for sensitive topics</li>
                    <li>• Search existing posts to avoid duplicates</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Post details */}
            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-poppins)]">Post Details</CardTitle>
                <CardDescription>Help others find and engage with your post</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Post Title</Label>
                  <Input
                    id="title"
                    placeholder="What would you like to discuss?"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Post content */}
            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-poppins)]">Your Message</CardTitle>
                <CardDescription>Share your thoughts, experiences, or questions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    placeholder="Write your post here... Remember to be supportive and respectful."
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={8}
                    required
                  />
                  <p className="text-xs text-muted-foreground">{formData.content.length}/2000 characters</p>
                </div>
              </CardContent>
            </Card>

            {/* Privacy options */}
            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-poppins)]">Privacy Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="anonymous"
                    checked={formData.isAnonymous}
                    onCheckedChange={(checked) => setFormData({ ...formData, isAnonymous: checked as boolean })}
                  />
                  <Label htmlFor="anonymous" className="text-sm">
                    Post anonymously (your username will be hidden)
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Agreement */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="guidelines"
                    checked={formData.agreedToGuidelines}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreedToGuidelines: checked as boolean })}
                    required
                  />
                  <Label htmlFor="guidelines" className="text-sm">
                    I agree to follow the{" "}
                    <Link href="/community/guidelines" className="text-primary hover:underline">
                      community guidelines
                    </Link>{" "}
                    and understand that this is not a substitute for professional medical advice
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Submit buttons */}
            <div className="flex gap-4 pt-4">
              <Link href="/community" className="flex-1">
                <Button type="button" variant="outline" className="w-full bg-transparent">
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={!formData.agreedToGuidelines}
              >
                <Send className="mr-2 h-4 w-4" />
                Post to Community
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
