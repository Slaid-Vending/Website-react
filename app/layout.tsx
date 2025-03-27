import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Slaid | Luxury Vending Solutions",
  description: "Premium automated retail experiences for discerning businesses",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <main>{children}</main>
          <footer className="bg-[#8a7142] text-white py-8">
            <div className="container px-4 mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-light tracking-wide">SLAID</h3>
                </div>
                <div className="text-sm text-white/70">
                  © {new Date().getFullYear()} Slaid Luxury Vending Solutions. All rights reserved.
                </div>
              </div>
            </div>
          </footer>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'