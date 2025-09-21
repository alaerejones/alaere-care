import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Calendar, Users, BookOpen, Stethoscope, Shield } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Heart className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground font-[family-name:var(--font-poppins)]">Alaere Care</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">

              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-8 text-primary py-3 bg-transparent">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-primary text-accent-foreground hover:bg-primary/90">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <img
              src="/peaceful-woman-meditating-with-health-symbols.jpg"
              alt="Women's health illustration"
              className="mx-auto mb-8 rounded-lg"
            />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-6 font-[family-name:var(--font-poppins)] text-balance">
            Your Trusted Digital Health Companion
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Complete Care for women to manage PCOS, endometriosis, and fibroids with personalized tracking, expert resources,
            and a supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-primary text-accent-foreground hover:bg-primary/90 px-8 py-3">
                Start Your Journey
              </Button>
            </Link>
            <Link href="/learn-more">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-3 bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12 font-[family-name:var(--font-poppins)]">
            Everything You Need in One Place
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-3 font-[family-name:var(--font-poppins)]">
                  Cycle & Symptom Tracking
                </h4>
                <p className="text-muted-foreground">
                  Monitor your menstrual cycle, symptoms, and patterns with our intuitive calendar interface.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-3 font-[family-name:var(--font-poppins)]">
                  Expert Resources
                </h4>
                <p className="text-muted-foreground">
                  Access evidence-based articles, videos, and guides on managing your health conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-3 font-[family-name:var(--font-poppins)]">
                  Supportive Community
                </h4>
                <p className="text-muted-foreground">
                  Connect with others who understand your journey in our safe, moderated forums.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Stethoscope className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-3 font-[family-name:var(--font-poppins)]">
                  Care Management
                </h4>
                <p className="text-muted-foreground">
                  Schedule appointments, track medications, and manage your healthcare journey.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-3 font-[family-name:var(--font-poppins)]">
                  Privacy First
                </h4>
                <p className="text-muted-foreground">
                  Your health data is encrypted and secure. You control what you share and with whom.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-3 font-[family-name:var(--font-poppins)]">
                  Personalized Insights
                </h4>
                <p className="text-muted-foreground">
                  Get tailored recommendations and insights based on your unique health patterns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h3 className="text-4xl font-bold text-foreground mb-6 font-[family-name:var(--font-poppins)] text-balance">
            Ready to Take Control of Your Health?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Join thousands of women who are already managing their health with confidence using Alaere Care.
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-12 py-4 text-lg">
              Start Free Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/20 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold text-foreground font-[family-name:var(--font-poppins)]">
                  Alaere Care
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Empowering women's health through technology and community.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-3">Features</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/tracking" className="hover:text-primary">
                    Cycle Tracking
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-primary">
                    Health Resources
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-primary">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/appointments" className="hover:text-primary">
                    Care Management
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-3">Support</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/help" className="hover:text-primary">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-3">Company</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:text-primary">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Alaere Care. All rights reserved. Made with care for women's health.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
