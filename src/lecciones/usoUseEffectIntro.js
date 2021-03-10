import React, { Component, useState, useEffect} from 'react'


/* 
  uso del hook useEffect
*/

const Header =()=>{
  return(
    <h1> hook useSate </h1>
  )
}

const App =()=>{
  /* este es un hook , se declara un hook por cada propiedad*/
  const [clicks, setClicks] = useState(0)

  /*
    emula el comportamiento de los metodos 
      componentDidMount
      componentDidUpdate
      componentWillUnmount
  */
  useEffect(()=>{
    //componentDidMount
    //componentDidUpdate
    console.log('dentro de useEffect' ,clicks)

    console.log('-----------------------------')

    return()=>{
      //componentWillUnmount
      console.log('return de useEffect', clicks)

    }
  })

  const addClicks=()=>{
    setClicks(
      clicks + 1
    )
  }

  return(
    <div>
      <Header/>
      <button onClick={addClicks}>
        clicks ({clicks})
      </button>
    </div>
  )
}

export default App;
