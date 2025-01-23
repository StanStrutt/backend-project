import "./App.css"
import { GetBooks } from "./services/api-calls"
import { useState } from "react"

export default function App() {

  const {data} = GetBooks()

  const [button, pressedButton] = useState(false)

  function isButtonPressed() {
    pressedButton(true)
  }
  



  return (
    <div>
      <div>
        <h1>This is my frontend!</h1>
      </div>
      <div>
          <h1>Data Fetched</h1>
          <button onClick={isButtonPressed}>button</button>
          {button &&(
          <pre>{JSON.stringify(data, null, 2)}</pre>
          )}
        </div>
    </div>
  )
}
