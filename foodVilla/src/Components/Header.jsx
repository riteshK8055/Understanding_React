import React, { useState } from "react";




const Title = (

    <div className="title">

        <a href="/">

           <img src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj" alt="FoodVilla" />

        </a>

    </div>
)

const Header = () => {

    const [isLoggedIn, setIsloggedIn] = useState(false);

    return (

          

         <div className="container">

             {Title}

             <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact Us</li>
                <li>Cart</li>
             </ul>

           { isLoggedIn ? (<button onClick={() =>setIsloggedIn(false)}>Logout</button> ):( <button onClick={() => setIsloggedIn(true)}>Login</button> )}

         </div>
    );
};


export default Header;