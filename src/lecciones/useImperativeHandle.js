import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react'


/* 
  uso del hook useImperativeHandle, el uso de este hook no es muy recomendable
*/

const Header =()=>{
  return(
    <h1> uso de forwarRef y hook useImperativeHandle  </h1>
  )
}

const FancyInput = forwardRef((props, ref)=>{

  const [text, setText] = useState('***')
  const nombreRef = useRef()

    /* primer parametro el ref, funcion de flecha
      dentro del useImperativeHandle se definen los metodos los cuales
      podran ser accedidos desde el exterior
    */
    useImperativeHandle(ref, ()=>{
      return {
        dispatchAlert: ()=>{
          alert('hola')
        },

        updateText: (mensaje)=>{
          setText(mensaje)
        },

        focusInput: ()=>{
          nombreRef.current.focus()
        }
      }
    })

    return(
      <div>
        <p> {text} </p>
        <input
          type='text'
          name='nombre'
          placeholder='Nombre'
          ref={nombreRef}
        />
      </div>
    )
  }

)

const App =()=>{
  
  //ref del componente fancyinput
  const fancyInput = useRef()

  /*con el boton del componente padre puedo acceder al metodo dispatchAler 
    el cual es un metodo del hijo fancyinput accedo a el atraves de su ref
  */

  /* 
    Los mtd dentro usan la ref fancyinput para acceder a metodos del hijo de app
    <FancyInput/>
  */

  //mtd 1
  const handleClick=()=>{
    fancyInput.current.dispatchAlert()
  }

  //mtd 2
  const updateTexto=()=>{
    fancyInput.current.updateText('hola desde el <app/>')
  }

  //mtd 3
  /* a traves del fancyinput que es una ref se accede al metodo focusinput el caul esta
    contenido en el hijo de app, el focusinput() a su vez hace una ref al elemento input
  */
  const focusInputApp=()=>{
    fancyInput.current.focusInput()
  }

  return(
    <div>
      <Header/>

      <FancyInput ref={fancyInput}></FancyInput>

      <button onClick={handleClick}>
        disparar
      </button>
      <button onClick={updateTexto}>
        enviar texto al fancyinput
      </button>
      <button onClick={focusInputApp}>
        haciendo focus al input
      </button>
    </div>
  )
}

export default App;
