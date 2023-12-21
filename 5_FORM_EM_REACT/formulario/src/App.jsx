import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <h1>Formulário</h1>
      <MyForm user={{name: 'Clécio', email: 'clecio@gmail.com', bio: 'Sou um coder', role: 'admin'}}/>
    </>
  )
}

export default App
