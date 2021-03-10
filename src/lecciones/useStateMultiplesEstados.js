import React, { Component, useState} from 'react'


/* 
  hooks, uso de useState con un objeto
  y poder tener mas de una propiedad del objeto
*/

const Header =()=>{
  return(
    <h1> hook useSate </h1>
  )
}

const App =()=>{
  /* este es un hook , se declara un hook por cada propiedad*/
  const [clicks, setClicks] = useState(50)
  const [title, setTitle] = useState('M palabra')

  const addClicks=()=>{
    setClicks(
      clicks + 1
    )
  }

  const handleInput =(e)=>{
    const title = e.target.value

    setTitle(title)
  }

  return(
    <div>
      <Header/>
      <input
        type="text"
        value={title}
        onChange={handleInput}
      ></input>
      <button onClick={addClicks}>
        clicks ({clicks})
      </button>
      <h3> {title} </h3>
    </div>
  )
}

export default App;
