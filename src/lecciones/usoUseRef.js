import React, { Component, useState, useEffect, useLayoutEffect, useContext, useRef} from 'react'


/* 
  uso del hook useRef
  
*/

const Header =()=>{
  return(
    <h1> hook useLayoutEffect </h1>
  )
}

const App =()=>{
  //definnir una ref
  const entrada = useRef()

  const focus =()=> entrada.current.focus()
  const blur =()=> entrada.current.blur()

  /* la ref en enlazado al input, y con ello al presionar los botones estos saben que elemento es  
     al que estan referenciando
  */
  return(
    <div>
      <Header/>
      <input 
        type='text'
        placeholder='ingresa tu texto'
        ref={entrada}
      />
       <button onClick={focus}>
         focus
       </button>
       <button onClick={blur}>
         blur
       </button>

    </div>
  )
}

export default App;
