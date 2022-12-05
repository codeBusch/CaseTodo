import { createContext, useState, useContext } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const initialTodos = [
    {
      id: 1,
      title: "Learn React",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Learn Redux",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Test",
      isCompleted: true,
    },
  ];
  const [todos, setTodo] = useState(initialTodos);
  const values = {
    todos,
    setTodo,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};
export const useTodo = () => useContext(TodoContext);
