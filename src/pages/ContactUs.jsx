import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="flex justify-center items-center w-full h-full mt-100">
      <h1 className="text-6xl text-purple-800">
        Contact Us
        <p> <Link to="mailTo:xyz@gmail.com" className="text-2xl text-red-800">GMAIL</Link></p>
        <p><Link to="tel:9876543210" className="text-2xl text-red-800">MOBILE</Link></p>
      </h1>
    </div>
  );
}