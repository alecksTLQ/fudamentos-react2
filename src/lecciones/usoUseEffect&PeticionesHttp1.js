import React, { Component, useState, useEffect} from 'react'


/* 
  uso del hook useEffect
  ejemplo 3, aplicado a peticiones http con fetch 
*/

const Header =()=>{
  return(
    <h1> hook useSate </h1>
  )
}

const App =()=>{

  const [users, setUsers] = useState([])
  const [active, setActive] = useState(true)

  useEffect(()=>{
    //la peticion se inicializa al momento de cargar todos los componentes
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>{
      setUsers(users)
      setActive(false)
    }
    )

    return()=>{

    }
  }, [])

  return(
    <div>
      {active && <h1>Cargando....</h1>}
      <ul>
        {
          users.map(user => {
            return(
              <li key={user.id}>
                {user.name}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App;
