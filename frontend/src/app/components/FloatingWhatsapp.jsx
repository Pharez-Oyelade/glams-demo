import React from "react";
import Image from "next/image";

const FloatingWhatsapp = () => {
  const phone = "2348137742724";
  const message = "Hello, I'm interested in your products";

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50 cursor-pointer animate-pulse"
    >
      <Image
        src="/whatsapp.svg"
        alt="WhatsApp"
        width={24}
        height={24}
        className="text-white"
      />
    </a>
  );
};

export default FloatingWhatsapp;
