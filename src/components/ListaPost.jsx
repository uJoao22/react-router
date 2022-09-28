import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { busca } from "../api/api";

const ListaPost = ({ url }) => {

  const [posts, setPosts] = useState([])

  // Realizando requisição em userEffect para não entrar em loop infito
  // PESQUISAR MELHOR O FUNCIONAMENTO DE useEffect
  useEffect(() => {
    busca(url, setPosts)
  }, [])

  return (
    <section className="posts container">
      { posts.map((post) => (
        <Link to="#" className={`cartao-post cartao-post--${post.categoria}`} key={post.id}>

          <article>

            <h3 className="cartao-post__titulo">
              { post.title }
            </h3>

            <p className="cartao-post__meta">
              { post.metadescription }
            </p>

          </article>

        </Link>
      ))}
    </section>
  )
}

export default ListaPost