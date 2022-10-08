import React, { useEffect, useState } from "react";
import ListaCategorias from "../components/ListaCategorias";
import '../assets/css/blog.css';
import { Route, useParams, useRouteMatch } from "react-router-dom";
import ListaPost from "../components/ListaPost";
import { busca } from "../api/api";

const Categoria = () => {

  const { id } = useParams()

  // Retornando o path da rota atual
  const { path } = useRouteMatch()

  const [ subcategorias, setSubCategorias ] = useState([])

  useEffect(() => {
    // Definfindo uma função anonima que vai receber o resultado da busca e vai setar no setCategorias o resultado .subcategorias
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias)
    })
  }, [id])

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