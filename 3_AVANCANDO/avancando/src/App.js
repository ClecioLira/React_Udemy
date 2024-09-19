import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import { useState } from 'react';
import './App.css';
// import Logo from './assets/logo512.png'

function App() {
  // const name = "joaquim"
  const [userName, setUserName] = useState("Maria")
  const cars = [
    {id: 1, marca: "Ferrari", color:"verde", newCar: true, km: 0},
    {id: 2, marca: "Kia", color:"branco", newCar: false, km: 10000},
    {id: 3, marca: "Renault", color:"vermelho", newCar: true, km: 0}
  ]
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
    </div>
  );
}

export default App;
