"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Navigation, DashboardHeader } from "@/components/navigation"
import { Search, BookOpen, Play, Clock, User, Heart, Utensils, Dumbbell, Brain } from "lucide-react"

// Sample resource data
const resources = [
  {
    id: 1,
    title: "Understanding PCOS: A Comprehensive Guide",
    description: "Learn about the symptoms, causes, and management strategies for Polycystic Ovary Syndrome.",
    type: "article",
    category: "PCOS",
    readTime: "8 min read",
    author: "Dr. Sarah Johnson",
    image: "/pcos-guide-illustration.jpg",
    tags: ["PCOS", "Symptoms", "Diagnosis"],
    featured: true,
  },
  {
    id: 2,
    title: "Nutrition for Endometriosis Management",
    description: "Discover anti-inflammatory foods and dietary strategies to help manage endometriosis symptoms.",
    type: "article",
    category: "Nutrition",
    readTime: "6 min read",
    author: "Nutritionist Emma Davis",
    image: "/nutrition-endometriosis.jpg",
    tags: ["Endometriosis", "Nutrition", "Anti-inflammatory"],
    featured: false,
  },
  {
    id: 3,
    title: "Gentle Yoga for Menstrual Pain Relief",
    description: "Follow along with this 20-minute yoga sequence designed to ease menstrual cramps and tension.",
    type: "video",
    category: "Exercise",
    readTime: "20 min",
    author: "Yoga Instructor Lisa Chen",
    image: "/yoga-menstrual-relief.jpg",
    tags: ["Exercise", "Yoga", "Pain Relief"],
    featured: true,
  },
  {
    id: 4,
    title: "Fibroids: Treatment Options Explained",
    description:
      "Explore different treatment approaches for uterine fibroids, from lifestyle changes to medical interventions.",
    type: "article",
    category: "Fibroids",
    readTime: "10 min read",
    author: "Dr. Michael Rodriguez",
    image: "/fibroids-treatment.jpg",
    tags: ["Fibroids", "Treatment", "Medical"],
    featured: false,
  },
  {
    id: 5,
    title: "Mental Health and Reproductive Conditions",
    description: "Understanding the connection between reproductive health conditions and mental wellbeing.",
    type: "article",
    category: "Mental Health",
    readTime: "7 min read",
    author: "Dr. Amanda Foster",
    image: "/mental-health-reproductive.jpg",
    tags: ["Mental Health", "Wellbeing", "Support"],
    featured: false,
  },
  {
    id: 6,
    title: "Meditation for Hormone Balance",
    description: "Learn mindfulness techniques that may help support hormonal balance and reduce stress.",
    type: "video",
    category: "Mental Health",
    readTime: "15 min",
    author: "Mindfulness Coach Rachel Green",
    image: "/meditation-hormones.jpg",
    tags: ["Meditation", "Stress", "Hormones"],
    featured: false,
  },
]

const categories = ["All", "PCOS", "Endometriosis", "Fibroids", "Nutrition", "Exercise", "Mental Health"]

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedType, setSelectedType] = useState("all")

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory
    const matchesType = selectedType === "all" || resource.type === selectedType

    return matchesSearch && matchesCategory && matchesType
  })

  const featuredResources = resources.filter((resource) => resource.featured)

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="resources" />
      <DashboardHeader />

      <main className="lg:ml-64 p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
              Resources & Education
            </h1>
            <p className="text-muted-foreground">Evidence-based information to support your health journey</p>
          </div>
        </div>

        {/* Search and filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles, videos, and guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-3 py-2 border border-border rounded-md bg-background text-foreground"
                >
                  <option value="all">All Types</option>
                  <option value="article">Articles</option>
                  <option value="video">Videos</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-primary text-primary-foreground" : "bg-transparent"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Featured resources */}
        {searchTerm === "" && selectedCategory === "All" && selectedType === "all" && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-[family-name:var(--font-poppins)]">
              Featured Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredResources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                    <img
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {resource.type === "video" ? (
                        <Play className="h-4 w-4 text-accent" />
                      ) : (
                        <BookOpen className="h-4 w-4 text-primary" />
                      )}
                      <Badge variant="secondary" className="text-xs">
                        {resource.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Featured
                      </Badge>
                    </div>
                    <CardTitle className="font-[family-name:var(--font-poppins)] text-lg">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {resource.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {resource.readTime}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {resource.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All resources */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
              {searchTerm || selectedCategory !== "All" || selectedType !== "all" ? "Search Results" : "All Resources"}
            </h2>
            <p className="text-muted-foreground">{filteredResources.length} resources found</p>
          </div>

          {filteredResources.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No resources found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms or filters</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                    <img
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      {resource.type === "video" ? (
                        <Play className="h-4 w-4 text-accent" />
                      ) : (
                        <BookOpen className="h-4 w-4 text-primary" />
                      )}
                      <Badge variant="secondary" className="text-xs">
                        {resource.category}
                      </Badge>
                      {resource.featured && (
                        <Badge variant="outline" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="font-[family-name:var(--font-poppins)] text-base leading-tight">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-2">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {resource.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {resource.readTime}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {resource.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {resource.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{resource.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Quick access categories */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4 font-[family-name:var(--font-poppins)]">
            Browse by Topic
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedCategory("PCOS")}
            >
              <CardContent className="p-6 text-center">
                <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">PCOS</h3>
                <p className="text-sm text-muted-foreground">
                  {resources.filter((r) => r.category === "PCOS").length} resources
                </p>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedCategory("Nutrition")}
            >
              <CardContent className="p-6 text-center">
                <Utensils className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Nutrition</h3>
                <p className="text-sm text-muted-foreground">
                  {resources.filter((r) => r.category === "Nutrition").length} resources
                </p>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedCategory("Exercise")}
            >
              <CardContent className="p-6 text-center">
                <Dumbbell className="h-8 w-8 text-chart-2 mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Exercise</h3>
                <p className="text-sm text-muted-foreground">
                  {resources.filter((r) => r.category === "Exercise").length} resources
                </p>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedCategory("Mental Health")}
            >
              <CardContent className="p-6 text-center">
                <Brain className="h-8 w-8 text-chart-3 mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Mental Health</h3>
                <p className="text-sm text-muted-foreground">
                  {resources.filter((r) => r.category === "Mental Health").length} resources
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
