import React, { Component, useState, useEffect} from 'react'


/* 
  uso del hook useEffect
  ejemplo 1
*/

const Header =()=>{
  return(
    <h1> hook useSate </h1>
  )
}

const App =()=>{

  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  const handleMove=(e)=>{
    setMouseX(e.clientX)
    setMouseY(e.clientY)
  }

  useEffect(()=>{
    window.addEventListener('mousemove', handleMove)

    return()=>{
      window.removeEventListener('mousemove', handleMove)
    }
  })
  
  return(
    <div>
      <Header/>
      <h1>
        x: {mouseX} y: {mouseY}
      </h1>
    </div>
  )
}

export default App;
