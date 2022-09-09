import { useState } from "react";
import { nanoid } from "nanoid";

export default function Home() {

const [todos, setTodos] = useState ([
  { description: "clean my unterhose",
  done: false,
  id: nanoid()},
  { description: "clean my teeth",
  done: false,
  id: nanoid()}
])

  return (
    <div>
      <div>
      <h1>TODO APP</h1>
      <h3>TYPE YOUR TODOS HERE</h3>
      <input type="text"></input>
      <h3>NOCH ZU ERLEDIGEN:</h3>
      </div>
      <div>
      {todos.map((todo)=>{
        return(
          <div>
      <p>{todo.description}</p>
      <button>Delete</button>
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