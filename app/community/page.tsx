"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Navigation, DashboardHeader } from "@/components/navigation"
import { Search, Plus, MessageCircle, Heart, Users, Pin, User, TrendingUp } from "lucide-react"
import Link from "next/link"

// Sample forum data
const forumCategories = [
  {
    id: 1,
    name: "PCOS Support",
    description: "Share experiences and support for PCOS management",
    postCount: 234,
    memberCount: 89,
    color: "bg-primary/10 text-primary",
    icon: Heart,
  },
  {
    id: 2,
    name: "Endometriosis Warriors",
    description: "Connect with others managing endometriosis",
    postCount: 156,
    memberCount: 67,
    color: "bg-accent/10 text-accent",
    icon: Users,
  },
  {
    id: 3,
    name: "Fibroid Support",
    description: "Discussion and support for fibroid management",
    postCount: 98,
    memberCount: 45,
    color: "bg-chart-2/10 text-chart-2",
    icon: MessageCircle,
  },
  {
    id: 4,
    name: "Nutrition & Wellness",
    description: "Share healthy recipes and wellness tips",
    postCount: 187,
    memberCount: 112,
    color: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400",
    icon: TrendingUp,
  },
]

const recentPosts = [
  {
    id: 1,
    title: "Just got diagnosed with PCOS - feeling overwhelmed",
    author: "Sarah_M",
    category: "PCOS Support",
    replies: 12,
    likes: 8,
    timeAgo: "2 hours ago",
    isPinned: false,
    preview:
      "Hi everyone, I just received my PCOS diagnosis yesterday and I'm feeling really overwhelmed. My doctor gave me some information but I'd love to hear from others who have been through this...",
  },
  {
    id: 2,
    title: "Anti-inflammatory meal prep ideas?",
    author: "HealthyEater23",
    category: "Nutrition & Wellness",
    replies: 24,
    likes: 15,
    timeAgo: "4 hours ago",
    isPinned: true,
    preview:
      "Looking for some easy meal prep ideas that are anti-inflammatory. I work long hours and need something I can prepare on weekends. What are your go-to recipes?",
  },
  {
    id: 3,
    title: "Celebrating 6 months pain-free!",
    author: "EndoWarrior",
    category: "Endometriosis Warriors",
    replies: 18,
    likes: 32,
    timeAgo: "6 hours ago",
    isPinned: false,
    preview:
      "I wanted to share some good news with this amazing community. After trying various treatments and lifestyle changes, I've been pain-free for 6 months now!",
  },
  {
    id: 4,
    title: "Questions about fibroid surgery options",
    author: "Hopeful_Jane",
    category: "Fibroid Support",
    replies: 9,
    likes: 5,
    timeAgo: "8 hours ago",
    isPinned: false,
    preview:
      "My doctor mentioned several surgical options for my fibroids. Has anyone here had experience with myomectomy vs other procedures? I'd love to hear your experiences...",
  },
  {
    id: 5,
    title: "Yoga poses that help with cramps",
    author: "YogaLover",
    category: "Nutrition & Wellness",
    replies: 16,
    likes: 21,
    timeAgo: "12 hours ago",
    isPinned: false,
    preview:
      "I've found that certain yoga poses really help with menstrual cramps. Here are my top 5 poses that provide relief...",
  },
]

export default function CommunityPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = recentPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.preview.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="community" />
      <DashboardHeader />

      <main className="lg:ml-64 p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
              Community Forum
            </h1>
            <p className="text-muted-foreground">Connect with others who understand your journey</p>
          </div>
          <Link href="/community/new-post">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </Link>
        </div>

        {/* Community guidelines banner */}
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Heart className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Community Guidelines</h3>
                <p className="text-sm text-muted-foreground">
                  This is a safe, supportive space. Please be kind, respectful, and remember that medical advice should
                  come from healthcare professionals.{" "}
                  <Link href="/community/guidelines" className="text-primary hover:underline">
                    Read full guidelines
                  </Link>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Forum categories */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4 font-[family-name:var(--font-poppins)]">
            Forum Categories
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {forumCategories.map((category) => (
              <Card key={category.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-3 w-3" />
                          {category.postCount} posts
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {category.memberCount} members
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Search and filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search discussions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Button
                variant={selectedCategory === "All" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("All")}
                className={selectedCategory === "All" ? "bg-primary text-primary-foreground" : "bg-transparent"}
              >
                All Posts
              </Button>
              {forumCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.name)}
                  className={
                    selectedCategory === category.name ? "bg-primary text-primary-foreground" : "bg-transparent"
                  }
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent discussions */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
              Recent Discussions
            </h2>
            <p className="text-muted-foreground">{filteredPosts.length} posts</p>
          </div>

          {filteredPosts.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No posts found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms or create a new post</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          {post.isPinned && <Pin className="h-4 w-4 text-accent" />}
                          <Badge variant="secondary" className="text-xs">
                            {post.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">{post.timeAgo}</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{post.preview}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="h-3 w-3" />
                              {post.replies} replies
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="h-3 w-3" />
                              {post.likes} likes
                            </div>
                          </div>
                          <Link href={`/community/post/${post.id}`}>
                            <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                              Read more
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Community stats */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">1,247</p>
              <p className="text-sm text-muted-foreground">Community Members</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-8 w-8 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">675</p>
              <p className="text-sm text-muted-foreground">Total Discussions</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Heart className="h-8 w-8 text-chart-2 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">3,421</p>
              <p className="text-sm text-muted-foreground">Supportive Messages</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
