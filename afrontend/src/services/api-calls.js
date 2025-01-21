import axios from "axios"
import { useState, useEffect } from "react"



export function Get() {

    const API_URL = process.env.REACT_APP_API_URL;

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`${API_URL}/books`)
            setData(response.data)
        } catch (err) {
            setError(err.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }
    fetchData()
})

    return {
        data,
        error,
        loading
    }
}

export function Post() {

    const API_URL = process.env.REACT_APP_API_URL;

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.post(`${API_URL}/books`)
            setData(response.data)
        } catch (err) {
            setError(err.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }
    fetchData()
})

    return {
        data,
        error,
        loading
    }
}