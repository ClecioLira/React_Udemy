import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
const Info = () => {
    const {id} = useParams()

    const url = `http://localhost:3000/products/${id}`

    const {dados: produto} = useFetch(url)

  return (
    <div>
        <h1>Mais informações sobre o produto: {id}</h1>
        {produto && (
            <div>
                <h1>Nome: {produto.name}</h1>
                <h1>Preço: R${produto.price},00</h1>
            </div>
        )}
    </div>
  )
}

export default Info