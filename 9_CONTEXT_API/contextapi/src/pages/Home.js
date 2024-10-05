// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

import ChangeCounter from "../components/ChangeCounter"

// refatorando com hook
import { UseCounterContext } from "../hooks/UseCounterContext"

const Home = () => {
  // const {counter} = useContext(CounterContext)
  const {counter} = UseCounterContext()

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* alterando valor context */}
      <ChangeCounter />
    </div>
  )
}

export default Home