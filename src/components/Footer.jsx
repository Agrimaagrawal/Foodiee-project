import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <a href="#" className="text-gray-400 hover:text-white">
              About
            </a>
            <span className="mx-4 text-gray-400">•</span>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact
            </a>
            <span className="mx-4 text-gray-400">•</span>
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base leading-6 text-gray-400">
              &copy; 2024 Food Delivery App. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
