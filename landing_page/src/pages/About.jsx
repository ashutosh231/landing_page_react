import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-linear-to-r from-purple-900 to-cyan-600 pt-16">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-green-300 mb-8">About Us</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-4">
            Welcome to MyBrand! We are dedicated to helping you build modern web applications faster and more efficiently.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our mission is to provide cutting-edge tools and resources that empower developers to create stunning web experiences with clean design and powerful components.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            With years of experience in web development, our team is committed to delivering excellence and innovation in every project.
          </p>
          <h2 className="text-2xl font-bold text-purple-900 mt-8 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Lightning-fast performance and optimization</li>
            <li>Modern design principles and best practices</li>
            <li>Secure and reliable solutions</li>
            <li>Excellent customer support</li>
            <li>Continuous innovation and updates</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
