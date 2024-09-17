const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        console.log('ativou') 
    }

    const renderizarAlgo = (x) => {
        if(x) {
            return <h1>Renderizo o X</h1>
        } else {
            return <h1>Renderizo o Y</h1>
        }
    }

    return (
        <div>
            <button onClick={handleMyEvent}>Clique aqui</button>
            <button onClick={() => {console.log('clicou no evento inline')}}>Clique aqui tambem</button>
            {renderizarAlgo(true)}
            {renderizarAlgo(false)}
        </div>
    )
}
export default Events