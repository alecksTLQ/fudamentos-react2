import React, { useState, useEffect,  useRef} from 'react'
import {useDebounce} from 'use-debounce'


/* 
  uso del hook useState, useEffect y haciendo un debounce mas limpio
  instalando el use-debounce
  npm i use-debounce
*/

const Header =()=>{
  return(
    <h1> hook useRef, useState, useEffect </h1>
  )
}

const App =()=>{

  const [name, setName] = useState('')
  // hace la tarea debounce 
  const [search] = useDebounce(name, 1000)
  const [productos, setProductos] = useState([])

  useEffect(()=>{

        //peticion al api
        fetch('https://universidad-react-api-test.luxfenix.now.sh/products?name='+name)
        .then(res=> res.json())
        .then(data => setProductos(data.products))
    
  }, [search])

  const handleInput = (e)=>{
    // e es el evento del onChange
    setName(e.target.value)
  }

  return(
    <div>
      <Header/>
      <input
        type="text"
        onChange={handleInput}
      />
      <ul>
        {
          productos.map((producto)=>{
            return(
              <li key={producto.id}>
                {producto.name}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App;
