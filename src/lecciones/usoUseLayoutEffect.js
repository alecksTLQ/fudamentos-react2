import React, { Component, useState, useEffect, useLayoutEffect} from 'react'


/* 
  uso del hook useLayoutEffect el cual es un metodo sincrono
  
*/

const Header =()=>{
  return(
    <h1> hook useLayoutEffect </h1>
  )
}


const App =()=>{

  const [count, setCount] = useState(0)

  const add =()=>{
    setCount(count + 1)
  }
  // es un metodo asincrono, se ejecuta se ejecuta despues de que se actualiza el DOM
  useEffect(()=>{
    console.log('useEffect 1')
  },[count])
  
  useEffect(()=>{
    console.log('useEffect 2')
  },[count])
  
  //es un metodo sincrono, se ejecuta antes de la actualizacion del DOM
  useLayoutEffect(()=>{
    console.log('useLayoutEffect 1')
  }, [count])
  
  useLayoutEffect(()=>{
    console.log('useLayoutEffect 2')
  }, [count])
  

  return(
    <div>
      <button onClick={add}>
        add ({count})
      </button>
    </div>
  )
}

export default App;
