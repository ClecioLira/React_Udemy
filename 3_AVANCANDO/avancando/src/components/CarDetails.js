const CarDetails = ({marca, km, cor, newCar}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {marca}</li>
            <li>KM: {km}</li>
            <li>Cor: {cor}</li>
        </ul>
        {newCar && <p>Este carro é novo</p>}
        {!newCar && <p>Este carro não é novo</p>}
    </div>
  )
}

export default CarDetails