import { useEffect, useRef, useDebugValue } from "react";

export const usePrevious = (value) => {
    const ref = useRef()

    useDebugValue("-- custom hook e usedebugvalue")
    useDebugValue("o numero anterior é: " + value)

    useEffect(() => {
        ref.current = value
    })

    return ref.current
}