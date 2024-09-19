const ChangeMessageState = ({changeMessage}) => {
    const messages = ["oi", "ola", "oi ola"]
  return (
    <div>
        <button onClick={() => changeMessage(messages[0])}>1</button>
        <button onClick={() => changeMessage(messages[1])}>2</button>
        <button onClick={() => changeMessage(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessageState