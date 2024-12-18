import React from 'react';
import { Code, Layout, Smartphone, Globe, Database, Palette } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive and performant web applications using modern frameworks and best practices."
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces with attention to user experience and accessibility."
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications using React Native and modern mobile technologies."
  },
  {
    icon: Globe,
    title: "API Integration",
    description: "Seamlessly connecting applications with third-party services and RESTful APIs."
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Designing and implementing efficient database structures for scalable applications."
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Developing consistent and memorable brand identities across digital platforms."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-20 bg-gray-50 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Services</h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">Specialized solutions I offer</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg inline-flex mb-3 sm:mb-0">
                    <IconComponent className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="sm:ml-3 text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}