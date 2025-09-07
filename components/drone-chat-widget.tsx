"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, Send, MessageCircle } from "lucide-react"

export function DroneChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Chat message:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    setIsOpen(false)
  }

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-24 left-6 w-80 z-50 shadow-2xl border-primary/20">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>Quick Message</span>
              </CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-6 w-6 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Textarea
                placeholder="Your message or inquiry..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                required
              />
              <Button type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Drone-styled Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-16 h-16 rounded-full bg-primary hover:bg-primary/90 shadow-2xl group transition-all duration-300 hover:scale-110"
        size="lg"
      >
        <div className="relative">
          {/* Drone body */}
          <div className="w-8 h-6 bg-white rounded-lg relative">
            {/* Drone propellers */}
            <div className="absolute -top-1 -left-2 w-3 h-3 border-2 border-white rounded-full animate-spin"></div>
            <div className="absolute -top-1 -right-2 w-3 h-3 border-2 border-white rounded-full animate-spin"></div>
            <div className="absolute -bottom-1 -left-2 w-3 h-3 border-2 border-white rounded-full animate-spin"></div>
            <div className="absolute -bottom-1 -right-2 w-3 h-3 border-2 border-white rounded-full animate-spin"></div>
            {/* Message icon in center */}
            <MessageCircle className="w-4 h-4 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          {/* Floating animation */}
          <div className="absolute inset-0 animate-bounce"></div>
        </div>
      </Button>
    </>
  )
}
