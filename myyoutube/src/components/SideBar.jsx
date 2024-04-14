import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHouse , faFilm, faStar , faUserPlus} from '@fortawesome/free-solid-svg-icons';
import MenuItems from './MenuItems';


const SideBar = () => {
  return (

    <MenuItems />
//     <ul className='w-24 m-2 flex flex-col'>
//   <li className="hover:bg-gray-200 rounded-lg flex flex-col items-center py-5">
//     <button className='p-1'><FontAwesomeIcon className="h-6" icon={faHouse} /></button>
//     <span>Home</span>
//   </li>
//   <li className="hover:bg-gray-200 rounded-lg flex flex-col items-center py-5">
//     <button className="p-1"><FontAwesomeIcon className="h-6" icon={faFilm} /></button>
//     <span>Shorts</span>
//   </li>
//   <li className="hover:bg-gray-200 rounded-lg flex flex-col items-center py-5">
//     <button className="p-1"><FontAwesomeIcon className="h-6" icon={faStar} /></button>
//     <span>Subscriptions</span>
//   </li>
//   <li className="hover:bg-gray-200 rounded-lg flex flex-col items-center py-5">
//     <button className="p-1"><FontAwesomeIcon className="h-6" icon={faUserPlus} /></button>
//     <span>You</span>
//   </li>
// </ul>
  )
}

export default SideBar