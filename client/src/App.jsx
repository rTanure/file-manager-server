import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const textRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    console.log(textRef.current.value)
  }

  return (
    <>
      <section>
        <form 
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
            gap: "20px",
            margin: "0 auto",
          }}
        >
          <input 
            type="text" 
            style={{
              padding: "10px",
              borderRadius: "5px"
            }}
            placeholder='Título do documento'
            required

          />
          <textarea 
            required
            id='content'
            placeholder='Conteúdo do documento'
            type="text"
            ref={textRef} 
            style={{
              height: "200px",
              resize: "none",
              padding: "10px",
              borderRadius: "5px",
            }}
          />
          <button type='submit'>Enviar</button>
        </form>
      </section>
    </>
  )
}

export default App
