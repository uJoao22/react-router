import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './paginas/Home'
import Sobre from './paginas/Sobre'

function App() {
  return (
    // Envolvendo toda a aplicação em um componente de BrowserRouter para genrenciar as Rotas
    // Envolvendo cada componente que tenho em um componente Route e definido o path que será usado para a visualização
    <Router>

      <Route path="/">
        <Home/>
      </Route>

      <Route path="/sobre">
        <Sobre/>
      </Route>

    </Router>
  )
}

export default App
