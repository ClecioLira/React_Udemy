import ManageData from './components/manageData';

import './App.css';

import Img2 from './assets/img2.jpg'

function App() {
  return (
    <div className="App">
      <h1>Avançando no React</h1>
      <ManageData/>
      <div>
        {/* imagem em public */}
        <img src="/img1.jpg" alt="paisagem" />
      </div>

      <div>
        {/* imagem em assets ela é importada */}
        <img src={Img2} alt="paisagem" />
      </div>
    </div>
  );
}

export default App;
