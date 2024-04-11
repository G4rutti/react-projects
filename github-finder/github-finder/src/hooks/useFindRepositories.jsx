import { useState, useEffect } from "react";

export const useFindRepositories = (username) => {
    const [dados, setDados] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData(){
            setLoading(true)
            try {
                const res = await fetch(`https://api.github.com/users/${username}/repos`, {
                    method: "GET",
                    headers: {Authorization: "Bearer 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"}
                })
                const data = await res.json()
                setDados(data)
            } catch (error) {
                console.log(error.message)
                setError("Houve um erro ao carregar os dados")
            }
            setLoading(false)
        }
        fetchData()
      }, [username])
    
    return {dados, loading, error}
} 