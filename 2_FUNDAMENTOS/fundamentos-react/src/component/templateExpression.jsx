import MyComponent from "./myComponent";

const TemplateExpression = () =>  {
    const name = 'Clécio'
    const data = {
        age: 31,
        job: 'Coder'
    }

    return (
        <div>
            <h1>Olá {name}, Tudo bem?</h1>
            <p>Sua idade é {data.age}</p>
            <p>Seu trabalho é {data.job}</p>
            <MyComponent/>
        </div>
    )
}

export default TemplateExpression;