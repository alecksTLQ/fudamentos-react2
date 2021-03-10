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
  const [state, setState] = useState({
    clicks: 0,
    title: ''
  })

  /* 
    metodo para mezclar el estado actual con el siguiente
    y asi mantener todas las propiedades del objeto
  */
  const merge =(nextState)=>{
    setState({
      ...state,
      ...nextState
    })
  }

  const addClicks =()=>{
    merge({
      clicks: state.clicks +1
    })
  }

  const handleInput =(e)=>{
    const title = e.target.value

    merge({
      title
    })
  }

  return(
    <div>
      <Header/>
      <input
        type="text"
        value={state.title}
        onChange={handleInput}
      ></input>
      <button onClick={addClicks}>
        clicks ({state.clicks})
      </button>
      <h3> {state.title} </h3>
    </div>
  )
}

export default App;
