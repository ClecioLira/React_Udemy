const Container = ({children, myValue}) => {
  return (
    <div>
        <h2>Este é o titulo do container</h2>
        {children}
        <h1>{myValue}</h1>
    </div>
  )
}

export default Container