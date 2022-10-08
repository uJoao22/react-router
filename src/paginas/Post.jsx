import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { busca } from "../api/api";
import '../assets/css/post.css';

const Post = () => {
  // Usando o useParams do react-router para pegar os parametros da rota, no caso o parametro com nome id
  const{ id } = useParams()
  const [post, setPost] = useState({})

  // Adicionando a url no array de dependencia para que toda vez que atualizarmos o estado da aplicação ela só será atualizado se atualizarmos o id da url
  useEffect(() => {
    busca(`/posts/${id}`, setPost)
  }, [id])

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        {/* TITULO */}
        <h2 className="cartao__titulo">
          {post.title}
        </h2>

        {/* TEXTO */}
        <p className="cartao__texto">
          {post.body}
        </p>
      </article>
    </main>
  )
}

export default Post