import axios from "axios";

// Função para setar url base para as requisiçoes do Axios
export const api = axios.create({
  baseURL: 'http://localhost:5000'
})

// Função para realizar uma busca no servidor e devolver a resposta
// Recebe a url que será feita a requisição e o useState para setar o valor de uma várivel
export const busca = async (url, setDado) => {
  const resposta = await api.get(url)
  setDado(resposta.data)
}