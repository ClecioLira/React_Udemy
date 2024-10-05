// alterando contexto
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const ChangeCounter = () => {
    const {counter, setCounter} = useContext(CounterContext)

  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>Add value counter</button>
        <button onClick={() => setCounter(counter - 1)}>Rem value counter</button>
    </div>
  )
}

export default ChangeCounter