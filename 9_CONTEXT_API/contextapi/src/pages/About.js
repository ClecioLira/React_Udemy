import { UseCounterContext } from "../hooks/UseCounterContext"

const About = () => {
  const {counter} = UseCounterContext()

  return (
    <div>
      <h1>About</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default About