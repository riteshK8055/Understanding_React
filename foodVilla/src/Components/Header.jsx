import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/useContext";
import { useSelector } from "react-redux";
// import store from "../utils/store";





const Title = (

    <div className="title">

        <a href="/">

           <img className="w-24 h-24" src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj" alt="FoodVilla" />

        </a>

    </div>
)

const Header = () => {

    const [isLoggedIn, setIsloggedIn] = useState(false);
    
    const isOnline = useOnline();

    const {user} = useContext(userContext);

   const cartItems = useSelector(store => store.cart.items);

   console.log(cartItems)

    return (


      
          <div className="border-2 border-black p-2 bg-pink-50 shadow-lg">
            <div className="flex justify-between ">

              {Title}
            
             <ul className="flex space-x-5 space-y-5">

                <Link to="">
                   <li > </li>
                </Link>
                <Link to="/">
                   <li >Home</li>
                </Link>
   
                <Link to="/about">
                   <li>About us</li>
                </Link>

                <Link to = "/contact">
                    <li>Contact Us</li>
                </Link>

                <Link to = "/instamart">
                  <li>Instamart</li>
                </Link>

                
                <Link to= "/cart">
                  < li className="px-2"> Cart -{cartItems.length} items</li>    
                </Link>
               
             </ul>

             <h1 >{isOnline?"🟢":"🔴"}{user.name} </h1>

                  { isLoggedIn ? (<button  onClick={() =>setIsloggedIn(false)}>Logout</button> ):( <button onClick={() => setIsloggedIn(true)}>Login</button> )}

            </div>
         </div>

         
    );
};


export default Header;