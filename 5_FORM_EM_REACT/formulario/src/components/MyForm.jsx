import React, { useState } from 'react'
import './MyForm.css'

const MyForm = () => {
    // GERENCIAMENTO DE DADOS
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const handleName = (e) => {
        setName(e.target.value);
    }
    // console.log(name);
    // console.log(email);


    const handleSubmit = (event) => {
        event.preventDefault() // para o carregamento da pagina ao enviar
        console.log('Enviando o form')
        console.log(name, email)
    }

  return (
    <div>
        {/* CRIAÇÃO DO FORMULÁRIO */}
        <form onSubmit={handleSubmit}> {/* ENVIO DE FORM */}
            <div>
                <label>
                    <span>Nome: </span>
                    <input type="text" name="name" id="name" placeholder='Digite o seu nome' onChange={handleName}/>
                </label>
                <label>
                    <span>Email: </span>
                    <input type="email" name="email" id="email" placeholder='Digite o seu email' onChange={(e) => setEmail(e.target.value)}/> {/* SIMPLIFICAÇÃO DE MANIPULAÇÃO DE STATE */}
                </label>
            </div>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm