import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { buttonStyles } from '../styles/buttonStyles';

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Get In Touch</h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">Let's discuss your next project</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 sm:p-8 rounded-lg order-2 md:order-1">
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", content: "john@example.com" },
                { icon: Phone, title: "Phone", content: "+1 (555) 123-4567" },
                { icon: MapPin, title: "Location", content: "San Francisco, CA" }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <item.icon className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form className="space-y-6 order-1 md:order-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-shadow duration-300 hover:shadow-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-shadow duration-300 hover:shadow-md"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-shadow duration-300 hover:shadow-md"
              ></textarea>
            </div>
            <button type="submit" className={`${buttonStyles.primary} w-full sm:w-auto`}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}