import { useState } from "react"


const Counter = () => {
    const [count,setCount]= useState(0)
  return (
    <div>Counter
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)} disabled={count===0}>Increment</button>
        <button onClick={()=>setCount(0)} disabled={count===0}>reset</button>
    </div>
  )
}

export default Counter