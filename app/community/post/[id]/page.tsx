"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Navigation, DashboardHeader } from "@/components/navigation"
import { ArrowLeft, Heart, MessageCircle, Share, Flag, User, Send, Pin } from "lucide-react"
import Link from "next/link"

// Sample post data
const postData = {
  id: 1,
  title: "Just got diagnosed with PCOS - feeling overwhelmed",
  author: "Sarah_M",
  category: "PCOS Support",
  content: `Hi everyone,

I just received my PCOS diagnosis yesterday and I'm feeling really overwhelmed. My doctor gave me some information but I'd love to hear from others who have been through this.

I'm 28 and have been struggling with irregular periods, weight gain, and acne for the past few years. The doctor mentioned lifestyle changes, possible medication, and that it might affect fertility in the future.

I guess I'm looking for:
- How did you cope with the initial diagnosis?
- What lifestyle changes made the biggest difference for you?
- Any resources or books you'd recommend?

Thank you for reading. This community already feels like such a supportive place. ❤️`,
  timeAgo: "2 hours ago",
  likes: 8,
  replies: 12,
  isLiked: false,
  isPinned: false,
}

const replies = [
  {
    id: 1,
    author: "PCOSWarrior2020",
    content:
      "Welcome to the community! I remember feeling exactly the same way when I was diagnosed 3 years ago. It does get easier, I promise. The most important thing is to be patient with yourself and know that you're not alone in this journey.",
    timeAgo: "1 hour ago",
    likes: 5,
    isLiked: false,
  },
  {
    id: 2,
    author: "HealthyLiving_Jane",
    content:
      "For lifestyle changes, I found that reducing refined carbs and adding more protein to my meals made a huge difference. Also, gentle exercise like walking or yoga helped with both my physical and mental health. The book 'PCOS Diva' by Amy Medling was really helpful for me!",
    timeAgo: "45 minutes ago",
    likes: 3,
    isLiked: true,
  },
  {
    id: 3,
    author: "SupportiveSister",
    content:
      "Sending you lots of love! The diagnosis can feel scary at first, but knowledge is power. I'd recommend joining some PCOS support groups on social media too - there's so much shared wisdom in these communities. You've got this! 💪",
    timeAgo: "30 minutes ago",
    likes: 7,
    isLiked: false,
  },
]

export default function PostDetailPage() {
  const [newReply, setNewReply] = useState("")
  const [isLiked, setIsLiked] = useState(postData.isLiked)
  const [likeCount, setLikeCount] = useState(postData.likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
  }

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle reply submission
    console.log("New reply:", newReply)
    setNewReply("")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="community" />
      <DashboardHeader />

      <main className="lg:ml-64 p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Back button */}
          <Link href="/community">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Community
            </Button>
          </Link>

          {/* Main post */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-4">
                {postData.isPinned && <Pin className="h-4 w-4 text-accent" />}
                <Badge variant="secondary">{postData.category}</Badge>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{postData.timeAgo}</span>
              </div>
              <CardTitle className="text-2xl font-bold font-[family-name:var(--font-poppins)] text-balance">
                {postData.title}
              </CardTitle>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium text-foreground">{postData.author}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none mb-6">
                <p className="text-foreground whitespace-pre-line">{postData.content}</p>
              </div>

              {/* Post actions */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLike}
                    className={`${isLiked ? "text-red-500 hover:text-red-600" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    <Heart className={`h-4 w-4 mr-1 ${isLiked ? "fill-current" : ""}`} />
                    {likeCount}
                  </Button>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MessageCircle className="h-4 w-4" />
                    {postData.replies} replies
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Share className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-destructive">
                    <Flag className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reply form */}
          <Card>
            <CardHeader>
              <CardTitle className="font-[family-name:var(--font-poppins)]">Add a Reply</CardTitle>
              <CardDescription>Share your support, experience, or encouragement</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleReplySubmit} className="space-y-4">
                <Textarea
                  placeholder="Write your supportive reply here..."
                  value={newReply}
                  onChange={(e) => setNewReply(e.target.value)}
                  rows={4}
                  required
                />
                <div className="flex justify-between items-center">
                  <p className="text-xs text-muted-foreground">Remember to be supportive and respectful</p>
                  <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Send className="h-4 w-4 mr-2" />
                    Post Reply
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Replies */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
              Replies ({replies.length})
            </h2>

            {replies.map((reply) => (
              <Card key={reply.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-foreground">{reply.author}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{reply.timeAgo}</span>
                      </div>
                      <p className="text-foreground mb-3">{reply.content}</p>
                      <div className="flex items-center gap-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`${reply.isLiked ? "text-red-500 hover:text-red-600" : "text-muted-foreground hover:text-foreground"}`}
                        >
                          <Heart className={`h-3 w-3 mr-1 ${reply.isLiked ? "fill-current" : ""}`} />
                          {reply.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
