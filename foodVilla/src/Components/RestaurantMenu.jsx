import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const {id}  = useParams();
    console.log(id);

    const[ restraunt , setRestraunt] = useState({});
    const[menu , setMenu] = useState(null);


    useEffect(() => {

        getRestaurantInfo();
       
    },[]);


    const getRestaurantInfo = async () => {

        const data =await  fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);
        const json = await data.json();
        console.log(json.data.cards[2].card.card.info)
        setRestraunt(json.data.cards[2].card.card.info);
        console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
        setMenu(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
    }

    if(!menu){

        return <Shimmer />
    }
    return (

    <div className="Menu">

        <div className="card">

          <h1>Restaurant id :{id}</h1>
          <h2>{restraunt.name}</h2>
          <img  src={IMG_CDN_URL + restraunt.cloudinaryImageId} />
          <h3>{restraunt.city}</h3>
          <h3>{restraunt.costForTwo}</h3>
          <h3>{restraunt.avgRating}</h3>

        </div>

        { <div> 

            <h1>Menu</h1>
            <ul>
            {Object.values(menu).map((item) => <li key={item.card.info.id}>{item.card.info.name}</li>)}
            </ul>
        </div>   }

    </div>
    )
}

export default RestaurantMenu;