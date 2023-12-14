import MyComponent from "./myComponent";

// comentario 1
const FirstComponent = () => {
    // comentario 2
    return (
        <div>
            {/* comentario 3 */}
            <h1>Meu primeiro componente</h1>
            <p className="teste">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <MyComponent/>
        </div>
    )
}

export default FirstComponent;