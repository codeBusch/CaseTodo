import "./App.css";

import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { TodoProvider } from "./Context/TodoContext";
function App() {
  return (
    <div className=" mx-auto flex justify-center items-center min-h-screen bg-[#F5F9FF]">
      <TodoProvider>
        <div className="flex-1 max-w-[1000px] max-h-[670px] flex justify-center rounded-[32px] shadow-md bg-white py-12  ">
          <div className="max-w-[600px]  ">
            <Header />
            <AddTodo />
            <Todos />
          </div>
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
