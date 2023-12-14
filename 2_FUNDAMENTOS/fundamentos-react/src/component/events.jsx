const Events = () => {
    const handleMyEvent = () => {
        console.log('Ativou o evento');
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Rederizando isso</h1>
        } else {
            return <h1>Tambem posso renderizar isso</h1>
        }
    }

    return (
        <div>
            <div>
                {/* Não colocar os () no evento, pois ele vai ativar o evento sozinho como se fosse chamado automaticamente */}
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>

            <div>
                {/* caso seja uma simples função tambem dá para criar ela na propria linha do HTML */}
                <button onClick={() => {console.log('Clicou');}}>Clique aqui tambem</button>
            </div>

            <div>
                {/* esse tipo de evento não é uma boa prática JS pois ja comeca a complicar o código */}
                <button onClick={() => {
                    if (true) {
                        console.log('Isso não deveria existir');
                    }
                }}>Clique aqui, por favor</button>
            </div>

            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    )
}
export default Events;