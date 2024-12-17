import "./App.css";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/produtos";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const { data: items, httpConfig, loading, error } = useFetch(url);

  // ADICIONANDO DADOS
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  return (
    <div>
      <h1>Lista de produtos</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome</span>
          <input
            type="text"
            placeholder="Digite o nome do produto"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          <span>Valor</span>
          <input
            type="text"
            placeholder="Digite o valor do produto"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>

        {loading && <input type="submit" value="Aguarde..." disabled />}
        {!loading && <input type="submit" value="Enviar" />}
      </form>

      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items &&
            items.map((item) => (
              <li key={item.id}>
                {item.name} - R$: {item.price}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default App;
