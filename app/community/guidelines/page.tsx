import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation, DashboardHeader } from "@/components/navigation"
import { ArrowLeft, Heart, Shield, Users, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function GuidelinesPage() {
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

          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground font-[family-name:var(--font-poppins)] mb-4">
              Community Guidelines
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our community is built on support, respect, and understanding. These guidelines help us maintain a safe
              space for everyone.
            </p>
          </div>

          {/* Core principles */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Be Supportive</h3>
                <p className="text-sm text-muted-foreground">
                  Offer encouragement, share experiences, and lift each other up
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Stay Safe</h3>
                <p className="text-sm text-muted-foreground">
                  Protect privacy and avoid sharing personal medical information
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-chart-2 mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Respect Others</h3>
                <p className="text-sm text-muted-foreground">
                  Treat everyone with kindness and respect their experiences
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed guidelines */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-poppins)]">What We Encourage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <div>
                      <strong>Share your experiences:</strong> Your story can help others feel less alone
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <div>
                      <strong>Ask questions:</strong> No question is too small or silly
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <div>
                      <strong>Offer emotional support:</strong> Sometimes a kind word makes all the difference
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <div>
                      <strong>Share resources:</strong> Articles, books, or tools that helped you
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <div>
                      <strong>Celebrate victories:</strong> Big or small, we want to cheer you on
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-poppins)]">What We Don't Allow</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                    <div>
                      <strong>Medical advice:</strong> Only licensed healthcare providers should give medical advice
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                    <div>
                      <strong>Harassment or bullying:</strong> Any form of harassment will result in immediate removal
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                    <div>
                      <strong>Spam or self-promotion:</strong> This space is for community support, not advertising
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                    <div>
                      <strong>Sharing personal information:</strong> Protect your privacy and that of others
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                    <div>
                      <strong>Discriminatory language:</strong> We have zero tolerance for discrimination of any kind
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-[family-name:var(--font-poppins)]">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  Important Reminders
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground">
                  <strong>This community is not a substitute for professional medical care.</strong> Always consult with
                  your healthcare provider for medical advice, diagnosis, or treatment.
                </p>
                <p className="text-foreground">
                  <strong>In case of emergency,</strong> please contact your local emergency services or go to the
                  nearest emergency room.
                </p>
                <p className="text-foreground">
                  <strong>If you're experiencing thoughts of self-harm,</strong> please reach out to a mental health
                  professional or crisis helpline immediately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-poppins)]">Reporting and Moderation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  Our community is moderated by trained volunteers who understand the challenges of living with
                  reproductive health conditions. If you see content that violates these guidelines, please report it
                  using the flag icon.
                </p>
                <p className="text-foreground">
                  We review all reports promptly and take appropriate action, which may include:
                </p>
                <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                  <li>Warning the user</li>
                  <li>Removing the content</li>
                  <li>Temporarily suspending the account</li>
                  <li>Permanently banning repeat offenders</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <Card className="text-center">
            <CardContent className="p-8">
              <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2 font-[family-name:var(--font-poppins)]">
                Thank You
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                By following these guidelines, you help create a supportive environment where everyone can feel safe to
                share, learn, and grow together. Thank you for being part of our community.
              </p>
              <Link href="/community" className="inline-block mt-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Back to Community</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
