import React from 'react';
import { Menu, X } from 'lucide-react';
import { buttonStyles } from '../styles/buttonStyles';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const menuItems = ['About', 'Services', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-600 hover:text-indigo-600 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg rounded-b-lg border-t md:hidden">
          <nav className="flex flex-col p-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="py-3 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}