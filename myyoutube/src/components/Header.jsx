import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars , faMicrophone  ,faSearch, faVideo, faBell , faUser} from '@fortawesome/free-solid-svg-icons';



const Header = () => {
  return (
    <div className="grid grid-flow-col p-3 shadow-lg">
      <div className='flex col-span-1 '>
      <button className='px-3 py-2  rounded-full hover:bg-gray-200'><FontAwesomeIcon className="h-6" icon={faBars} /></button>
      <img className="h-6 m-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png" alt="youtube Icon" />
      
      </div>
      <div className="col-span-10 text-center">
      <input className="w-1/2 border border-gray-400 rounded-l-full p-2 outline-blue-500" type="text" placeholder="Search....." />
      <button className="border border-gray-300 px-5 py-2 rounded-r-full items-center bg-gray-100 hover:bg-gray-200 "> <FontAwesomeIcon className='h-5' icon={faSearch} /> </button>
      <button className="border border-gray-300  py-2 px-3  mx-3 rounded-full items-center bg-gray-100 hover:bg-gray-200 "><FontAwesomeIcon className='h-5' icon={faMicrophone} /></button>
     
      </div>
      <div className="flex justify-evenly pt-2 ">
      <FontAwesomeIcon className='h-6' icon={faVideo} /> 
      <FontAwesomeIcon className='h-6' icon={faBell} />
      <FontAwesomeIcon className='h-6' icon={faUser} />
      </div>

    </div>
  )
}

export default Header