"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LiveSupport() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col items-start gap-4">
      {isOpen && (
        <div className="w-80 h-96 bg-background border border-border shadow-2xl rounded-3xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-primary p-4 text-primary-foreground flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">m</div>
              <div>
                <div className="text-sm font-bold">m.co Support</div>
                <div className="text-[10px] opacity-80">Typically replies in minutes</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="w-5 h-5" /></button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-muted/10 text-xs">
            <div className="bg-muted p-3 rounded-2xl rounded-tl-none max-w-[80%]">
              Hello! Mingalaba. How can we help you today with the m ecosystem?
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 border-t bg-background">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Type your message..."
                className="w-full bg-muted/50 border border-border rounded-xl pl-4 pr-10 py-2 text-xs outline-none focus:ring-1 focus:ring-primary transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />}
      </Button>
    </div>
  )
}
