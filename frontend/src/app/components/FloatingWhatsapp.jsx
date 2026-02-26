"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import WhatsappMiniChat from "./WhatsappMiniChat";

const FloatingWhatsapp = () => {
  const phone = "2348137742724";
  const [message, setMessage] = useState("Hi, I'm interested in your products");

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <WhatsappMiniChat
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        phone={phone}
        message={message}
        setMessage={setMessage}
      />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50 cursor-pointer animate-pulse"
      >
        <Image
          src="/whatsapp.svg"
          alt="WhatsApp"
          width={24}
          height={24}
          className="text-white"
        />
      </button>
    </div>
  );
};

export default FloatingWhatsapp;
