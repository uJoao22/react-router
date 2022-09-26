import React from 'react'
import './assets/css/base/base.css'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'

function App() {
  // Criando função para gerenciar se estou na rota sobre ou não e o que deve ser exibido
  const Router = () => {
    return window.location.pathname === '/sobre' ? <Sobre/> : <Home/>
  }

  return (
    <>
      { Router() }
    </>
  )
}

export default App
