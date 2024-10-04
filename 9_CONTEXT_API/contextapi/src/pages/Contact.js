import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"

const Contact = () => {
  const {counter} = useContext(CounterContext)

  return (
    <div>
      <h1>Contact</h1>
      <p>Valor do contador: {counter}</p>
      {/* alterando valor context */}
      <ChangeCounter />
    </div>
  )
}

export default Contact