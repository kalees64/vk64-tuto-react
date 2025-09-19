import { useS } from "use-s-react";
import { todoStore } from "../../store/todo-store";

const Todo = ({ todo }: { todo: any }) => {
  const [todos, setTodos] = useS(todoStore.todos);

  const handleDelete = () => {
    console.log("Todo deleted");
    setTodos(todos.filter((t: any) => t.id !== todo.id));
  };

  return (
    <article className="w-full bg-white rounded-xl p-3 max-sm:w-full flex items-center justify-between">
      <aside>
        <h3 className="font-bold text-lg">{todo.title}</h3>
      </aside>
      <button
        className="px-5 py-2 rounded-lg bg-red-500 text-white font-semibold"
        onClick={handleDelete}
      >
        Delete
      </button>
    </article>
  );
};

export default Todo;
