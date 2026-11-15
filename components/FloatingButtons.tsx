export default function FloatingButtons() {
  try {
    return (
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919026309598"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-lg transition hover:scale-110"
          aria-label="Chat with us on WhatsApp"
          title="Chat on WhatsApp"
        >
          💬
        </a>

        {/* Call Button */}
        <a
          href="tel:9026309598"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-2xl text-black shadow-lg transition hover:scale-110"
          aria-label="Call MKD Pathshala"
          title="Call us"
        >
          📞
        </a>
      </div>
    );
  } catch (error) {
    // Unexpected component error ko console mein log karne ke liye
    console.error("Floating buttons rendering error:", error);

    return null;
  }
}