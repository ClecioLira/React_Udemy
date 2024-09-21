import { useState } from "react";
import "./MyForm.css";

const MyForm = ({user}) => {
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (evento) => {
        setName(evento.target.value)
    }

    const handleSubmit = (evento) => {
        evento.preventDefault()
        setName('')
        setEmail('')
        setBio('')
        setRole('')
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome: 
            <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>
          </label>
          <label>Email: 
            <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(evento) => setEmail(evento.target.value)} value={email}/>
          </label>
        </div>

        <label>Bio:
            <textarea name="bio" placeholder="Descricao do usuario" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </label>

        <label>Funcao no sistema
            <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="user">Usuario</option>
                <option value="editor">Editor</option>
                <option value="admin">Administrador</option>
            </select>
        </label>

        <input type="submit" value="Enviar"/>

      </form>
      {name} <br/>
      {email} <br/>
      {bio} <br/>
      {role}
    </div>
  );
};

export default MyForm;
