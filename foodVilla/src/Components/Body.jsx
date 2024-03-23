import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../config";
import { useState } from "react";


const filterData = (searchInput, restaurants) =>{

        const filterData = restaurants.filter((restraunt) => 

        restraunt.info.name.includes(searchInput)
    );

    return filterData;
}

const Body = () => {

    const [searchInput , setSearchInput] = useState("");
    const [restaurants , setRestaurants] = useState(RestaurantList)
    const [filteredRestaurant , setFilteredRestaurant] = useState(RestaurantList);

    return(

        <> 

           <div className="search-container">

                <input type="text"
                 className="search-input"
                 placeholder="Search"
                 value= {searchInput}
                 onChange={(e) =>{
                      
                      setSearchInput(e.target.value)
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