import React, {useState, useMemo} from 'react'


/* 
  uso de useMemo
*/

const Header =()=>{
  return(
    <h1> uso de useMemo  </h1>
  )
}

const SuperList = ({list, log}) =>{

  console.log('render <SuperList/> '+log)

  return(
    <ul>
      {
        list.map(item =>{
          return(
            <li key={item}>
              {item}
            </li>
          )
        })
      }
    </ul>
  )
}

const App =()=>{

  const [clicks, setClicks] = useState(0)

  const add =()=>{
    setClicks(clicks + 1)
  }

  /* useMemo
    sirve para almacenar en memoria este componente y evitar que se este renderizando 
    en cada actualizacion del DOM, y solo se actualice renderize de nuevo en caso de 
    haber existido un cambio, para ello se hace a traves de su dependencia la que uno 
    defina,  por ejemplo cuando clicks se actualice, entonces deberia escribir clisk como parametro en el array del useMemo [clicks]
  */
  const memoList = useMemo(()=>{
    return(
      <SuperList
        list={[1,2,3,4,5,6,7,8,9,10]}
        log='memorizado'
      ></SuperList>
    )
  }, [])
  
  return(
    <div>
      <Header/>
      <button onClick={add}>
        clicks ({clicks})
      </button>
      <SuperList
        list={['orange','pink','purple','yellow']}
        log='Normal'
      />
      {memoList}
    </div>
  )
}

export default App;
