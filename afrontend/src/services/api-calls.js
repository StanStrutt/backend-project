import axios from "axios"
import { useState, useEffect } from "react"



export function GetBooks() {

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
}, [API_URL])

    return {
        data,
        error,
        loading
    }
}

export function GetBookById() {

    const API_URL = process.env.REACT_APP_API_URL;

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`${API_URL}/`)
            setData(response.data)
        } catch (err) {
            setError(err.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }
    fetchData()
}, [API_URL])

    return {
        data,
        error,
        loading
    }
}


export function PostBook() {

    const API_URL = process.env.REACT_APP_API_URL;

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.post(`${API_URL}/publishers`, {
                id: 9,
                name: "Stan Strutt"
            })
            setData(response.data)
        } catch (err) {
            setError(err.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }
    fetchData()
}, [API_URL])

    return {
        data,
        error,
        loading,
    }
}