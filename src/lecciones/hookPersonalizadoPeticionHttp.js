import React, {useState, useEffect} from 'react'


/* 
  
*/

const Header =()=>{
  return(
    <h1> uso de hook personalizado para hacer peticion http  </h1>
  )
}

const useFetch =(url)=>{
  /*
    hook personalizado useFetch
      encapsula logica para realizar una peticion http
      data es la propiedad que almacenara el resultado de la peticion 
      setData metodo por el cual se actualiza el data
      isFetching determina si la peticion aun se esta efectuando
  */
  const [data, setData] = useState([])
  const [isFetching , setFetching] = useState(true)

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setData(data)
      setFetching(false)
    })
    
  }, [url])
  /* la dependencia url, indica que en caso de esta cambiar el useEffect se volvera a disparar */

  /* el return se hace en forma de arreglo para asi poder renombrarlo desde donde se utilice el hook personalizado */
  return [
    data,
    isFetching
  ]
}

const App =()=>{

  /*usando el hook personalizado 
    users = data, isLoading= isFetching, estos son los datos que se retorna desde del hook
    y la url es el parametro que recibe el hook
  */
  const [users, isLoading] = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  )
  
  return(
    <div>
      <Header/>
      {isLoading && <h1>Cargango...</h1>}
      <ul>
        {
          users.map((user)=>{
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