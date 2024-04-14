import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilm,
  faStar,
  faGamepad,
  faUserPlus,
  faClockRotateLeft,
  faArrowTrendUp,
  faShirt,
  faGraduationCap,
  faShop,
  faMusic,
  faPodcast,
  faSignal,
  faNewspaper,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const MenuItems = () => {
  return (
    <div className="p-5 shadow-lg w-60  overflow-x-hidden overflow-y-scroll h-screen">
      <section>
        <ul>
          <li className="hover:bg-gray-200 rounded-lg flex space-x-5 items-center p-3">
            <button className="p-1">
              <FontAwesomeIcon className="h-5" icon={faHouse} />
            </button>
            <span>Home</span>
          </li>
          <li className="hover:bg-gray-200 rounded-lg flex space-x-5 items-center p-3">
            <button className="p-1">
              <FontAwesomeIcon className="h-5" icon={faFilm} />
            </button>
            <span>Shorts</span>
          </li>
          <li className="hover:bg-gray-200 rounded-lg flex space-x-5 items-center p-3">
            <button className="p-1">
              <FontAwesomeIcon className="h-5" icon={faStar } />
            </button>
            <span>Subscriptions</span>
          </li>
        </ul>
      </section>
      <div className="border border-gray-200 relative right-5 w-56"></div>
      <section>
        <ul>
          <li className="hover:bg-gray-200 rounded-lg flex space-x-5 items-center p-3">
            <button className="p-1">
              <FontAwesomeIcon className="h-5" icon={faUserPlus} />
            </button>
            <span>You</span>
          </li>
          <li className="hover:bg-gray-200 rounded-lg flex space-x-5 items-center p-3">
            <button className="p-1">
              <FontAwesomeIcon className="h-5" icon={faClockRotateLeft} />
            </button>
            <span>History</span>
          </li>
        </ul>
      </section>
      <div className="border border-gray-200 relative right-5 w-56"></div>
      <h1 className="font-bold text-lg p-2">Explore</h1>
      <section>
        <ul>
        <li className="hover:bg-gray-200 rounded-lg flex space-x-5 items-center p-3">
          <button className="p-1">
            <FontAwesomeIcon className="h-5" icon={faArrowTrendUp} />
          </button>
          <span>Trending</span>
        </li>
        <li className="hover:bg-gray-200 rounded-lg flex  space-x-5 items-center p-3">
          <button className="p-1">
            <FontAwesomeIcon className="h-5" icon={faShop} />
          </button>
          <span>Shopping</span>
        </li>
        <li className="hover:bg-gray-200 rounded-lg flex space-x-5  items-center p-3">
          <button className="p-1">
            <FontAwesomeIcon className="h-5" icon={faMusic} />
          </button>
          <span>Music</span>
        </li>
        <li className="hover:bg-gray-200 rounded-lg flex space-x-5 items-center p-3">
          <button className="p-1">
            <FontAwesomeIcon className="h-5" icon={faFilm} />
          </button>
          <span>Films</span>
        </li>
        <li className="hover:bg-gray-200 rounded-lg flex  space-x-5 items-center p-3">
          <button className="p-1">
            <FontAwesomeIcon className="h-5" icon={faSignal} />
          </button>
          <span>Live</span>
        </li>
        <li className="hover:bg-gray-200 rounded-lg flex space-x-5  items-center p-3">
          <button className="p-1">
            <FontAwesomeIcon className="h-5" icon={faGamepad} />
          </button>
          <span>Gaming</span>
        </li>
        <li className="hover:bg-gray-200 rounded-lg flex space-x-5 items-center p-3">
          <button className="p-1">
            <FontAwesomeIcon className="h-5" icon={faNewspaper} />
          </button>
          <span>News</span>
        </li>
        <li className="hover:bg-gray-200 rounded-lg flex  space-x-5 items-center p-3">
          <button className="p-1">
            <FontAwesomeIcon className="h-5" icon={faTrophy} />
          </button>
          <span>Sports</span>
        </li>
        <li className="hover:bg-gray-200 rounded-lg flex space-x-5  items-center p-3">
          <button className="p-1">
            <FontAwesomeIcon className="h-5" icon={faGraduationCap} />
          </button>
          <span>Courses</span>
        </li>

        <li className="hover:bg-gray-200 rounded-lg flex space-x-5 items-center p-3">
          <button className="p-1">
            <FontAwesomeIcon className="h-5" icon={faShirt} />
          </button>
          <span>Fashion & Beauty</span>
        </li>
        <li className="hover:bg-gray-200 rounded-lg flex  space-x-5 items-center p-3">
          <button className="p-1">
            <FontAwesomeIcon className="h-5" icon={faPodcast} />
          </button>
          <span>Podcasts</span>
        </li>
        </ul>
      </section>
    </div>
  );
};

export default MenuItems;
