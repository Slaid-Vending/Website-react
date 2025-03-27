import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#8a7142]/90 to-[#5d4c2c]/90">
          <Image
            src="/vending-machine.png"
            alt="Slaid Luxury Vending Machine"
            fill
            className="object-contain object-center mix-blend-overlay opacity-30"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
            ELEVATE <span className="font-semibold">AUTOMATION</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-8 font-light">
            Redefining the vending experience with unparalleled elegance and innovation
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-none px-8 bg-white text-[#8a7142] hover:bg-white/90 hover:text-[#8a7142]"
          >
            <Link href="#discover">Discover</Link>
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </section>

      {/* Product Section */}
      <section id="discover" className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/vending-machine.png"
                alt="Slaid Luxury Vending Machine"
                width={600}
                height={800}
                className="object-contain w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-light mb-6 tracking-wide text-[#8a7142]">
                THE PINNACLE OF <span className="font-medium">AUTOMATED RETAIL</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Our signature Slaid vending machine combines cutting-edge technology with timeless design, creating a
                statement piece that enhances any premium environment while delivering exceptional service.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border-t border-[#c0a96b] pt-4">
                  <h3 className="text-lg font-medium mb-2 text-[#8a7142]">Elegant Design</h3>
                  <p className="text-gray-600">Handcrafted with premium materials and luxurious gold finish</p>
                </div>
                <div className="border-t border-[#c0a96b] pt-4">
                  <h3 className="text-lg font-medium mb-2 text-[#8a7142]">Smart Technology</h3>
                  <p className="text-gray-600">Touchless payments, facial recognition, and inventory management</p>
                </div>
                <div className="border-t border-[#c0a96b] pt-4">
                  <h3 className="text-lg font-medium mb-2 text-[#8a7142]">Customizable</h3>
                  <p className="text-gray-600">Tailor the experience to your brand and customer preferences</p>
                </div>
                <div className="border-t border-[#c0a96b] pt-4">
                  <h3 className="text-lg font-medium mb-2 text-[#8a7142]">Analytics</h3>
                  <p className="text-gray-600">Real-time data on consumer behavior and inventory levels</p>
                </div>
              </div>
              <Button asChild className="rounded-none px-8 bg-[#8a7142] text-white hover:bg-[#8a7142]/90">
                <Link href="#offerings">
                  Explore Offerings <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="py-24 bg-[#f8f5ed]">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-light mb-2 tracking-wide text-[#8a7142]">
            FLEXIBLE <span className="font-medium">SOLUTIONS</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">Choose the option that best suits your business needs</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-10 shadow-sm border border-[#c0a96b]/20 flex flex-col">
              <h3 className="text-2xl font-medium mb-4 text-[#8a7142]">Purchase</h3>
              <p className="text-gray-600 mb-8 flex-grow">
                Own our premium Slaid vending machine and offer an exclusive experience to your customers. Full
                customization and ongoing support included.
              </p>
              <ul className="text-left mb-8 space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-[#8a7142] shrink-0 mt-0.5" />
                  <span>Full ownership of the machine</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-[#8a7142] shrink-0 mt-0.5" />
                  <span>Customized to your specifications</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-[#8a7142] shrink-0 mt-0.5" />
                  <span>Maintenance packages available</span>
                </li>
              </ul>
              <Button asChild className="rounded-none px-8 bg-[#8a7142] text-white hover:bg-[#8a7142]/90 mt-auto">
                <Link href="/contact?option=purchase">Inquire Now</Link>
              </Button>
            </div>

            <div className="bg-white p-10 shadow-sm border border-[#c0a96b]/20 flex flex-col">
              <h3 className="text-2xl font-medium mb-4 text-[#8a7142]">Host</h3>
              <p className="text-gray-600 mb-8 flex-grow">
                Provide space for our Slaid vending machine at your location and earn a share of the revenue without any
                upfront investment.
              </p>
              <ul className="text-left mb-8 space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-[#8a7142] shrink-0 mt-0.5" />
                  <span>Zero investment required</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-[#8a7142] shrink-0 mt-0.5" />
                  <span>Revenue sharing model</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-[#8a7142] shrink-0 mt-0.5" />
                  <span>We handle maintenance and restocking</span>
                </li>
              </ul>
              <Button asChild className="rounded-none px-8 bg-[#8a7142] text-white hover:bg-[#8a7142]/90 mt-auto">
                <Link href="/contact?option=host">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#8a7142] text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-light mb-6 tracking-wide">
            ELEVATE YOUR <span className="font-medium">SPACE</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Transform your environment with our luxury Slaid vending solution. Contact us today to discuss your specific
            requirements.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-none px-8 bg-white text-[#8a7142] hover:bg-white/90 hover:text-[#8a7142]"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

