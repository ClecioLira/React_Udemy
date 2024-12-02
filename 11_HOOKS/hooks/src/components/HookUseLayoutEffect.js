import React, { useEffect, useLayoutEffect, useState } from 'react'

const HookUseLayoutEffect = () => {
    const [nome, setNome] = useState("algum nome")

    useEffect(() => {
        console.log("2 use")
        setNome("mudou de novo")
    }, [])

    useLayoutEffect(() => {
        console.log("1 use")
        setNome("mudou nome")
    }, [])


  return (
    <div>
        <h2>HookUseLayoutEffect</h2>
        <p>Nome: {nome}</p>
        <hr/>
    </div>
  )
}

export default HookUseLayoutEffect