import React from 'react';
import { MessageCircle } from 'lucide-react';

// WhatsAppButton: Floating button for users to start a WhatsApp chat
const WhatsAppButton = () => {
  // Your WhatsApp phone number (in international format, no spaces or dashes)
  const phoneNumber = '+919332344995'; // Replace with your actual WhatsApp number

  // Default message that will be pre-filled in WhatsApp chat
  const message = 'Hello! I would like to know more about your services.';

  // Construct the WhatsApp URL with the message encoded
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    // Floating action button, fixed to the bottom-right of the screen
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 z-[60] flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp icon */}
      <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
      {/* Tooltip appears on hover */}
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
