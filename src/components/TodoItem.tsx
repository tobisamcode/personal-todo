import { Trash2 } from "lucide-react";
import { OnCompletePreview, Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: ({ id, completed }: OnCompletePreview) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({
  todo,
  onCompletedChange,
  onDelete,
}: TodoItemProps) {
  return (
    <div className="flex items-center space-x-1 ">
      <label className="space-x-2 flex items-center border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50 grow">
        <input
          type="checkbox"
          className="scale-125"
          checked={todo.completed}
          onChange={(e) =>
            onCompletedChange({ id: todo.id, completed: e.target.checked })
          }
        />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.title}
        </span>
      </label>
      <button onClick={() => onDelete(todo.id)}>
        <Trash2 size={20} className="text-red-400" />
      </button>
    </div>
  );
}
