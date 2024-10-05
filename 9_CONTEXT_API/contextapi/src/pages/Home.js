// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

import ChangeCounter from "../components/ChangeCounter"

// refatorando com hook
import { UseCounterContext } from "../hooks/UseCounterContext"

// context complexo
import { useTitleColorContext } from "../hooks/UseTitleColorContext"

const Home = () => {
  // context complexo
  const {color, dispatch} = useTitleColorContext()

  // alterando context complexo
  const setTitleColo = (color) => {
    dispatch({type: color})
  }

  // const {counter} = useContext(CounterContext)
  const {counter} = UseCounterContext()

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* alterando valor context */}
      <ChangeCounter />
      {/* alterando context complexo */}
      <div>
        <button onClick={() => setTitleColo("RED")}>Vermelho</button>
        <button onClick={() => setTitleColo("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home