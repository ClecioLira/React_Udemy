const TemplateExpressions = () => {
    const nome = 'Clécio'
    const data = {
        age: 22,
        job: 'Programador'
    }
    return (
        <div>
            <h1>Olá {nome}, tudo bem?</h1>
            <h1>Você atua como {data.job}</h1>
            <h1>Você tem {data.age} anos</h1>
            <h1>{5 + 5}</h1>
        </div>
    )
}

export default TemplateExpressions