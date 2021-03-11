import React, {useState, useEffect} from 'react'


/* 
  uso de hooks personalizados ejemplo 1
*/

const Header =()=>{
  return(
    <h1> uso de hooks personalizados  </h1>
  )
}

/*hook useSizes obtiene el tamaño de la ventana del navegador
  y esta funcionalidad se puede utilizar desde el app como un hook
*/
const useSizes =()=>{
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  const handleResize=()=>{
    setWidth(
      window.innerWidth
    )
    setHeight(
      window.innerHeight
    )
  }

  useEffect(()=>{
    window.addEventListener('resize', handleResize)

    return()=>{
      window.removeEventListener('resize', handleResize)
    }
  },[])

  return {
    width,
    height
  }
}

const App =()=>{

  const {height, width} = useSizes()
  
  return(
    <div>
      <Header/>
      <h2>
        Height: {
          height
        }
      </h2>
      <h2>
        Width: {
          width
        }
      </h2>
    </div>
  )
}

export default App;
