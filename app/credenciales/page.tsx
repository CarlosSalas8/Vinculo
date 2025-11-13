import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Credentials } from "@/components/credentials"

export default function CredentialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Credentials />
      <Footer />
    </div>
  )
}
