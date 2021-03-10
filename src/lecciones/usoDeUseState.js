import React, { Component, useState} from 'react'


/* hooks, uso de useState */

const Header =()=>{
  return(
    <h1> hook useSate </h1>
  )
}

const App =()=>{

  //retorna un array el cual contiene [value, fun()]
  //const hook =  useState(0) //estado
  //const clicks = hook[0]    //funcion

  //clicks representa una propiedad del estado y setClicks es una funcion
  const [clicks, setClicks] = useState(0) //esto es lo mismo de arriba pero usando destructuracion 

  const addClicks=()=>{
    setClicks(clicks + 1)
  }

  return(
    <div>
        <Header/>
        <button onClick={addClicks}>
          Clicks ({clicks})
        </button>
      </div>
  )
}

export default App;
