import { useEffect, useState } from "react";
import { useTodo } from "../Context/TodoContext";

function Todos() {
  const { todos, setTodo } = useTodo();
  const [count, setCount] = useState(0);
  const clearCompleted = () => {
    setTodo(
      todos.filter((todos) => {
        return todos.isCompleted === false;
      })
    );
  };
  useEffect(() => {
    completedLength();
  });
  const completedLength = () => {
    let items = [...todos];
    let length = 0;
    for (let i = 0; i < items.length; i++) {
      items[i].isCompleted === true && length++;
    }
    setCount(length);
  };
  const checkTodo = (i) => {
    let items = [...todos];
    items[i].isCompleted = !items[i].isCompleted;
    setTodo(items);
  };

  return (
    <div>
      <div>
        <ul>
          {todos.map((todo, i) => (
            <li
              className={
                "list-none text-[#001747]  py-2  hover:text-blue-600 midline " +
                (todo.isCompleted ? "line-through" : " ")
              }
              key={todo.id}
            >
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  className="mx-5 "
                  onChange={() => checkTodo(i)}
                />
                {todo.title}
                <span className="checkmark "></span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-2"></div>
      <div className="display flex h-max">
        <div className="ml-4 text-[#B1BACB] ">
          {count}
          {count <= 1 ? " item selected" : " items selected"}
        </div>

        <button
          className="ml-auto mr-4 text-[#B1BACB]"
          onClick={clearCompleted}
        >
          Clear Selected
        </button>
      </div>
    </div>
  );
}

export default Todos;
