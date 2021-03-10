import React, { Component, useState} from 'react'


/* hooks, uso de useState */

const Header =()=>{
  return(
    <h1> hook useSate </h1>
  )
}

const App =()=>{
  /* el estado, funcion con la cual se va a actualizar */
  const [isActive, setActive] = useState(false)

  const toggle =()=>{
    setActive(!isActive)
  }

  return(
    <div>
      {isActive && <Header></Header>}
      <button onClick={toggle}>
        { isActive ? 'Desactivar' : 'Activar'}
      </button>
    </div>
  )
}

export default App;
