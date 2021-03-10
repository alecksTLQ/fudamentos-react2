import React, { Component, useState, useEffect, useLayoutEffect, useContext} from 'react'


/* 
  uso del hook useContext
  
*/

const Header =()=>{
  return(
    <h1> hook useLayoutEffect </h1>
  )
}

/* 
  Mycontext es un objeto el cual contiene 2 propiedades 
    Provides
    Consumer
*/
const MyContext = React.createContext()

//consumir context de forma tradicional
/*const Nieto =()=>{
  return(
    <MyContext.Consumer>
      {
        (context)=>(
          <div>
            <p>Nieto {context.count} </p>

            <button onClick={context.add}>
              Nieto Dispatcher
            </button>
          </div>
        )
      }
    </MyContext.Consumer>
  )
}*/

/* realizando consumer usando el useContext */
const Nieto =()=>{
  const {count, add} = useContext(MyContext)
  return(
    <div>
      <p>Nieto {count} </p>

      <button onClick={add}>
        Nieto Dispatcher
      </button>
    </div>
  )
}

const Hijo =()=>{
  return(
    <div>
      <p>hijo</p>
      <Nieto/>
    </div>
  )
}


const App =()=>{

  const [count, setCount] = useState(0)

  const add=()=>{
    setCount(count + 1)
  }
  /* el MyContext.Provider 
      permite enviar propiedades de estado como el count
      tambien funciones, las cuales pueden ser utilizadas
      por quien la consuma con el useContext
  */
  return(

    <MyContext.Provider
      value={
        {
          count,
          add
        }
      }
    >
      <div>
      <Header/>
      <button onClick={add}>
        add ({count})
      </button>

      <Hijo></Hijo>
    </div>
    </MyContext.Provider>
  )
}

export default App;
