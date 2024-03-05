import {useCallback, useState} from 'react';

function App() {

  const [length , setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password , setPassword] = useState("");


  const passwordGenerator = useCallback(()=>{

    let pass = "";
    let str = "ABCDEFGHIJLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


    if(numberAllowed)  str += "0123456789";
    if(charAllowed)   str += "~!@#$%^&*()[]{}";


    for(let index = 1 ; index<Array.length; index++) {

      let char =Math.floor(  Math.random() * str.length +1 );

      pass = str.charAt(char);

    }

    setPassword(pass);

  } , [length, numberAllowed , charAllowed , setPassword]);

  
  return (
    <>
      
      



    </>
  )
}

export default App
