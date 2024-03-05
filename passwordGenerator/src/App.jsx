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


    for(let index = 1 ; index<length; index++) {

      let char =Math.floor(  Math.random() * str.length +1 );

      pass = str.charAt(char);

    }

    setPassword(pass);

  } , [length, numberAllowed , charAllowed , setPassword]);

  
  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>

        <h1 className="text-white text-center my-3">Password Generator</h1>
        

        <div className="flex shadow rounded-lg overflow-hidden mb-4">

           
           <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
           />

           <button className="outline-none bg-blue-500 text-white px-3 py-5 shrink-0">Copy</button>
   

        </div>
 
        <div className='flex text-sm gap-x-2'>

           <div className='flex items-center gap-x-1'>

             <input 
             type="range"
             min={8}
             max={100}
             value={length}
             className='cursor-pointer'
             onChange={(e)=> {setLength(e.target.value)}}
             />

             <label>Length:{length}</label>


           </div>

           <div className="flex items-center gap-x-1">

           <input
            type="checkbox" 
            defaultChecked = {numberAllowed}
            id="number Input"
            onChange={()=>{

              setNumberAllowed((prev)=> !prev);
            }} 
            
            />

            <label htmlFor="numberInput">Numbers</label>

           </div>


           <div className="flex items-center gap-x-1">

           <input
            type="checkbox" 
            defaultChecked = {charAllowed}
            id="characterInput"
            onChange={()=>{

              setCharAllowed((prev)=> !prev);
            }} 
            
            />

            <label htmlFor="characterInput">Characters</label>

           </div>

        </div>

        


      </div>
      



    </>
  )
}

export default App