import "./App.css"
import { Get } from "./services/api-calls"

export default function App() {

  const {data, loading, error} = Get()


  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  return (
    <div>
      <h1>Data Fetched</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
