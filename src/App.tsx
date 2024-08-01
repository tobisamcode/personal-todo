import "./App.css";

import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

const App = () => {
  const {
    todos,
    addTodo,
    deleteAllCompletedTodos,
    deleteTodo,
    setTodoCompleted,
  } = useTodos();

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">My Personal Todo</h1>

      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
        <TodoSummary
          todos={todos}
          deteletAllCompleted={deleteAllCompletedTodos}
        />
      </div>
    </main>
  );
};

export default App;
