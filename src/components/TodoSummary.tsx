import { Todo } from "../types/todo";

interface TodoSummaryProps {
  todos: Todo[];
  deteletAllCompleted: () => void;
}

export default function TodoSummary({
  todos,
  deteletAllCompleted,
}: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="text-center space-y-2">
      {todos.length !== 0 && (
        <p className="text-sm font-medium">
          {completedTodos.length} / {todos.length}
        </p>
      )}

      {completedTodos.length > 0 && (
        <button
          onClick={deteletAllCompleted}
          className="text-red-500 hover:underline text-sm font-medium"
        >
          Delete all completed
        </button>
      )}
    </div>
  );
}
