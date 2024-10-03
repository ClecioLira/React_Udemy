import { useParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Product = () => {
    const { id } = useParams()

    // carregamento de dado individual
    const url = "http://localhost:3000/products/" + id
    const {dados: produto, loading, erro} = useFetch(url)

  return (
    <>
        <p>ID do produto: {id}</p>
        {erro && <p>Ocorreu um erro.</p>}
        {loading && <p>Carregando</p>}
        {produto && (
            <div>
                <h1>{produto.name}</h1>
                <h2>R$: {produto.price}</h2>
                {/* Nested router */}
                <Link to={`/products/${produto.id}/info`}>Mais informações</Link>
            </div>
        )}
    </>
  )
}

export default Product