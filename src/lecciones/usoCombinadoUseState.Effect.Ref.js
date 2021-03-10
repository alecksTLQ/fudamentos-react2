import React, { useState, useEffect,  useRef} from 'react'


/* 
  uso del hook useRef, useState, useEffect
  
*/

const Header =()=>{
  return(
    <h1> hook useRef, useState, useEffect </h1>
  )
}

const App =()=>{

  const [name, setName] = useState('')
  const [productos, setProductos] = useState([])

  const entrada = useRef()


  useEffect(()=>{
    // debounce
    setTimeout(()=>{
      if(name===entrada.current.value){
        //peticion al api
        fetch('https://universidad-react-api-test.luxfenix.now.sh/products?name='+name)
        .then(res=> res.json())
        .then(data => setProductos(data.products))
      }
    }, 600)

    
  }, [name])

  const handleInput = (e)=>{
    setName(e.target.value)
  }

  return(
    <div>
      <Header/>
      <input
        type="text"
        onChange={handleInput}
        ref={entrada}
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
