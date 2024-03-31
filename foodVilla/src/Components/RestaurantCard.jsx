import React from "react";
import { IMG_CDN_URL } from "../config";



const RestaurantCard = ({ name , cloudinaryImageId , cuisines , avgRating }) => {

    return(

        <div className="Restaurant-card  w-80 h-fit p-2 m-2 shadow-2xl bg-purple-50 ">

            <img src={ IMG_CDN_URL + cloudinaryImageId} />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(" , ")}</h3>
            <h4>{avgRating}</h4>

        </div>
    );
};

export default RestaurantCard;