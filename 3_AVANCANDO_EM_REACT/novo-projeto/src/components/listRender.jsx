import {useState} from 'react';

const ListRender = () => {
    const [list] = useState(['Matheus', 'Pedro', 'Josias'])

    const [users, setUsers] = useState([
        {id: 1, name: 'Matheus', age: 31},
        {id: 2, name: 'Pedro', age:22},
        {id: 3, name: 'Lucas', age:75}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)
        console.log(randomNumber);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            <ul>
                {/* essa é a maneira mais indicada para se fazer uma lista */}
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender;