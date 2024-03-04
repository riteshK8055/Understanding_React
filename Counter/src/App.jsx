import { useState } from 'react'

import './App.css'

function App() {

    const [counter , setCounter] = useState(10);



    const addValue = () => {

        if(counter<20){

            setCounter(counter+1);
        }
    }

    const removeValue = () => {

        if(counter>0){

            setCounter(counter-1);
        }
    }


  return(

<>

<h1>Chai Aur Code</h1>
<h2>Counter</h2>

<button onClick={addValue}>AddValue</button>
<br />
<h1>{counter}</h1>
<br />
<button onClick={removeValue}>RemoveValue</button>
</>


  )
 
}

export default App
