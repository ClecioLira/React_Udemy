import React from 'react'

const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <h2>{nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
        {idade >= 18 ? 'Pode tirar a CNH' : 'Menor de idade'}
    </div>
  )
}

export default UserDetails