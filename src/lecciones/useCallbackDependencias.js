import React, {useState, useCallback} from 'react'


/* 
  uso de useCallback con dependencias 
*/

const Header =()=>{
  return(
    <h1> uso de forwarRef y hook useImperativeHandle  </h1>
  )
}

const getRandomColor =() => '#' + Math.random().toString(16).slice(2,8)

const Button = React.memo(

  (props)=>{
    const estilos ={
      padding: '1em',
      fontSize: '20px',
      background: getRandomColor()
    }
  
    return(
      <button style={estilos} onClick={props.callback}>
        {props.children}
      </button>
    )
  }

)

const App =()=>{

  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)

  const incrementA = useCallback(

    ()=>{
      setCountA(
        countA => countA + 1
      )
    },
    []
  )

  const incrementB = useCallback(
    ()=>{
      setCountB(
        countB => countB  + countA
      )
    },
    [countA]
  )
  
  return(
    <div>
      <Header/>

      <Button callback={incrementA}>
        increment A
      </Button>

      <Button callback={incrementB}>
        increment B
      </Button>
      <h3>
        contador A: {countA} contador B: {countB}
      </h3>
    </div>
  )
}

export default App;
