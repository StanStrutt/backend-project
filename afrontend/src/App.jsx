import "./App.css"
import { useState, useEffect } from "react"
import axios from "axios"


export default function App() {

  const API_URL = process.env.REACT_APP_API_URL;

  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
    .get(`${API_URL}/books`)
    .then((response) => setData(response.data))
    .catch((error) => setError(error.message))
  }, [API_URL])


  const fetchInfo = async () => {
    const res = await axios.get(API_URL);
    return setData(res.data);
  };
  
  useEffect(() => {
    fetchInfo()
  }, [])

  if (error) return <p>Error: {error}</p>
  return (
    <div className="full-page">
      <div className="info-display">
        {[data].map((dataObj, index) => {
          return (
            <p>{dataObj.name}</p>
          )
        })}
      </div>
      <div className="input-area">

      </div>
    </div>
  )
}
