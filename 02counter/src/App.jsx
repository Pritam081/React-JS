import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, setCounter] = useState(5)
//let counter = 5
const addValue = ()=>{
//counter++ 
if(counter == 20){
  setCounter(20)
}else{
  setCounter(++counter)
}
}
const removeValue = ()=>{ 
  if(counter == 0){
    setCounter(0)
  }else{
    setCounter(--counter)
  }
}
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick = {removeValue}>Remove value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
