import { useState } from "react";

const ListRender = () => {
const [list] = useState(["Mateus", "Pedro", "Josias", "Maria"]);
const [users, setUsers] = useState([
    {id: 1, nome: 'clecio'},
    {id: 2, nome: 'maria'},
    {id: 3, nome: 'cleber'},
    {id: 4, nome: 'vinicius'},
    {id: 5, nome: 'joana'},
])

const deleteRandom = () => {
    const rand = Math.floor(Math.random() * 6)

    setUsers((prevUsers) => {
        return prevUsers.filter(user => rand !== user.id)
    })
}

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
            <li key={user.id}>{user.nome}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete usuario</button>
    </div>
  );
};

export default ListRender;
