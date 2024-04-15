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
  "Tech","Variables",
  "Functions",
  "Classes",
  "Objects",
  "Inheritance",
  "Polymorphism",
  "Interfaces", 
  "Exceptions", 
  "Collections", 
  "Streams"
]
const ButtonList = () => {


  return (
   
    <div className="">
       
       {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
      
    </div>

  )
}

export default ButtonList