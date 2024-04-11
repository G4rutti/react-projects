import { useEffect, useState } from "react";

export const useFetchProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true)
            try {
                const res = await fetch('https://fakestoreapi.com/products')
                if (res.status == 404) {
                    setError("Houve um erro ao carregar os dados")
                } else {
                    const data = await res.json()
                    setError(null)
                    setProducts(data)
                }
            } catch (error) {

                console.log('erro')
                setError("Houve um erro ao carregar os dados")
            }
            setLoading(false)
        }
        fetchProducts()

    }, [])

    return {products, loading, error}
}