import React, { useEffect, useState } from "react";
import ListaCategorias from "../components/ListaCategorias";
import '../assets/css/blog.css';
import { Link, Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import ListaPost from "../components/ListaPost";
import { busca } from "../api/api";
import SubCategoria from "./SubCategoria";

const Categoria = () => {

  const { id } = useParams()

  // Retornando o path da rota atual
  const { url, path } = useRouteMatch()

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

    <ul className="lista-categorias container flex">
      {
        subcategorias.map((subcategoria) => (
          <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`}  key={subcategoria}>
            <Link to={`${url}/${subcategoria}`}>
              {subcategoria}
            </Link>
          </li>
        ))
      }
    </ul>

    {/* Criando rotas aninhadas */}
    <Switch>
      <Route exact path={`${path}/`}>
        <ListaPost url={`/posts?categoria=${id}`}/>
      </Route>

      <Route path={`${path}/:subcategoria`}>
        <SubCategoria/>
      </Route>
    </Switch>
    </>
  )
}

export default Categoria