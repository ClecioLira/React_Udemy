import './App.css';

import { useState, useEffect, useRef } from 'react';
import { useFetch } from './hooks/useFetch'

const url = "http://localhost:3000/products"

function App() {
  const [produtos, setProdutos] = useState([])

  const { dados, httpConfig, loading, erro } = useFetch(url)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const refName = useRef(null);

  // Resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url)
  //     const data = await res.json()
  
  //     setProdutos(data)
  //   }

  //   fetchData()
  // }, [])

  // Adicionando produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

    const produto = {
      name,
      price
    }

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(produto)
    // })

    // Carregamento dinâmico
    // const addProduto = await res.json()

    // setProdutos(produtosAntigos => [...produtosAntigos, addProduto])

    // Refatorando post
    httpConfig(produto, "POST")

    setName("")
    setPrice("")
    refName.current.focus()
  }

  // Removendo produto
  const handleRemove = (id) => {
    httpConfig(id, "DELETE")
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <div className='produtos'>
        <form onSubmit={handleSubmit}>
          <label>Nome: 
            <input
              required
              ref={refName}
              type='text' 
              value={name}
              name='name' 
              onChange={e => setName(e.target.value)}
            />
          </label>

          <label>Preço: 
            <input 
              required
              type='number' 
              value={price}
              name='price' 
              onChange={e => setPrice(e.target.value)}
            />
          </label>

          {loading && <input type='submit' disabled value="Aguarde"/>}
          {!loading && <input type='submit' value="Enviar"/>}
        </form>
      </div>
      {loading && <p>Carregando dados...</p>}
      {erro && <p>{erro}</p>}
      {!erro && (
        <ul>
          {dados && dados.map(produto => (
            <li key={produto.id}>{produto.name} - R$: {produto.price} <button onClick={() => handleRemove(produto.id)}>Apagar</button></li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
