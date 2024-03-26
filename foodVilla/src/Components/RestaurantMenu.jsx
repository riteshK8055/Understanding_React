import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";

const RestaurantMenu = () => {

    const {id}  = useParams();

    const[ restaurant , setRestaurant] = useState({});


    useEffect(() => {

        getRestaurantInfo();
       
    },[]);

    console.log(restaurant)

    const getRestaurantInfo = async () => {

        const data =await  fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=89571&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setRestaurant(json.data.cards[2].card.card.info);
    }
    return (

    <>

        <div>

          <h1>Restaurant id :{id}</h1>
          <h2>{restaurant.name}</h2>
          <img  src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
          <h3>{restaurant.area}</h3>
          <h3>{restaurant.costForTwo}</h3>
          <h3>{restaurant.avgRating}</h3>

        </div>

        {/* <div>
            {console.log(restaurant.menu.items)}
        </div> */}

    </>
    )
}

export default RestaurantMenu;