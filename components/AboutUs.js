import React from 'react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

export default function AboutUs() {
  const directors = [
    {
      name: "Santosh Bhavani",
      title: "Director",
      linkedin: "https://www.linkedin.com/in/sbhavani/",
      bio: "Experienced leader with expertise in healthcare technology and innovation."
    },
    {
      name: "Ravi Managuli",
      title: "Director",
      linkedin: "https://www.linkedin.com/in/ravi-managuli-085ab08/",
      bio: "Seasoned professional with deep knowledge in medical imaging and diagnostic solutions."
    },
    {
      name: "Vittal Moka",
      title: "Director",
      linkedin: "https://www.linkedin.com/in/vittal-moka-docchoice-bb365876/",
      bio: "Visionary leader driving technological advancements in healthcare systems."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Meet the leadership team behind InnovationDX
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {directors.map((director, index) => (
              <div key={index} className="relative">
                <div className="h-full bg-white rounded-lg shadow-lg overflow-hidden group transform transition duration-500 hover:scale-105">
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                    <span className="text-5xl text-white font-bold opacity-30">{director.name.split(' ')[0][0]}{director.name.split(' ')[1][0]}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center">
                      {director.name}
                      {director.linkedin && (
                        <a 
                          href={director.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="ml-2 text-blue-600 hover:text-blue-800"
                        >
                          <FaLinkedin className="h-5 w-5" />
                        </a>
                      )}
                    </h3>
                    <p className="text-sm font-medium text-blue-600 mt-1">{director.title}</p>
                    <p className="mt-3 text-base text-gray-500">{director.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-500">
            At InnovationDX, we're committed to revolutionizing healthcare through innovative PACS solutions and AI-powered diagnostic tools.
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Our mission is to improve patient outcomes by providing healthcare professionals with cutting-edge technology that enhances diagnostic accuracy and efficiency.
          </p>
        </div>
      </div>
    </section>
  );
} 