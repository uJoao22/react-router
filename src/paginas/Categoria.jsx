import React from "react";
import ListaCategorias from "../components/ListaCategorias";
import '../assets/css/blog.css';
import { Route, useParams, useRouteMatch } from "react-router-dom";
import ListaPost from "../components/ListaPost";

const Categoria = () => {

  const { id } = useParams()

  // Retornando o path da rota atual
  const { path } = useRouteMatch()

  return(
    <>
    <div className="container">
      <h2 className="titulo-pagina">
        Pet Notícias
      </h2>
    </div>

    <ListaCategorias/>

    {/* Criando uma rota aninhada */}
    <Route exact path={`${path}/`}>
      <ListaPost url={`/posts?categoria=${id}`}/>
    </Route>
    </>
  )
}

export default Categoria