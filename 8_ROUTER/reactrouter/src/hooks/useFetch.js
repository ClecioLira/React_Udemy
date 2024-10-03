import { useState, useEffect } from "react";

// Customizando hooks
export const useFetch = (url) => {
    const [dados, setDados] = useState(null)

    // Refatorando o post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    // Tratando erros
    const [erro, setErro] = useState(false)

    // Loading
    const [loading, setLoading] = useState(false)

    // Deletar
    const [itemId, setItemId] = useState(null)

    const httpConfig = (data, method) => {
        if(method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            setMethod(method)
        } else if(method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setMethod(method)
            setItemId(data)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const res = await fetch(url)
                const data = await res.json()
                setDados(data)
            } catch (e) {
                setErro("Houve um erro ao carregar os dados!")
            }

            setLoading(false)
        }
        fetchData()
    }, [url, callFetch])

    // Novo post
    useEffect(() => {
        const httpRequest = async () => {
            let data

            if(method === 'POST') {
                let fetchOptions = [url, config]
                const res = await fetch(...fetchOptions)
                data = await res.json()
            } else if (method === "DELETE") {
                const deleteUrl = `${url}/${itemId}`
                const res = await fetch(deleteUrl, config)
                data = await res.json()
            }
            
            setCallFetch(data)
        } 
        httpRequest()
    }, [config, itemId, method, url])

    return {dados, httpConfig, loading, erro}
}