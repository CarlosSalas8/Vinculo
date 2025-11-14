import { Hero } from "@/components/hero"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeIntro } from "@/components/home-intro"
import { WhyTherapy } from "@/components/why-therapy"
import { SessionInfo } from "@/components/session-info"
import { CTA } from "@/components/cta"
import { CircularImage } from "@/components/circular-image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HomeIntro />
      <WhyTherapy />
      <CircularImage />
      <SessionInfo />
      <CTA />
      <Footer />
    </div>
  )
}
