import React from "react";

const WhatsappMiniChat = ({
  isOpen,
  setIsOpen,
  phone,
  message,
  setMessage,
}) => {
  return (
    <div className="fixed bottom-24 right-6 z-50">
      {/* Mini caht popup */}
      {isOpen && (
        <div className="bg-white shadow-lg rounded-lg w-full p-4 relative">
          {/* close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <p className="text-gray-800 mb-3 font-medium">
            Hi! How can we help you?
          </p>

          <div className="flex items-center gap-2">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              className="flex-1 border rounded-full px-3 py-2"
            />
            <a
              href={`https://wa.me/${phone}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white rounded-full px-4 py-2"
            >
              Send
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsappMiniChat;
