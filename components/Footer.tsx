"use client";
export default function Footer() {
  try {
    // Current year automatically show karne ke liye
    const currentYear = new Date().getFullYear();

    return (
      <footer className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            {/* Coaching Information */}
            <div>
              <h2 className="text-2xl font-bold">
                MKD <span className="text-yellow-400">PATHSHALA</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Center for Academic Excellence. Supporting students from
                Class 1st to 10th in their academic journey.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-yellow-400">
                Quick Links
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
                <a href="#home" className="transition hover:text-yellow-400">
                  Home
                </a>

                <a href="#about" className="transition hover:text-yellow-400">
                  About Us
                </a>

                <a href="#courses" className="transition hover:text-yellow-400">
                  Courses
                </a>

                <a href="#faculty" className="transition hover:text-yellow-400">
                  Faculty
                </a>

                <a href="#gallery" className="transition hover:text-yellow-400">
                  Gallery
                </a>
              </div>
            </div>

            {/* Classes */}
            <div>
              <h3 className="text-lg font-bold text-yellow-400">
                Our Classes
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
                <p>Class 1st – 5th</p>
                <p>Class 6th – 8th</p>
                <p>Class 9th – 10th</p>
                <p>U.P. Board & CBSE Board</p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-bold text-yellow-400">
                Contact Us
              </h3>

              <div className="mt-4 space-y-4 text-sm text-gray-400">
                <a
                  href="tel:9026309598"
                  className="block transition hover:text-yellow-400"
                >
                  📞 9026309598
                </a>

                <p className="leading-6">
                  📍 Jakraul Mod, M.B.A.D, Ghazipur – 233227
                </p>

                <a
                  href="#contact"
                  className="inline-block font-semibold text-yellow-400 hover:text-yellow-300"
                >
                  Admission Enquiry →
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-sm text-gray-500 md:flex-row md:text-left">
            
            <p>
              © {currentYear} MKD Pathshala. All rights reserved.
            </p>

            <p>
              Designed for Academic Excellence
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    // Footer render hone mein unexpected error aaye to console mein log karega
    console.error("Footer rendering error:", error);

    return null;
  }
}