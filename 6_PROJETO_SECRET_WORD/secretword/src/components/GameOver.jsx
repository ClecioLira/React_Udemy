import './GameOver.css'

const GameOver = ({retry}) => {
  return (
    <div>
      <h1>Recomeçar</h1>
      <button onClick={retry}>Recomeçar jogo</button>
    </div>
  )
}

export default GameOver