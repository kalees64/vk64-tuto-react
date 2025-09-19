import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { todoStore, type Todo } from "../../store/todo-store";
import { useS } from "use-s-react";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todos, setTodos] = useS(todoStore.todos);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Todo data : ", newTodo);
    setNewTodo("");

    const todo: Todo = {
      id: uuidv4(),
      title: newTodo,
    };

    console.table(todo);

    setTodos([...todos, todo]);
    // alert("Todo added");
  };

  return (
    <article className="flex items-center justify-center rounded mt-2">
      <form
        className="flex items-center gap-5 w-2/4 bg-white p-3 rounded-xl max-sm:w-full"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="todo"
          id="todo"
          className="border border-gray-300 px-3 py-2 rounded-lg w-full"
          placeholder="What's up next?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          type="submit"
          className="px-5 py-2 rounded-lg bg-blue-500 text-white font-bold"
        >
          Add
        </button>
      </form>
    </article>
  );
};

export default AddTodo;
