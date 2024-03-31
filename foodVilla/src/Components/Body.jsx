import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../config";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import filterData from "../utils/helper";
import useOnline from "../utils/useOnline";



const Body = () => {

    const [searchInput , setSearchInput] = useState("");
    const [restaurants , setRestaurants] = useState(RestaurantList)
    const [filteredRestaurant , setFilteredRestaurant] = useState([]);

    useEffect(() => {

      getRestaurant();

    },[]);

    async function getRestaurant(){

    const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
}

   const isOnline = useOnline();

   if(!isOnline) {

    return <h1>Offline , check your internet connection.....</h1>
   }
   

    //not render component (early return)
    if(!restaurants) return null;



    return (filteredRestaurant.length === 0 ) ? <Shimmer /> : (

      <> 

      <div className="search-container p-5 bg-pink-50 my-5">

           <input type="text"
            className="search-input p-1 m-1 rounded-sm border-2 border-purple-950 bg-purple-50"
            placeholder="Search"
            value= {searchInput}
            onChange={(e) =>{
                 
                 setSearchInput(e.target.value.toLowerCase())
            }}
            
            />

            <button
             className="btn p-1 m-1 bg-purple-700 hover:bg-purple-300 transition-all   rounded-md"
             onClick={() =>{

               const data = filterData(searchInput , restaurants)
               setFilteredRestaurant(data)

             }}
             >Search</button>

            
      </div>


      <div className="restaurant-list flex  flex-wrap ">

          {       
                   
                   filteredRestaurant.map((restaurant) => {

                     return (

                         <Link 
                            to={"/restaurant/"+restaurant.info.id }
                            key={restaurant.info.id}
                         >
                           <RestaurantCard {...restaurant.info }  />
                         </Link>
                     )
                   })
          };

       </div>  
  </>

    );
};

export default Body;