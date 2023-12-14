// componente
import FirstComponent from './component/firstComponent';
import TemplateExpression from './component/templateExpression';
import Events from './component/events';
import Challenge from './component/challenge';

// estilo
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App;
