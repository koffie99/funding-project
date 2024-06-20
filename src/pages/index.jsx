import Image from "next/image"
import { Inter } from "next/font/google"
import Nav from "@/components/Nav"
import Splash from "@/components/Splash"
import About from "@/components/About"
import Features from "@/components/Features"
import Works from "@/components/Works"
import Why from "@/components/Why"
import Contributors from "@/components/Contributors"
import Footer from "@/components/Footer"
import Login from "@/components/Login"
import Dashboard from "@/components/Dashboard"
import Settings from "@/components/Settings"


const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col`}
    >
      <div>
        {/* <Nav /> */}
        <Splash />
        
        <div></div>
      </div>

      <About />
      <Why/>
      <Features />
      <Works images={['/images/kite.png', '/images/kite.png', '/images/kite.png']} />

      <Contributors />
      <Footer />
      
    </main>
  )
}
