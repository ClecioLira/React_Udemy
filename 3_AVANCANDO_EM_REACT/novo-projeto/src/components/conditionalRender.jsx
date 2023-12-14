import {useState} from 'react'

const ConditionalRender = () => {
    const [x] = useState(true)

    const [name, setName] = useState('Matheus')

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            <h1>IF TERNÁRIO</h1>
            {name === 'João' ? (
                <div>O nome é João</div>
            ) : (
                <div>O nome não é João</div>
            )}
            <button onClick={() => setName('João')}>Clique aqui</button>
        </div>
    )
}

export default ConditionalRender;