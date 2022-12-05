import { useState } from "react";
import { useTodo } from "../Context/TodoContext";

function AddTodo() {
  const { todos, setTodo } = useTodo();
  const [title, setTitle] = useState("");
  const uniqueId = () => parseInt(Date.now() * Math.random()).toString();
  const handleClick = () => {
    let newTodo = {
      id: uniqueId(),
      title: title,
      isCompleted: false,
    };

    setTodo(() => [...todos, newTodo]);
    setTitle("");
  };
  return (
    <div className="w-[600px] border-2	rounded stroke-#EEEEEE pr-1 mb-2 flex">
      <input
        placeholder="Add new list item"
        className="p-2 focus outline-none flex-1"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        disabled={!title && true}
        className="rounded-md  hover:bg-blue-200   border bg-blue-500 border-blue-800 px-6 py-2 h-full my-1 text-white"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
