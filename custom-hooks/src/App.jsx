import { useState,useEffect } from 'react'
import useStorage from './hooks/useStorage'
import './App.css'

function App() {

  const[text,setText] = useState("")
  useEffect(() => {
    setText(localStorage.getItem("Text"))
  },[])
  useStorage(text)

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} value={text}/>
    </div>
  )
}

export default App
