import React from "react";


const Title = (

    <div className="title">

        <a href="/">

           <img src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj" alt="FoodVilla" />

        </a>

    </div>
)

const Header = () => {

    return (

          

         <div className="container">

             {Title}

             <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact Us</li>
                <li>Cart</li>
             </ul>

         </div>

    );
};


export default Header;