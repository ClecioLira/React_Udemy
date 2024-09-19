import { useState } from 'react';
import './App.css';
// import Logo from './assets/logo512.png'


import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  // const name = "joaquim"
  const [userName, setUserName] = useState("Maria")

  const cars = [
    {id: 1, marca: "Ferrari", color:"verde", newCar: true, km: 0},
    {id: 2, marca: "Kia", color:"branco", newCar: false, km: 10000},
    {id: 3, marca: "Renault", color:"vermelho", newCar: true, km: 0}

  ]

  function showMessage() {
    console.log("componente pai")
  }

  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <h1>Avancando em React</h1>
      <div>
        {/* <img src='/logo192.png' alt='imagem'/> PUBLIC */}
      </div>
      <div>
        {/* <img src={Logo} alt='imagem'/> ASSETS */}
      </div>

      <h1>USE STATE</h1>
      <ManageData />

      <h1>LOOP</h1>
      <ListRender />

      <h1>CONDICIONAL</h1>
      <CondicionalRender />

      <h1>PROPS</h1>
      <ShowUserName name={userName} />
      <button onClick={() => setUserName('Joao')}>Muda nome</button>

      <h1>Car Details PROPS</h1>
      <CarDetails marca="VW" km={1000} cor="Azul" newCar={false}/>

      <h1>Reaproveitando PROPS</h1>
      <CarDetails marca="Ford" km={0} cor="Vermelho" newCar={true}/>
      <CarDetails marca="Fiat" km={4500} cor="Branco" newCar={false}/>
      
      <h1>Loop em Array de Objetos</h1>
      {cars.map(car => (
        <CarDetails 
          key={car.id} 
          marca={car.marca} 
          km={car.km} 
          cor={car.color} 
          newCar={car.newCar}
        />
      ))}

      <h1>FRAGMENTS</h1>
      <Fragments propFragment="teste"/>

      <h1>CHILDREN</h1>
      <Container myValue="teste">
        <p>conteudo children</p>
      </Container>

      <h1>FUNÇÃO EM PROPS</h1>
      <ExecuteFunction myFunction={showMessage}/>

      <h1>STATE LIFT</h1>
      <Message msg={message}/>
      <ChangeMessageState changeMessage={handleMessage}/>
    </div>
  );
}

export default App;
