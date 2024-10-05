// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"

import {UseCounterContext} from "../hooks/UseCounterContext"

const Contact = () => {
  // const {counter} = useContext(CounterContext)
  const {counter} = UseCounterContext()

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