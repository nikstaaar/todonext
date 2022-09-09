import { useState } from "react";
import { nanoid } from "nanoid";

export default function Home() {

const [input, setInput] = useState ("")
const [todos, setTodos] = useState ([])

  return (
    <div>
      <div>
      <h1>TODO APP</h1>
      <h3>TYPE YOUR TODOS HERE</h3>
      <input type="text" value = {input} onChange = {((event)=>{
        setInput(event.target.value)
      })}></input>
      <button onClick = {(()=>{
        setTodos([...todos, {
          description: input,
          done: false,
          id: nanoid(),
        }])
      })}>add</button>
      <h3>NOCH ZU ERLEDIGEN:</h3>
      </div>
      <div>
      {todos.map((todo)=>{
        return(
          <div key = {todo.id}>
      <p>{todo.description}</p>
      <button onClick = {(()=>{
      setTodos(todos.filter(todos => todos.id !== todo.id))
      })}>Delete</button>
      </div>
        )
      })}
      </div>

      <h3>ERLEDIGT:</h3>
      <p>Kochen</p>
      <button>Delete</button>
    </div>
  );
}