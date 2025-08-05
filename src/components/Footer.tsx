import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-white rounded transform rotate-45 flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-900 rounded transform -rotate-45"></div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2024 Nusantara Group. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;