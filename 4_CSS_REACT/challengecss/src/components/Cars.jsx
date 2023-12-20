import React from 'react'

const Cars = ({marca, cor, km}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {marca}</li>
            <li>Cor: {cor}</li>
            <li>KM: {km}</li>
        </ul>
    </div>
  )
}

export default Cars