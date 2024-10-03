import './Home.css'

import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Home = () => {
  // Carregar dados
  const url = "http://localhost:3000/products"

  const {dados, loading, erro} = useFetch(url)

  return (
    <div>
      <h1>Produtos</h1>
      {erro && <p>{erro}</p>}
      <ul className='produtos'>
        {dados && dados.map(dado => (
          <li key={dado.id}>
            <h3>{dado.name}</h3>
            <p>R$: {dado.price}</p>
            <Link to={`/products/${dado.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home