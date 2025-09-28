import Link from 'next/link';

function WhatsAppIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
    )
}


export default function WhatsAppButton() {
  const phoneNumber = "911234567890"; // Replace with your actual phone number
  const message = "Hello! I'm interested in your modular furniture.";

  return (
    <Link 
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#1DA851] transition-colors flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
    </Link>
  );
}
