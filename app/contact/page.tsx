"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const option = searchParams.get("option")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: option || "purchase",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real implementation, you would send this data to your server
      // For demo purposes, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Message sent",
        description: "We'll be in touch with you shortly.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        interest: "purchase",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container px-4 mx-auto py-12">
        <Link href="/" className="inline-flex items-center text-sm mb-8 hover:underline text-[#8a7142]">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-light mb-2 tracking-wide text-[#8a7142]">
            GET IN <span className="font-medium">TOUCH</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Complete the form below and our team will reach out to discuss how our Slaid vending solutions can enhance
            your space.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-none focus-visible:ring-[#c0a96b]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-none focus-visible:ring-[#c0a96b]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="rounded-none focus-visible:ring-[#c0a96b]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="rounded-none focus-visible:ring-[#c0a96b]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>I'm interested in:</Label>
              <RadioGroup
                value={formData.interest}
                onValueChange={handleRadioChange}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="purchase" id="purchase" className="text-[#8a7142] border-[#c0a96b]" />
                  <Label htmlFor="purchase" className="font-normal">
                    Purchasing a Slaid vending machine
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="host" id="host" className="text-[#8a7142] border-[#c0a96b]" />
                  <Label htmlFor="host" className="font-normal">
                    Hosting a Slaid vending machine at my location
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" className="text-[#8a7142] border-[#c0a96b]" />
                  <Label htmlFor="other" className="font-normal">
                    Other inquiry
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="rounded-none focus-visible:ring-[#c0a96b]"
                placeholder="Tell us about your specific requirements or questions..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded-none px-8 bg-[#8a7142] text-white hover:bg-[#8a7142]/90 w-full md:w-auto"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>
          </form>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-2 text-[#8a7142]">Email</h3>
              <p className="text-gray-600">contact@slaid.com</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-[#8a7142]">Phone</h3>
              <p className="text-gray-600">+1 (800) 555-0123</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-[#8a7142]">Office</h3>
              <p className="text-gray-600">
                123 Luxury Lane
                <br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

