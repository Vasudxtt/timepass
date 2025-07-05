import React from 'react';
import {Link} from 'react-router-dom';
import TvStackImage from '../assets/tv_stack.png'; // Import the image

function Homes() {
  return (
    <div className="flex justify-center items-center w-full h-full mt-[15%]">
       <Link to='/tv'> <img src={TvStackImage} alt="TV stack" target="_blank" className='min-h-[1vh]' /></Link>
    </div>
  );
}

export default Homes;