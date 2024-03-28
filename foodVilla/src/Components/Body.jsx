import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../config";
import { useState } from "react";
import Shimmer from "./Shimmer";


const filterData = (searchInput, restaurants) =>{

        const filterData = restaurants.filter((restraunt) => 

        restraunt.info.name.toLowerCase().includes(searchInput)
    );

    return filterData;
}



const Body = () => {

    const [searchInput , setSearchInput] = useState("");
    const [restaurants , setRestaurants] = useState(RestaurantList)
    const [filteredRestaurant , setFilteredRestaurant] = useState([]);


    useEffect(() => {

          getRestaurant();

    },[]);

    async function getRestaurant(){

      const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.920887&lng=77.6156642&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
    }

    //not render component (early return)
    if(!restaurants) return null;



    return (filteredRestaurant.length === 0 ) ? <Shimmer /> : (

      <> 

      <div className="search-container">

           <input type="text"
            className="search-input"
            placeholder="Search"
            value= {searchInput}
            onChange={(e) =>{
                 
                 setSearchInput(e.target.value.toLowerCase())
            }}
            
            />

            <button
             className="btn"
             onClick={() =>{

               const data = filterData(searchInput , restaurants)
               setFilteredRestaurant(data)

             }}
             >Search</button>

            
      </div>


      <div className="restaurant-list">

          {       
                   
                   filteredRestaurant.map((restaurant) => {

                     return  <RestaurantCard {...restaurant.info } key={restaurant.info.id} />
                   })
          };

       </div>  
  </>

    );
};

export default Body;