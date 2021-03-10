import React, { useState, useReducer ,useEffect,  useRef} from 'react'
import {useDebounce} from 'use-debounce'


/* 
  uso del hook useReducer
*/

const Header =()=>{
  return(
    <h1> hook useReducer </h1>
  )
}
/* metodo reducer maneja las actualizaciones del las propiedades del state */
const reducer =(state, action)=>{
  switch (action.type){
    case 'INCREMENT':
      return{
        ...state,
        count: state.count + 1
      }

    case 'DECREMENT':
      return{
        ...state,
        count: state.count - 1
      }
    case 'TITLE':
      return{
        ...state,
        title: action.title
      }

    default: 
      return state
  }
}

const App =()=>{

  /* 
    El useReducer permite agrupar varias propiedades 
    a diferencia del useState el cual por cada propiedad 
    hay que declarar una constante, mientras que useReduce
    agrupa esas propiedades en el denominado state y el dispatch

    el dispatch es un metodo el cual recibe el state y el tipo de action a realizar, 
        el state es la constante definida desde useReducer,
        el action contiene la operacion a ejecutar, dentro del action tmbn se puede incluir parametros
            como en el mtd 3

    El reducer es el metodo al que enviara los parametros el dispatch

    state: nombre del estado esto puede cambiar
    dispatch: nombre el disparador del metodo reducer, este nombre puede cambiar
    reducer: es el nombre del metodo encargado de manejar las actualizaciones de las propiedades
        en este caso count, title

  */
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    title: 'hola'
  })
  //mtd 1
  const increment=()=>{
    //type: tipo de operacion recibida por el reducer
    dispatch({
      type: 'INCREMENT'
    })
  }
  //mtd 2
  const decrement=()=>{
    dispatch({
      type: 'DECREMENT'
    })
  }

  //mtd 3
  const handleInput=(e)=>{
    dispatch({
      type: 'TITLE', title: e.target.value
    })
  }

  return(
    <div>
      <Header/>
      <input
        type="text"
        onChange={handleInput}
      />
      <h1> {state.title} </h1>
      <button onClick={increment}>
        + ({state.count})
      </button>
      <button onClick={decrement}>
        - ({state.count})
      </button>
    </div>
  )
}

export default App;
