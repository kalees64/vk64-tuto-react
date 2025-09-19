import { useS } from "use-s-react";
import { todoStore } from "../../store/todo-store";

const Header = () => {
  const [todos, setTodos] = useS(todoStore.todos);

  return (
    <header className="px-4 py-2 bg-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Todo App</h1>

      <div className="flex gap-2 items-center">
        Total Todos :
        <span className="px-2.5 py-1 rounded bg-green-500 font-bold text-white">
          {todos.length}
        </span>
      </div>
    </header>
  );
};

export default Header;
