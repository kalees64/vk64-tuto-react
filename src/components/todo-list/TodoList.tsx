import { useS } from "use-s-react";
import Todo from "./Todo";
import { todoStore } from "../../store/todo-store";

const TodoList = () => {
  const [todos, setTodos] = useS(todoStore.todos);

  return (
    <section className="py-2 grid grid-cols-4 gap-2 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3">
      {todos.map((todo: any) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </section>
  );
};

export default TodoList;
