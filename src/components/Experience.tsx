import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "Tech Solutions Inc",
    position: "Senior Frontend Developer",
    period: "2020 - Present",
    description: "Led the development of multiple web applications using React, TypeScript, and modern frontend technologies."
  },
  {
    company: "Digital Innovations",
    position: "Frontend Developer",
    period: "2018 - 2020",
    description: "Developed responsive web applications and implemented UI/UX designs using React and Redux."
  },
  {
    company: "WebCraft Agency",
    position: "Junior Developer",
    period: "2016 - 2018",
    description: "Collaborated on various client projects and maintained existing web applications."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Professional Experience</h2>
          <p className="mt-4 text-lg text-gray-600">My journey in web development</p>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                  <p className="text-indigo-600 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                  <p className="mt-2 text-gray-600">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}