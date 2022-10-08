import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { busca } from "../api/api";
import '../assets/css/blog.css';

const ListaCategorias = () => {

  const[categorias, setCategorias] = useState([])

  useEffect(() => {
    busca(`/categorias`, setCategorias)
  }, [])

  return (
    <ul className="lista-categorias container flex">

      {
        categorias.map((categoria) => (
          // Adicionando a barra no inicio para indicar que quero acessar aquela rota, pois sem a barra no inicio eu indico que quero adicionar a string para a rota que já estou
          <Link to={`/categoria/${categoria.id}`}>
            <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
              {categoria.nome}
            </li>
          </Link>
        ))
      }

    </ul>
  )
}
export default ListaCategorias