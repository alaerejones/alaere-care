"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation, DashboardHeader } from "@/components/navigation"
import { ArrowLeft, BookOpen, Clock, User, Share, Bookmark, ThumbsUp, Play } from "lucide-react"
import Link from "next/link"

// This would normally come from a database or API
const sampleArticle = {
  id: 1,
  title: "Understanding PCOS: A Comprehensive Guide",
  description: "Learn about the symptoms, causes, and management strategies for Polycystic Ovary Syndrome.",
  type: "article",
  category: "PCOS",
  readTime: "8 min read",
  author: "Dr. Sarah Johnson",
  authorBio: "Reproductive Endocrinologist with 15+ years of experience specializing in PCOS and hormonal disorders.",
  image: "/pcos-guide-illustration.jpg",
  tags: ["PCOS", "Symptoms", "Diagnosis"],
  publishDate: "March 15, 2024",
  content: `
    <h2>What is PCOS?</h2>
    <p>Polycystic Ovary Syndrome (PCOS) is a hormonal disorder that affects women of reproductive age. It's one of the most common endocrine disorders, affecting 6-12% of women worldwide.</p>
    
    <h2>Common Symptoms</h2>
    <p>PCOS symptoms can vary widely from person to person, but commonly include:</p>
    <ul>
      <li>Irregular or absent menstrual periods</li>
      <li>Excess hair growth (hirsutism)</li>
      <li>Acne and oily skin</li>
      <li>Weight gain or difficulty losing weight</li>
      <li>Hair thinning or male-pattern baldness</li>
      <li>Insulin resistance</li>
    </ul>
    
    <h2>Diagnosis</h2>
    <p>PCOS is typically diagnosed using the Rotterdam criteria, which requires at least two of the following three features:</p>
    <ol>
      <li>Irregular ovulation or anovulation</li>
      <li>Clinical or biochemical signs of hyperandrogenism</li>
      <li>Polycystic ovaries on ultrasound</li>
    </ol>
    
    <h2>Management Strategies</h2>
    <p>While there's no cure for PCOS, symptoms can be effectively managed through:</p>
    <ul>
      <li><strong>Lifestyle modifications:</strong> Regular exercise and a balanced diet</li>
      <li><strong>Medications:</strong> Birth control pills, metformin, or fertility treatments</li>
      <li><strong>Symptom-specific treatments:</strong> For acne, hair growth, or weight management</li>
    </ul>
    
    <h2>Living with PCOS</h2>
    <p>Managing PCOS is a journey that requires patience and support. Working with healthcare providers, maintaining healthy habits, and connecting with others who understand your experience can make a significant difference in your quality of life.</p>
  `,
}

export default function ResourceDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="resources" />
      <DashboardHeader />

      <main className="lg:ml-64 p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Back button */}
          <Link href="/resources">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Resources
            </Button>
          </Link>

          {/* Article header */}
          <Card>
            <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
              <img
                src={sampleArticle.image || "/placeholder.svg"}
                alt={sampleArticle.title}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-4">
                {sampleArticle.type === "video" ? (
                  <Play className="h-4 w-4 text-accent" />
                ) : (
                  <BookOpen className="h-4 w-4 text-primary" />
                )}
                <Badge variant="secondary">{sampleArticle.category}</Badge>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{sampleArticle.publishDate}</span>
              </div>
              <CardTitle className="text-3xl font-bold font-[family-name:var(--font-poppins)] text-balance">
                {sampleArticle.title}
              </CardTitle>
              <CardDescription className="text-lg text-pretty">{sampleArticle.description}</CardDescription>

              {/* Author and meta info */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{sampleArticle.author}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {sampleArticle.readTime}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Share className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Article content */}
          <Card>
            <CardContent className="p-8">
              <div
                className="prose prose-lg max-w-none prose-headings:font-[family-name:var(--font-poppins)] prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: sampleArticle.content }}
              />
            </CardContent>
          </Card>

          {/* Author bio */}
          <Card>
            <CardHeader>
              <CardTitle className="font-[family-name:var(--font-poppins)]">About the Author</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">{sampleArticle.author}</h3>
                  <p className="text-muted-foreground">{sampleArticle.authorBio}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-foreground mr-2">Tags:</span>
                {sampleArticle.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Engagement actions */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Helpful (24)
                  </Button>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Share className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">Was this article helpful? Let us know!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
