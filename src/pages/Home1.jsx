import React from 'react';
import {Link} from 'react-router-dom';
import stak from '../assets/10.jpg'; // Import the image  

function Homes1() {
  return (
    <div className="bg-white flex justify-center items-center w-full h-full mt-[15%]">
       <Link to='/tv'> <img src={stak} alt="TV stack" target="_blank" className='min-h-[1vh]' /></Link>
    </div>
  );
}
export default Homes1;