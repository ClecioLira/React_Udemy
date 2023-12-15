import ManageData from './components/manageData';
import ListRender from './components/listRender';
import ConditionalRender from './components/conditionalRender';
import ShowUserName from './components/ShowUserName';
import {useState} from 'react'

import './App.css';

// import Img2 from './assets/img2.jpg'
import CarDetails from './components/CarDetails';

function App() {
  const name = 'Clécio';
  const [userName] = useState('Maria');

  const cars = [
    { id: 1,
      brand:'Ford',
      color:'Amarelo',
      km:0,
      novo: true
    },

    { id: 2,
      brand:'Fiat',
      color:'Vermelho',
      km:250,
      novo: false
    },

    { id: 3,
      brand:'Lamborguini',
      color:'Amarelo',
      km:5000,
      novo: false
    }
  ]

  return (
    <div className="App">
      <h1>Avançando no React</h1>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>

      {/* PROPS */}
      <ShowUserName name={name}/>
      <ShowUserName name={userName}/>

      {/* DESTRUCTURING */}
      <CarDetails brand="VW" km={10000} color="Azul" novo={false}/>

      {/* REAPROVEITANDO */}
      <CarDetails brand="Ford" km={0} color="Vermelho" novo={true}/>
      <CarDetails brand="Fiat" km={1500} color="Preto" novo={false}/>
      
      {/* LOOP EM ARRAY DE OBJETOS */}
      {cars.map((car) => (
        <CarDetails 
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          novo={car.novo}/>
      ))}
    </div>
  );
}

export default App;
