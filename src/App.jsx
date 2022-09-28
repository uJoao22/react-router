import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './components/Cabecalho'

function App() {
  return (
    // Envolvendo toda a aplicação em um componente de BrowserRouter para genrenciar as Rotas
    // Envolvendo cada componente que tenho em um componente Route e definido o path que será usado para a visualização
    <Router>

      <Cabecalho/>

      {/* Usando para evitar o comportamento padrão do react-router que mesmo quando achar a rota que preciso, continuar procurando e correr risco de encontrar uma outra rota com o mesmo nome e exibir ambas */}
      <Switch>

        {/* Adicionando Propriedade extract para não exibir as duas rotas juntas, pois qualquer rota que tiver "/" o componente Home seria exibido */}
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/sobre">
          <Sobre/>
        </Route>

        {/* Criando rota padrão, para caso de buscar rotas inexistentes */}
        <Route>
          <Pagina404/>
        </Route>

      </Switch>

    </Router>
  )
}

export default App
