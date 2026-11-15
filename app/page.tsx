import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";


export default function Home() {
  try {
    return (
      <>
        {/* Website Navigation Bar */}
        <Header />

        <main id="home" className="bg-gray-950 text-white">
          {/* Hero Section */}
          <section className="relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
            <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

            <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center">
              
              {/* Small Heading */}
              <p className="mb-4 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                🎓 CENTER FOR ACADEMIC EXCELLENCE
              </p>

              {/* Main Heading */}
              <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
                Welcome to{" "}
                <span className="text-yellow-400">MKD PATHSHALA</span>
              </h1>

              {/* Tagline */}
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
                Building strong foundations and helping students achieve
                academic excellence for a brighter future.
              </p>

              {/* Class Information */}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <span className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm font-medium">
                  📚 Class 1st to 10th
                </span>

                <span className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm font-medium">
                  🏫 U.P. Board & CBSE Board
                </span>

                <span className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm font-medium">
                  ⭐ Mathematics • Science • English
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-lg bg-yellow-400 px-7 py-3 font-bold text-black transition hover:bg-yellow-300"
                >
                  Enquire Now →
                </a>

                <a
                  href="tel:9026309598"
                  className="rounded-lg border border-yellow-400 px-7 py-3 font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                >
                  📞 Call Now
                </a>
              </div>

              {/* Main Features */}
              <div className="mt-16 grid w-full max-w-4xl gap-4 md:grid-cols-3">
                
                <div className="rounded-xl border border-gray-800 bg-gray-900/70 p-5">
                  <div className="text-2xl">👨‍🏫</div>
                  <h3 className="mt-3 font-bold">Experienced Faculty</h3>
                  <p className="mt-2 text-sm text-gray-400">
                    Learn from dedicated and experienced teachers.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-800 bg-gray-900/70 p-5">
                  <div className="text-2xl">📝</div>
                  <h3 className="mt-3 font-bold">Regular Tests</h3>
                  <p className="mt-2 text-sm text-gray-400">
                    Weekly and monthly tests to track student progress.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-800 bg-gray-900/70 p-5">
                  <div className="text-2xl">🎯</div>
                  <h3 className="mt-3 font-bold">Special Attention</h3>
                  <p className="mt-2 text-sm text-gray-400">
                    Special classes and support for students who need help.
                  </p>
                </div>

              </div>
            </div>
          </section>


          {/* About Section */}
<section
  id="about"
  className="border-t border-gray-800 bg-white py-20 text-gray-900"
>
  <div className="mx-auto max-w-7xl px-4">
    {/* Section Heading */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-semibold uppercase tracking-wider text-yellow-600">
        About Us
      </p>

      <h2 className="mt-3 text-3xl font-bold md:text-5xl">
        Welcome to MKD Pathshala
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        MKD Pathshala is focused on providing academic support for students
        from Class 1st to 10th, covering U.P. Board and CBSE Board education.
      </p>
    </div>

    {/* Mission and Vision Cards */}
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {/* Mission */}
      <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
        <div className="text-3xl">🎯</div>

        <h3 className="mt-4 text-2xl font-bold">Our Mission</h3>

        <p className="mt-3 leading-7 text-gray-600">
          To support students in building strong academic foundations through
          quality teaching, regular practice, and personal attention.
        </p>
      </div>

      {/* Vision */}
      <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
        <div className="text-3xl">🌟</div>

        <h3 className="mt-4 text-2xl font-bold">Our Vision</h3>

        <p className="mt-3 leading-7 text-gray-600">
          To help students grow with confidence and work towards academic
          excellence and a brighter future.
        </p>
      </div>
    </div>

    {/* Academic Information */}
    <div className="mt-12 rounded-2xl bg-gray-950 p-8 text-white md:p-10">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold uppercase text-yellow-400">
            Classes
          </p>
          <h3 className="mt-2 text-2xl font-bold">1st to 10th</h3>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase text-yellow-400">
            Boards
          </p>
          <h3 className="mt-2 text-2xl font-bold">U.P. & CBSE</h3>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase text-yellow-400">
            Key Subjects
          </p>
          <h3 className="mt-2 text-2xl font-bold">
            Maths, Science & English
          </h3>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Courses Section */}
<section
  id="courses"
  className="bg-gray-100 py-20 text-gray-900"
>
  <div className="mx-auto max-w-7xl px-4">
    
    {/* Section Heading */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-semibold uppercase tracking-wider text-yellow-600">
        Our Classes
      </p>

      <h2 className="mt-3 text-3xl font-bold md:text-5xl">
        Learn, Grow & Achieve
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-600">
        Academic support for students from Class 1st to 10th with a focus
        on strong foundations and regular learning.
      </p>
    </div>

    {/* Course Cards */}
    <div className="mt-12 grid gap-6 md:grid-cols-3">

      {/* Primary Classes */}
      <div className="rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-100 text-3xl">
          📖
        </div>

        <p className="mt-6 text-sm font-bold uppercase tracking-wider text-yellow-600">
          Foundation Level
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          Class 1st – 5th
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Focus on building strong learning habits and a solid academic
          foundation.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-block font-bold text-yellow-600 hover:text-yellow-700"
        >
          Enquire Now →
        </a>
      </div>

      {/* Middle Classes */}
      <div className="rounded-2xl bg-gray-950 p-7 text-white shadow-lg transition duration-300 hover:-translate-y-2">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400 text-3xl">
          📚
        </div>

        <p className="mt-6 text-sm font-bold uppercase tracking-wider text-yellow-400">
          Academic Growth
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          Class 6th – 8th
        </h3>

        <p className="mt-4 leading-7 text-gray-300">
          Strengthen concepts and develop confidence through regular
          practice and guidance.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-block font-bold text-yellow-400 hover:text-yellow-300"
        >
          Enquire Now →
        </a>
      </div>

      {/* High School Classes */}
      <div className="rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-100 text-3xl">
          🎯
        </div>

        <p className="mt-6 text-sm font-bold uppercase tracking-wider text-yellow-600">
          Exam Preparation
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          Class 9th – 10th
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Focused academic guidance, regular tests, and structured preparation
          for school examinations.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-block font-bold text-yellow-600 hover:text-yellow-700"
        >
          Enquire Now →
        </a>
      </div>

    </div>

    {/* Subjects Highlight */}
    <div className="mt-12 rounded-2xl border border-yellow-200 bg-yellow-50 p-8 text-center">
      <p className="font-semibold text-yellow-700">
        KEY SUBJECTS
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-4">
        <span className="rounded-full bg-white px-5 py-2 font-semibold shadow-sm">
          Mathematics
        </span>

        <span className="rounded-full bg-white px-5 py-2 font-semibold shadow-sm">
          Science
        </span>

        <span className="rounded-full bg-white px-5 py-2 font-semibold shadow-sm">
          English
        </span>
      </div>
    </div>

  </div>
</section>

{/* Why Choose Us Section */}
<section className="bg-gray-950 py-20 text-white">
  <div className="mx-auto max-w-7xl px-4">

    {/* Section Heading */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-semibold uppercase tracking-wider text-yellow-400">
        Why Choose Us
      </p>

      <h2 className="mt-3 text-3xl font-bold md:text-5xl">
        More Than Just a Coaching Class
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-300">
        We focus on regular learning, practice, and individual academic
        support to help students move forward with confidence.
      </p>
    </div>

    {/* Features Grid */}
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {/* Feature 1 */}
      <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 transition hover:border-yellow-400/50">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400 text-2xl text-black">
          👨‍🏫
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Experienced Faculty
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-400">
          Dedicated teachers focused on helping students understand concepts
          clearly.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 transition hover:border-yellow-400/50">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400 text-2xl text-black">
          📝
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Weekly & Monthly Tests
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-400">
          Regular assessments help students practice and track their academic
          progress.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 transition hover:border-yellow-400/50">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400 text-2xl text-black">
          🎯
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Special Attention
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-400">
          Additional academic support and special classes for students who need
          extra help.
        </p>
      </div>

      {/* Feature 4 */}
      <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 transition hover:border-yellow-400/50">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400 text-2xl text-black">
          📚
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Strong Foundation
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-400">
          Focused learning from Class 1st to 10th to help build strong academic
          foundations.
        </p>
      </div>

    </div>

    {/* Bottom Highlight */}
    <div className="mt-12 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-6 text-center md:p-8">
      <p className="text-lg font-semibold text-yellow-300">
        Your child's academic journey deserves the right guidance and support.
      </p>
    </div>

  </div>
</section>


{/* Faculty Section */}
<section
  id="faculty"
  className="bg-white py-20 text-gray-900"
>
  <div className="mx-auto max-w-7xl px-4">

    {/* Section Heading */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-semibold uppercase tracking-wider text-yellow-600">
        Our Leadership
      </p>

      <h2 className="mt-3 text-3xl font-bold md:text-5xl">
        Meet the Team Behind MKD Pathshala
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-600">
        Dedicated leadership focused on supporting students throughout their
        academic journey.
      </p>
    </div>

    {/* Leadership Cards */}
    <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">

      {/* Director Card */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        
        {/* Photo Placeholder */}
        <div className="flex h-64 items-center justify-center bg-gray-950">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-yellow-400 bg-gray-800 text-5xl">
            👨‍🏫
          </div>
        </div>

        <div className="p-7 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-yellow-600">
            Director
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            Rohit Sir
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Leading MKD Pathshala with a focus on academic excellence and
            student growth.
          </p>
        </div>
      </div>

      {/* Management Card */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        
        {/* Photo Placeholder */}
        <div className="flex h-64 items-center justify-center bg-gray-950">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-yellow-400 bg-gray-800 text-5xl">
            👨‍💼
          </div>
        </div>

        <div className="p-7 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-yellow-600">
            Management
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            Raju Yadav
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Supporting the management and growth of MKD Pathshala.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>

{/* Gallery Section */}
<section
  id="gallery"
  className="bg-gray-100 py-20 text-gray-900"
>
  <div className="mx-auto max-w-7xl px-4">

    {/* Section Heading */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-semibold uppercase tracking-wider text-yellow-600">
        Our Gallery
      </p>

      <h2 className="mt-3 text-3xl font-bold md:text-5xl">
        Moments of Learning & Growth
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-600">
        A glimpse into the learning environment and activities at MKD Pathshala.
      </p>
    </div>

    {/* Gallery Images Grid */}
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

      {/* Image 1 */}
      <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
        <Image
          src="/images/gallery/image.png"
          alt="MKD Pathshala classroom learning"
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Image 2 */}
      <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
        <Image
          src="/images/gallery/image1.png"
          alt="Students learning at MKD Pathshala"
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Image 3 */}
      <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
        <Image
          src="/images/gallery/image.png"
          alt="MKD Pathshala students"
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Image 4 */}
      <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
        <Image
          src="/images/gallery/image1.png"
          alt="Student activities at MKD Pathshala"
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Image 5 */}
      <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
        <Image
          src="/images/gallery/image.png"
          alt="Academic activities at MKD Pathshala"
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Image 6 */}
      <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
        <Image
          src="/images/gallery/image1.png"
          alt="Student achievements at MKD Pathshala"
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

    </div>
  </div>
</section>

{/* Contact & Admission Section */}
<section
  id="contact"
  className="bg-white py-20 text-gray-900"
>
  <div className="mx-auto max-w-7xl px-4">

    {/* Section Heading */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-semibold uppercase tracking-wider text-yellow-600">
        Contact Us
      </p>

      <h2 className="mt-3 text-3xl font-bold md:text-5xl">
        Start Your Learning Journey
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-600">
        Get in touch with MKD Pathshala to know more about classes and
        admission.
      </p>
    </div>

    {/* Contact Content */}
    <div className="mt-12 grid gap-8 lg:grid-cols-2">

      {/* Contact Information */}
      <div className="rounded-2xl bg-gray-950 p-8 text-white md:p-10">
        <h3 className="text-2xl font-bold">
          Get in Touch
        </h3>

        <p className="mt-4 leading-7 text-gray-300">
          Contact us for admission information, classes, and other queries.
        </p>

        {/* Phone */}
        <div className="mt-8">
          <p className="text-sm font-semibold uppercase text-yellow-400">
            Call Us
          </p>

          <a
            href="tel:9026309598"
            className="mt-2 inline-block text-xl font-bold transition hover:text-yellow-400"
          >
            📞 9026309598
          </a>
        </div>

        {/* Address */}
        <div className="mt-8">
          <p className="text-sm font-semibold uppercase text-yellow-400">
            Visit Us
          </p>

          <p className="mt-2 leading-7 text-gray-300">
            📍 Jakraul Mod, M.B.A.D, Ghazipur – 233227
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <a
            href="tel:9026309598"
            className="rounded-lg bg-yellow-400 px-6 py-3 text-center font-bold text-black transition hover:bg-yellow-300"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919026309598"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-yellow-400 px-6 py-3 text-center font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            💬 WhatsApp Us
          </a>

        </div>
      </div>

      {/* Admission Enquiry Form */}
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 md:p-10">
        <h3 className="text-2xl font-bold">
          Admission Enquiry
        </h3>

        <p className="mt-3 text-gray-600">
          Fill out the form and we will get back to you.
        </p>

        <form className="mt-8 space-y-5">

          {/* Student Name */}
          <div>
            <label
              htmlFor="studentName"
              className="mb-2 block text-sm font-semibold"
            >
              Student Name
            </label>

            <input
              type="text"
              id="studentName"
              placeholder="Enter student name"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-yellow-500"
            />
          </div>

          {/* Parent Name */}
          <div>
            <label
              htmlFor="parentName"
              className="mb-2 block text-sm font-semibold"
            >
              Parent Name
            </label>

            <input
              type="text"
              id="parentName"
              placeholder="Enter parent name"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-yellow-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-semibold"
            >
              Mobile Number
            </label>

            <input
              type="tel"
              id="phone"
              placeholder="Enter mobile number"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-yellow-500"
            />
          </div>

          {/* Class Selection */}
          <div>
            <label
              htmlFor="studentClass"
              className="mb-2 block text-sm font-semibold"
            >
              Select Class
            </label>

            <select
              id="studentClass"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-yellow-500"
            >
              <option value="">Select Class</option>
              <option value="1">Class 1st</option>
              <option value="2">Class 2nd</option>
              <option value="3">Class 3rd</option>
              <option value="4">Class 4th</option>
              <option value="5">Class 5th</option>
              <option value="6">Class 6th</option>
              <option value="7">Class 7th</option>
              <option value="8">Class 8th</option>
              <option value="9">Class 9th</option>
              <option value="10">Class 10th</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
          >
            Submit Enquiry →
          </button>

        </form>
      </div>

    </div>
  </div>
</section>

        </main>
        <Footer />
        {/* Floating WhatsApp and Call Buttons */}
<FloatingButtons />
      </>
    );
  } catch (error) {
    // Unexpected rendering errors ko console mein log karne ke liye
    console.error("Home page rendering error:", error);

    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-950 text-white">
        <p>Something went wrong. Please refresh the page.</p>
      </main>
    );
  }
}