import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [data, setData] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch the data from the resource')
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setError(null)
            })
            .catch(err => {
                setData(null)
                setError(err.message)
            })
    }, [url])

    return { data, error }
}