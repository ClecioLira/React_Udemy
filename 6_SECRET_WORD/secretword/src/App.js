// CSS
import './App.css';

// REACT
import { useCallback, useEffect, useState } from 'react';

// DADOS
import {wordsList} from './data/words'

// COMPONENTS
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

// ESTAGIOS DO JOGO
const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
]


function App() {
  const [gameStage, setGameStage] = useState(stages[0].name) // pega ou muda os estagios do jogo
  const [words] = useState(wordsList) // pega as palavras

  const [pickedWord, setPickedWord] = useState("") // palavra
  const [pickedCategory, setPickedCategory] = useState("") // categoria
  const [letters, setLetters] = useState([]) // letra
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words) // pega as categorias
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)] // pega uma categoria pelo index randomico

    const word = words[category][Math.floor(Math.random() * words[category].length)] // pega uma palavra aleatoria da categoria selecionada

    return {word, category}
  }, [words])

  const startGame = useCallback(() => {
    clearLetterStates()

    // funcao pega palavra e pega categoria
    const {word, category} = pickWordAndCategory()

    // cria um array das letras da palavra escolhida
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((letra) => letra.toLowerCase()) // transforma todas as letras em minuscula

    // setar estados
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name) // funcao que inicia o jogo mudando o estagio
  }, [pickWordAndCategory])

  const verifyLetter = (letter) => {
    const nomralizedLetter = letter.toLowerCase()

    if(guessedLetters.includes(nomralizedLetter) || wrongLetters.includes(nomralizedLetter)) {
      return
    }

    if(letters.includes(nomralizedLetter)) {
      setGuessedLetters(actualGuessedLetters => [
        ...actualGuessedLetters,
        nomralizedLetter
      ])
    } else {
      setWrongLetters(actualGuessedLetters => [
        ...actualGuessedLetters,
        nomralizedLetter
      ])

      setGuesses(actualGuesses => actualGuesses - 1)
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    if(guesses <= 0) {
      clearLetterStates()
      setGameStage(stages[2].name)
    }
  }, [guesses])

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]
    if(guessedLetters.length === uniqueLetters.length && gameStage === stages[1].name) {
      setScore(actualScore => actualScore += 100)
      startGame()
    }

  }, [guessedLetters, letters, startGame, gameStage])

  const retry = () => {
    setScore(0)
    setGuesses(3)

    setGameStage(stages[0].name) // funcao que reinicia o jogo mudando o estagio
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && (
        <Game 
          verifyLetter={verifyLetter} 
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          wrongLetters={wrongLetters}
          guessedLetters={guessedLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
    </div>
  );
}

export default App;
