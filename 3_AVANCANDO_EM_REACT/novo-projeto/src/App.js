import ManageData from './components/manageData';
import ListRender from './components/listRender';
import ConditionalRender from './components/conditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

import {useState} from 'react'

import './App.css';

// import Img2 from './assets/img2.jpg'

function App() {
  // const name = 'Clécio';
  // const [userName] = useState('Maria');

  // const cars = [
  //   { id: 1,
  //     brand:'Ford',
  //     color:'Amarelo',
  //     km:0,
  //     novo: true
  //   },

  //   { id: 2,
  //     brand:'Fiat',
  //     color:'Vermelho',
  //     km:250,
  //     novo: false
  //   },

  //   { id: 3,
  //     brand:'Lamborguini',
  //     color:'Amarelo',
  //     km:5000,
  //     novo: false
  //   }
  // ]

  // function showMessage() {
  //   console.log('Evento do componente pai');
  // }

  // const [message, setMessage] = useState("")
  // const handleMessage = (msg) => {
  //   setMessage(msg)
  // }

  const users = [
    {id: 1, nome: 'Clécio', profissao: 'Programador', idade: 22},
    {id: 2, nome: 'Maria', profissao: 'Juiz', idade: 25},
    {id: 3, nome: 'Tulio', profissao: 'Médico', idade: 15}
  ]

  return (
    <div className="App">
      <h1>Avançando no React</h1>
      {/* <ManageData/>
      <ListRender/>
      <ConditionalRender/> */}

      {/* PROPS */}
      {/* <ShowUserName name={name}/>
      <ShowUserName name={userName}/> */}

      {/* DESTRUCTURING */}
      {/* <CarDetails brand="VW" km={10000} color="Azul" novo={false}/> */}

      {/* REAPROVEITANDO */}
      {/* <CarDetails brand="Ford" km={0} color="Vermelho" novo={true}/>
      <CarDetails brand="Fiat" km={1500} color="Preto" novo={false}/> */}
      
      {/* LOOP EM ARRAY DE OBJETOS */}
      {/* {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          novo={car.novo}/>
      ))} */}

      {/* FRAGMENTO */}
      {/* <Fragment/> */}

      {/* CHILDREN */}
      {/* <Container myValue="testing">
        <p>Este é o conteudo</p>
      </Container> */}

      {/* FUNÇÃO PROP */}
      {/* <ExecuteFunction myFunction={showMessage}/> */}

      {/* STATE LIFT */}
      {/* <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/> */}

      {/* TAREFA */}
      {users.map((user) => (
        <UserDetails key={user.id} nome={user.nome} profissao={user.profissao} idade={user.idade}/>
      ))}
    </div>
  );
}

export default App;
