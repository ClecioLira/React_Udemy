import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {
    const [searchParams] = useSearchParams()

    const url = "http://localhost:3000/products?" + searchParams

    const {dados} = useFetch(url)

  return (
    <div>
        <h1>Resultado disponiveis</h1>
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

export default Search