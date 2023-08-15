import { v4 as uuidv4 } from "uuid";
import {
  FormEvent,
  ReactNode,
  useState,
  createContext,
  ChangeEvent,
} from "react";

export interface Task {
  id: string;
  content: string;
  isCompleted: boolean;
}

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksContextData {
  tasks: Task[];
  handleCreateTask: (event: FormEvent<Element>) => void;
  handleRemoveTask: (id: string) => void;
  handleToggleTaskCompletion: (id: string) => void;
  handleNewTaksChange: (event: ChangeEvent<HTMLInputElement>) => void;
  newTask: string;
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
  TotaltasksCompleted: number;
}

export const TasksContext = createContext<TasksContextData>(
  {} as TasksContextData
);

export function TaskContextProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleNewTaksChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        content: newTask,
        isCompleted: false,
      },
    ]);

    setNewTask("");
  }

  function handleRemoveTask(id: string) {
    if (window.confirm("Tem certeza que voce deseja excluir esta task?")) {
      const filteredTasks = tasks.filter((task) => task.id !== id);
      setTasks(filteredTasks);
    }
  }

  function handleToggleTaskCompletion(id: string) {
    const newTask = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isCompleted: !task.isCompleted,
          }
        : task
    );
    setTasks(newTask);
  }

  const TotaltasksCompleted = tasks.reduce((acc, task) => {
    if (task.isCompleted) {
      acc++;
    }
    return acc;
  }, 0);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        handleCreateTask,
        handleRemoveTask,
        handleToggleTaskCompletion,
        handleNewTaksChange,
        newTask,
        setNewTask,
        TotaltasksCompleted,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
