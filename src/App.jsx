import { useState } from 'react'
import './App.css'
import Home from './home.jsx'
export default function App() {

  let [count, setCount]=useState(0);

  return (
    
    <>
    <Home/>
    
    </>
  )
}
