import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// function MyApp() {
//   return (
//     <>
//     <h1>Chai aur Pritam</h1>
//     </>
//   )
// }

// const reactElement = {
//   type : 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }
const newElement = (
  <a href="https://google.com" target='_blanks'>Visit google</a>
)
const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target : '_blank'
  },
  'click me to visit',
  anotherUser
)


createRoot(document.getElementById('root')).render(
   // <MyApp />
   // newElement
   //reactElement
   <App />
)
