import {useState} from 'react'

const ManageData = () => {
    let someData = 10;

    const [number, setNumber] = useState(10);

    return (
        <div>
            <h1>Valor: {someData}</h1>
            <button onClick={() => (someData = 15)}>Mudar variavel</button>

            <div>
                <h1>Valor: {number}</h1>
                <button onClick={() => {setNumber(25)}}>Mudar o state</button>
            </div>
        </div>
    )
}

export default ManageData;