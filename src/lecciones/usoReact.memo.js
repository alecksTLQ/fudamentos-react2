import React, {useState} from 'react'


/* 
  uso de React.memo
  sirve para que solo se vuelvan a renderizar los componentes que si 
  se actualizaron y no todo
*/

const Header =()=>{
  return(
    <h1> uso de React.memo  </h1>
  )
}

const Counter = React.memo(

  (props)=>{
    console.log('Render <Counter/>')
    return(
      <h3> {props.count} </h3>
    )
  }

)

const Title= React.memo(

  (props)=>{
    console.log('Render <Title/>')
    return(
      <h3> {props.title} </h3>
    )
  }

)

const Title2= React.memo(

  ({info})=>{
    console.log('Render <Title2/>')
    return(
      <h3> {info.title} </h3>
    )
  },
  /* funcion para evaluar si las props anteriores y las siguientes 
    cambiaron y asi determinar si este componente se vuelve a renderizar o no
    ya que Title2 recibe como parametro un objeto a diferencia de Title que recibe un texto
  */
  (prevProps, nextProps)=>{
    if(prevProps.info.title===nextProps.info.title){
      return true
    }

    return false

  }
)

const App =()=>{

  const [title, setTitle] =useState('')
  const [count, setCount] =useState(0)
  
  const handleInput=(e)=>{
    setTitle(e.target.value)
  }

  const handleAdd=()=>{
    setCount(count + 1)
  }
  return(
    <div>
      <Header/>
      <input 
        type='text'
        onChange={handleInput}
      />
      <button onClick={handleAdd}>
        add
      </button>

      <Counter count={count}></Counter>
      <Title title={title}></Title>
      <Title2 info={{title}}></Title2>
    </div>
  )
}

export default App;
