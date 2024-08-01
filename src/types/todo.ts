export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type OnCompletePreview = Pick<Todo, "id" | "completed">;
