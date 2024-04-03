import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
 import { addItem } from "../utils/cartSlice";
import {  useDispatch } from "react-redux";


const RestaurantMenu = () => {

    const {id}  = useParams();

    const[ restraunt , setRestraunt] = useState({});
    const[menu , setMenu] = useState(null);


    useEffect(() => {

        getRestaurantInfo();
       
    },[]);


    const getRestaurantInfo = async () => {

        const data =await  fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);
        const json = await data.json();
        
        setRestraunt(json?.data?.cards[2]?.card?.card?.info);
        setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    }

    const dispatch = useDispatch();

   
    const addFoodItems = (item) => {

        dispatch(addItem(item));

    }

    if(!menu){

        return <Shimmer />
    }
    return (

    <div className="Menu flex justify-evenly mt-3 border-2 border-black p-2 bg-purple-50 ">

        <div className="card w-fit h-fit border-2 border-transparent bg-purple-100 shadow-2xl " >

          <h1 className="font-semibold">Restaurant id :{id}</h1>
          <h2 className="font-mono font-extrabold">{restraunt.name}</h2>
          <img className="h-80 w-80"  src={IMG_CDN_URL + restraunt.cloudinaryImageId} />
          <h3>{restraunt.city}</h3>
          <h3>{restraunt.costForTwo/100} rs</h3>
          <h3 className="font-sans text-lg font-extrabold">{restraunt.avgRating}</h3>

        </div>

        { <div> 

            <h1>Menu</h1>
            <ul  >
            {Object.values(menu).map((item) => <li className="p-1" key={item?.card?.info?.id}>{item?.card?.info?.name}-
              <button 
              onClick={() => {

               addFoodItems(item);
                
              }}
              className="bg-blue-100 mx-2 p-1 rounded-md">add</button></li>)}
            </ul>
        </div>   }

    </div>
    )
}

export default RestaurantMenu;