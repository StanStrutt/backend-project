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
          <div>
            {data.map((item, index) => (
              <div className="books-info" key={index}>
                <h2>Title: {item.title}</h2>
                <h3>Author: </h3>
                <ul>
                  <li>name: {item.author.name}</li>
                  <li>Birth: {item.author.yearOfBirth}</li>
                  <li>Death: {item.author.yearOfDeath}</li>
                </ul>    
                <h3>Publisher: </h3>
                <ul>
                  <li>name: {item.publisher.name}</li>
                  <li>Founded: {item.publisher.yearFounded}</li>
                  <li>Head Quarters: {item.publisher.headquartersLocation}</li>
                </ul>
                <p>Pages: {item.numberOfPages}</p>
                <p>Published: {item.yearPublished}</p>
                <hr/>
              </div>
            ))}
          </div>
          // <pre>{JSON.stringify(data, null, 2)}</pre>
          )}
        </div>
    </div>
  )
}
