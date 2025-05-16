import React from "react";

const About = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-6 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-indigo-600 text-sm font-semibold uppercase tracking-wide text-center">
          About Us
        </h2>
        <h1 className="mt-2 text-4xl font-extrabold text-center text-gray-900 sm:text-5xl">
          Revolutionizing Learning & Development
        </h1>

        <section className="mt-10 text-lg text-gray-700 leading-relaxed space-y-6">
          <p>
            At <span className="font-semibold text-indigo-600">NATTLABS</span>, we transcend the way learning and development
            has been exercised over the past few decades, revolutionizing and reshaping the very essence of skill development
            for generations to come. In the vast expanse of L&D, we emerge as a dynamic force, fueled by the visionary
            leadership of our founders.
          </p>

          <p>
            Our mission is clear: to revolutionize talent development at its core. With unwavering determination, we strive
            to rank among the top 3 global Learning & Development organizations. Our ambition is bold yet straightforward:
            to cultivate <span className="font-medium text-gray-900">Talent Ready for Roles & Productions</span> through
            transformative learning that transcends conventional boundaries.
          </p>

          <p>
            In our vision of the future, individuals and businesses not only adapt but thrive in the dynamic digital era,
            armed with skills and roles that redefine success. We address the pressing challenges of today's business world:
            unmet talent demands, prolonged lead times, rising hiring costs, high attrition, scarcity of quality talent,
            and the growing need for multi-skills and digital expertise.
          </p>

          <p>
            These challenges echo across industries, leading to revenue dilution, margin losses, customer dissatisfaction,
            and operational inefficiencies. At <span className="font-semibold text-indigo-600">NATTLABS</span>, we stand
            resolute — committed to confronting these obstacles head-on and illuminating the path toward a brighter,
            skill-empowered future.
          </p>
        </section>

        <div className="mt-12 text-center">
          <a
            href="mailto:hello@nattlabs.com"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-lg shadow hover:bg-indigo-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;


