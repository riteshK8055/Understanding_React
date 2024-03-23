import React from "react";
import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "./RestaurantCard";

const Body = () => {

    return(

        <div className="restaurant-list">

            {
                RestaurantList.map((restaurant) => {

                   return  <RestaurantCard {...restaurant.info} />
                })
            }
            
        </div>
    );
};

export default Body;