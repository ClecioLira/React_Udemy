import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>FORMS</h1>
        <MyForm user={{name: "josias", email: "josias@gmail.com", bio:"sou advogado", role:"admin"}}/>
    </div>
  );
}

export default App;
