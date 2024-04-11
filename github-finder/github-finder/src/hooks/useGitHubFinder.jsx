import { useState, useEffect } from "react";

export const useGitHubFinder = (username) => {
    const [dados, setDados] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {
        async function fetchData(){
            setLoading(true)
            try {
                const res = await fetch(`https://api.github.com/users/${username}`, {
                    method: "GET",
                    headers: {Authorization: "Bearer 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"}
                })
                if(res.status == 404){
                    setError("Houve um erro ao carregar os dados")
                }else{
                    const data = await res.json()
                    setError(null)
                    setDados(data)
                }
            } catch (error) {
                
                console.log('erro')
                setError("Houve um erro ao carregar os dados")
            }
            setLoading(false)
        }
        fetchData()
      }, [username])
    
    return {dados, loading, error}
}