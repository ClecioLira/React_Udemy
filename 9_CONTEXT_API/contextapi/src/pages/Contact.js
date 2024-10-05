// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"

import {UseCounterContext} from "../hooks/UseCounterContext"

import { useTitleColorContext } from "../hooks/UseTitleColorContext"

const Contact = () => {
  // const {counter} = useContext(CounterContext)
  const {counter} = UseCounterContext()

  const {color} = useTitleColorContext()

  return (
    <div>
      <h1 style={{color: color}}>Contact</h1>
      <p>Valor do contador: {counter}</p>
      {/* alterando valor context */}
      <ChangeCounter />
    </div>
  )
}

export default Contact