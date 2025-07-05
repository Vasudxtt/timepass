import React from 'react';
import { Link } from 'react-router-dom';
import Gmil from '../../assets/gmil.webp';
import Image from '../../assets/image.png';
import Blu from '../../assets/blu.webp';
import F from '../../assets/f.png';
import Twitter from '../../assets/twitter.png';
import Ser from '../../assets/ser.jpg';
import Bird from '../../assets/bird_2.jpg';
import ThemeToggle from '../../components/ThemeToggle';
function Header() {
  return (
    <header className=" text-red-500 p-4 shadow-md fixed top-0 left-0 w-full z-10">
      <div>
        <div className='header-top'>
          <div className="container mx-auto flex justify-between items-center">
            <div className=" flex gap-2 text-xl font-bold text-red-500">
              <Link to="mailto:xyz@gmail.com" target="_blank" className="hover:text-[orange]">
                <img src={Gmil} alt="TV stack" className='h-10 justify-start' />
              </Link>
               {<Link to="tel:+91945635368900" target="_blank" className="hover:text-[orange]">
                <img src={Image} alt="TV stack" className='h-10 bg-transparent opacity-60 ' />
              </Link>}
            </div>
              <ThemeToggle />
            <div>
              <div className=" flex gap-2 text-xl font-bold text-red-500">
              <Link to="https://bsky.app/intent/compose" target="_blank" className="hover:text-[orange]">
                <img src={Blu} alt="TV stack" className='h-10 justify-end' />

              </Link>
              <Link to="http://www.facebook.com/share.php?u=[URL]&title=[TITLE]" target="_blank" className="hover:text-[orange]">
                <img src={F} alt="TV stack" className='h-10 bg-transparent opacity-25 ' />
              </Link>
               <Link to="https://twitter.com/intent/tweet?text=[TEXT]" target="_blank" className="hover:text-[orange]">
                <img src={Twitter} alt="TV stack" className='h-10 bg-transparent opacity-25 ' />

              </Link>
            </div>
            </div>
          </div>
        </div>
        <div className='header-bottom'>
          <div className="container mx-auto flex justify-between items-center">
          {/* Navigation */}
          <div>
               { <Link to="/" target='blank'><img src={Bird} alt="TV stack" className='h-15 bg-transparent  ' /></Link>}
          </div>
            
          <nav className="flex space-x-4 text-red-500">
            <Link to="/home" target="_blank" className="hover:text-[orange]">
              Home
            </Link>
            <Link to="/about" target="_blank" className="hover:text-[orange]">
              About
            </Link>
            <Link to="/contact" target="_blank" className="hover:text-[orange]">
              Contact Us
            </Link>
          </nav>
          <div className="flex gap-2">
               { 
                <>
                <input type='text' placeholder='Search' className='border-solid rounded-full'/>
                <img src={Ser} alt="TV stack" className='h-10 bg-transparent opacity-25 ml-[-24%] ' 
                onClick={()=>{
                  window.location.href = '/about';
                }}/>
                </>
                }
          </div>
          </div>
        </div>
      </div>
    </header >
  );
}

export default Header;