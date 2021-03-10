import React, { Component, useState, useEffect} from 'react'


/* 
  uso del hook useEffect
  ejemplo 2
*/

const Header =()=>{
  return(
    <h1> hook useSate </h1>
  )
}

const App =()=>{

  const [num, setNum] = useState(0)
  const [emoji, setEmoji] = useState('😎')

  const addNum=()=>{
    setNum(num+1)
  }

  const toggleEmoji=()=>{
    const nexEmoji = emoji === '😎' ? '🥶' : '😎'
    setEmoji(nexEmoji)
  }

  /* controlar el useEffect
      para ello hay que pasarle como segundo parametro un array
      el cual puede estar vacio o puede contener una o mas propiedades 
      las cuales al momento de cambiar dispararan el useEffect 
  */
  useEffect(()=>{
    alert('useEffect 🐱‍🏍')
    return()=>{

    }
  }, [num])
  
  return(
    <div>
      <Header/>
      <button onClick={addNum}>
        add ({num})
      </button>

      <button onClick={toggleEmoji}>
        Alternar Emoji
      </button>

      <h1>
        {emoji}
      </h1>
    </div>
  )
}

export default App;
