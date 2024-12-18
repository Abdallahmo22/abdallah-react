import React from 'react';
import { ArrowRight } from 'lucide-react';
import { buttonStyles } from '../styles/buttonStyles';
import Profile from '../images/Abdallah-Lottery.png';

export default function Hero() {
  return (
    <section id='about' className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* الصورة تظهر أولاً */}
          <div className="w-full md:w-1/2 px-4 md:px-0 mb-8 md:mb-0">
            <img
              src={Profile}
              alt="Developer workspace"
              className="rounded-full w-30 h-30 object-cover shadow-xl transition-transform duration-500 hover:scale-105 w-full max-w-md mx-auto cursor-pointer"
            />
          </div>
          {/* النص يظهر بعد الصورة */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frontend Developer
              <br />
              <span className="text-indigo-600">Building Digital Experiences</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Passionate about creating beautiful, responsive, and user-friendly web applications
              with modern technologies.
            </p>
            <a href="#contact" className={buttonStyles.primary}>
              Let's Connect
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
