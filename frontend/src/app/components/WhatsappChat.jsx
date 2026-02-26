"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  const brandPhone = "2348137742724";
  const automatedGreeting =
    "Hello Glamswardrobe! I'm interested in the new collection on your website.";

  const handleSendMessage = (e) => {
    e.preventDefault();
    const finalMessage = userMessage || automatedGreeting;
    const encodedMessage = encodeURIComponent(finalMessage);
    window.open(`https://wa.me/${brandPhone}?text=${encodedMessage}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-glams-pink p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-sm">Glamswardrobe</p>
                  <p className="text-[10px] opacity-80">
                    Replies in a few minutes
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-glams-blush h-32 flex flex-col justify-end">
              <div className="bg-white p-3 rounded-lg rounded-bl-none shadow-sm text-sm text-gray-700 max-w-[85%]">
                Hi there! 👋 How can we help you today?
              </div>
            </div>

            {/* Input Area */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 bg-white flex gap-2"
            >
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 text-sm border-none focus:ring-0 focus:outline-0 p-0"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
              />
              <button type="submit" className="text-glams-pink">
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center animate-pulse"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          // <MessageCircle className="w-7 h-7" />
          <Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
        )}
      </motion.button>
    </div>
  );
}
