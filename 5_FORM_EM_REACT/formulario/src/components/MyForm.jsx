import React, { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    // CONTROLANDO OS INPUTS
    // GERENCIAMENTO DE DADOS
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const handleName = (e) => {
        setName(e.target.value);
    }
    // console.log(name);
    // console.log(email);

    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleSubmit = (event) => {
        event.preventDefault() // para o carregamento da pagina ao enviar
        console.log('Enviando o form')
        console.log(name, email, bio, role)

        // ANTES DE ENVIAR E LIMPAR TERIAM OS PASSOS COMO VALIDAÇÃO E ENVIO

        // LIMPAR FORM
        setName('')
        setEmail('')
        setBio('')
    }

  return (
    <div>
        {/* CRIAÇÃO DO FORMULÁRIO */}
        <form onSubmit={handleSubmit}> {/* ENVIO DE FORM */}
            <div>
                <label>
                    {/* INPUT NAME */}
                    <span>Nome: </span>
                    <input 
                    type="text" name="name" id="name" placeholder='Digite o seu nome' onChange={handleName} value={name}/>
                </label>
                <label>
                    {/* INPUT EMAIL */}
                    <span>Email: </span>
                    <input type="email" name="email" id="email" placeholder='Digite o seu email' onChange={(e) => setEmail(e.target.value)} value={email}/> {/* SIMPLIFICAÇÃO DE MANIPULAÇÃO DE STATE */}
                </label>
                <label>
                    {/* INPUT TEXTAREA */}
                    <span>Bio: </span>
                    <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>
                <label>
                    <span>Selecione: </span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
            </div>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm