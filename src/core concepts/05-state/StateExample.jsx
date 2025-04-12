import { useState } from "react"

export default function StateExample() {
    const [count,setCount]= useState(0);
    console.log('Componenet rendered');
    const handClick=()=> {
        setCount(count+1);
    }
    return <>
    <h1>State Example</h1>
    <h3>Counter {count}</h3>
    <button onClick={handClick} className="bg-color">Increment</button>
    </>
   
}