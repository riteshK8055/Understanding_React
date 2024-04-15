import React from 'react';
import Button from './Button';

const list = [
  "Science",
  "Space",
  "Cooking",
  "Spanish",
  "History",
  "DIY",
  "Gaming",
  "Fitness",
  "Travel",
  "Art",
  "Books",
  "Tech"
]
const ButtonList = () => {


  return (
   
    <div className="flex ">
       
       {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
       {/* <Button  name = "cricket" /> 
       <Button  name = "news" /> 
       <Button  name = "anime" /> 
       <Button  name = "loksabhaa" /> 
       <Button  name = "wwe championship" /> 
       <Button  name = "javascript" /> 
       <Button  name = "react" /> 
       <Button  name = "frontend dev" /> 
       <Button  name = "skin care" />  */}
      
    </div>

  )
}

export default ButtonList