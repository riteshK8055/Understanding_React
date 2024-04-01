import React from "react"
import { useContext } from "react";
import userContext from "../utils/useContext";

const Footer = () => {

  const {user} = useContext(userContext)
    return (

       <div>
          <h1>This is Footer</h1>
          <h1>{user.name}</h1>
       </div>
      
    )
};

export default Footer;