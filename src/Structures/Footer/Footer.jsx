import React from 'react';
import { Link } from 'react-router-dom';
import Bird from '../../assets/bird_2.jpg';

function Footer() {
  return (
    <footer className=" text-blue-500 p-4 shadow-inner fixed bottom-0 left-0 right-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        { <Link to="/" target='blank'><img src={Bird} alt="TV stack" className='h-15 bg-transparent  ' /></Link>}
      
        <div className="text-sm mt-4 md:mt-0">
          © {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;