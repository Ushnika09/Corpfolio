import React from "react";

function About() {
  return (
    <div className="max-w-5xl mx-auto py-[10rem] px-6 sm:px-12 text-center">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6">
        About <span className="text-blue-600">Corpfolio</span>
      </h1>

      {/* Tagline */}
      <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
        Corpfolio is your digital window into the world of businesses.  
        We bring together company data, insights, and visuals — all in one simple, interactive space.
      </p>

      {/* Mission Section */}
      <div className="bg-white shadow-md rounded-2xl p-8 text-left mb-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">🌍 Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          To make discovering, comparing, and understanding companies as easy as scrolling through your feed.  
          Whether you're a student, investor, or entrepreneur — Corpfolio helps you explore business landscapes effortlessly.
        </p>
      </div>

      {/* Vision Section */}
      <div className="bg-white shadow-md rounded-2xl p-8 text-left mb-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">🚀 Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          We believe in transforming static company data into a living, visual experience.  
          Our goal is to empower curiosity — letting you dive deep into industries, growth, and trends that shape our economy.
        </p>
      </div>

      {/* Features */}
      <div className="bg-blue-50 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">✨ What Makes Corpfolio Unique</h2>
        <ul className="text-gray-700 text-left list-disc list-inside space-y-2">
          <li>Interactive company profiles with real-time stats and charts.</li>
          <li>Filter by industry, location, and more — find exactly what you need.</li>
          <li>Compare company growth, scale, and diversity at a glance.</li>
          <li>Beautifully designed, clean UI for easy navigation.</li>
        </ul>
      </div>

      {/* Closing Note */}
      <div className="mt-12 text-gray-700 max-w-2xl mx-auto">
        <p>
          Built with ❤️ using <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Recharts</strong>.  
          Corpfolio isn’t just a directory — it’s where curiosity meets data.
        </p>
      </div>
    </div>
  );
}

export default About;
