import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card' 

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Pritam",
    age: 21
  }

  let newArr = [1,3,4]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
    {/* <Card channel = "chaiaurcode" obj = {username : "pritam"
    } /> */}


    <Card userName = "chaiaurcode" someObj = {myObj} newArre = {newArr}/>
    <Card userName="Pritam" />
    <Card  />
    </>
  )
}

export default App
