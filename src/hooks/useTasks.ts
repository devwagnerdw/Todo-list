import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

export function useTasks() {
  const context = useContext(TasksContext);

  return context;
}
