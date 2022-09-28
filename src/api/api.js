import axios from "axios";

// Função para setar url base para as requisiçoes do Axios
export const api = axios.create({
  baseURL: 'http://localhost:5000'
})

// Função para realizar uma busca no servidor e devolver a resposta
export const busca = async () => {
  const resposta = await api.get(url)
  setDado(resposta.data)
}