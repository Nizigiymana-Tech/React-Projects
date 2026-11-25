import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo(todoName) {
    const date = new Date().toLocaleDateString();

    const newTodo = {
      text: todoName,
      date: date,
      id: Date.now(),
    };

    setTodos([...todos, newTodo]);
    setInput("");
  }

  function removeTodo(id) {
    const list = todos.filter((todo) => todo.id !== id);

    setTodos(list);
  }

  return (
    <>
      <main>
        <div className="flex h-screen justify-center items-center">
          <div className="bg-white text-black box-content size-100 shadow-2xl rounded flex flex-col items-center">
            <div className="translate-y-4 translate-x-4 w-[90%] h-12 flex items-center justify-between px-2">
            <form className="flex items-center justify-between w-full h-full" onSubmit={(e) => {e.preventDefault(); addTodo(input);}}>
              <input
                className="box-content border-2 rounded w-60 h-7"
                type="text"
                name="todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <button
                className="rounded bg-blue-500 size-9 -translate-x-4 w-15 text-white cursor-pointer"
                type="submit"
              >
                Add
              </button>
              </form>
            </div>

            <div className="flex-1 w-full grid place-items-center">
              <div
                className="flex flex-col size-70 w-[90%] rounded gap-4"
                id="targetDiv"
              >
                {todos.map((todo, index) => (
                  <button
                    key={index}
                    className="w-full border-2 shadow-2xl rounded text h-10 cursor-pointer"
                    onClick={() => removeTodo(todo.id)}
                  >
                    <p className="translate-x-1.5 text-left italic">
                      {todo.text}
                    </p>

                    <small className="flex justify-end -translate-1.5">
                      Date Created: {todo.date}
                    </small>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
