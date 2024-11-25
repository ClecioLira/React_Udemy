import { useState } from "react";

const HookUseState = () => {
  // useState
  let userName = "João";

  const [nome, setNome] = useState("Clécio");

  const mudaNomes = () => {
    userName = "João Souza";

    setNome("Clécio Lira");
  };

  //useState e Inputs
  const [age, setAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault()

    // envio a uma API
    console.log(age)
  }

  return (
    <div>
      {/* useState */}
      <h2>useState</h2>
      <p>Variável : {userName}</p>
      <p>useState : {nome}</p>

      <button onClick={mudaNomes}>Mudar</button>

      {/* useState e Input */}
      <form onSubmit={handleSubmit}>
        <label>
          <span>Digite a sua idade: </span>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <input type="submit" value="Enviar"/>
      </form>
      <p>Você tem: {age} anos!</p>
      <hr />
    </div>
  );
};

export default HookUseState;
