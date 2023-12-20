import './App.css';
import Cars from './components/Cars';

function App() {
  const cars = [
    {id: 1, marca: 'Ford', cor: 'Vermelho', km: 0},
    {id: 2, marca: 'Toyota', cor: 'Preto', km: 5000},
    {id: 3, marca: 'Fiat', cor: 'Azul', km: 254980},
  ]
  
  return (
    <div className="App">
     <h1>CARROS</h1>
     {cars.map((car) => (
      <Cars 
        key={car.id}
        marca={car.marca}
        cor={car.cor}
        km={car.km}
      />
     ))}
    </div>
  );
}

export default App;
