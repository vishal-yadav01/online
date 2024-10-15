import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">ECOMZY</h2>
        <p className="text-gray-400 mt-2">
          ECOMZY is a platform where you can share and discover amazing photos.
          Our community is dedicated to showcasing beautiful imagery from around
          the world, step by step, with the required source code.
        </p>
        <p className="text-gray-400 mt-2">
          Founder: <span className="font-bold">Vishal Yadav</span>
        </p>
      </div>
      <div className="flex justify-center space-x-6 mb-8">
        <a href="#" className="text-white text-2xl hover:text-gray-400">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-white text-2xl hover:text-gray-400">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-white text-2xl hover:text-gray-400">
          <i className="fab fa-google-plus"></i>
        </a>
        <a href="#" className="text-white text-2xl hover:text-gray-400">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#" className="text-white text-2xl hover:text-gray-400">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="border-t border-gray-700 pt-4">
        <p className="text-center text-gray-500">
          Copyright ©2024{" "}
          <a href="#" className="text-white">
            ECOMZY
          </a>
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-white hover:underline">
            Home
          </a>
          <a href="#" className="text-white hover:underline">
            About
          </a>
          <a href="#" className="text-white hover:underline">
            Contact
          </a>
          <a href="#" className="text-white hover:underline">
            Blog
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
