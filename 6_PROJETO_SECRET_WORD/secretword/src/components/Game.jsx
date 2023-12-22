import './Game.css'

const Game = ({verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score}) => {
  return (
    <div className="game">
      <p className='points'>
        <span>Pontuação: 000</span>
      </p>
      <h1>Advinhe a palavra: </h1>
      <h3 className='tip'>
        Dica sobre a palavra: <span>Dica...</span>
      </h3>
      <p>Você ainda tem XXX tentativas</p>
      <div className="wordContainer">
        <span className='letter'>A</span>
        <span className='blankSquare'>A</span>
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra: </p>
        <form>
          <input type="text" name="letter" maxLength="1" required placeholder='LETRA'/>
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrogLetterContainer">
        <p>Letras já utilizadas: </p>
        <span>a, </span>
        <span>b, </span>
      </div>
    </div>
  )
}

export default Game