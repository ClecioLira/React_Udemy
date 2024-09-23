import { useState, useRef } from 'react'
import './Game.css'

const Game = ({
    verifyLetter,
    palavra,
    categoria,
    letra,
    letraAdivinhada,
    letraErrada,
    chances,
    pontuacao
}) => {
    const [letter, setLetter] = useState("")
    const letterInputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        verifyLetter(letter)

        setLetter("")

        letterInputRef.current.focus()
    }

  return (
    <div className='game'>
        <p className='points'>
            <span>Pontuação: {pontuacao}</span>
        </p>

        <h1>Adivinhe a palavra:</h1>
        <h3 className='tip'>Dica sobre a palavra: <span>{categoria}</span></h3>

        <p>Você ainda tem {chances} tentativa(s).</p>

        <div className='wordContainer'>
            {letra.map((l, i) => (
                letraAdivinhada.includes(l) ? (
                    <span key={i} className="letter">{l}</span>
                ) : (
                    <span key={i} className="blankSquare"></span>
                )
            ))}
        </div>

        <div className='letterContainer'>
            <p>Tente advinhar uma letra da palavra:</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    name='letter' 
                    maxLength="1" 
                    required 
                    onChange={(e) => setLetter(e.target.value)} 
                    value={letter}
                    ref={letterInputRef}
                />
                <button>Jogar</button>
            </form>
        </div>

        <div className='wrongLetterContainer'>
            <p>Letras já utilizadas:</p>
            {letraErrada.map((l, i) => (
                <span key={i}>{l}, </span>
            ))}
        </div>
    </div>
  )
}

export default Game