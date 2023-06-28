import "./todoList.css"
import React, { useState } from "react"
import crossImg from "./remove.png"

export const App = () => {
  const [inputList, setInputList] = useState("")
  const [items, setItems] = useState([])

  const itemEvent = (event) => {
    setInputList(event.target.value)
  }

  const listofItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputList("")
  }

  const deleteItems = (index) => {
    setItems((oldItems) => {
      const updatedItems = [...oldItems]
      updatedItems.splice(index, 1)
      return updatedItems
    })
  }

  return (
    <>
      <div className="mainDiv">
        <div className="centerDiv">
          <br />
          <h1>Todo List</h1>
          <i class="fa-solid fa-user" onClick={deleteItems}></i>{" "}
          <input
            type="text"
            placeholder="Enter Item"
            onChange={itemEvent}
            value={inputList}
          ></input>
          <button onClick={listofItems}>+</button>
          <ol>
            {items.map((itemValue, index) => {
              return (
                <>
                  <div className="listItem" key={index}>
                    <img
                      src={crossImg}
                      className="crossImage"
                      alt="Cross"
                      onClick={() => deleteItems(index)}
                    />
                    <li>{itemValue}</li>
                  </div>
                </>
              )
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App
