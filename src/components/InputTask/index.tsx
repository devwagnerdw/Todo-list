import { PlusCircle } from "@phosphor-icons/react";
import styles from "./styles.module.css";
import { InvalidEvent } from "react";
import { useTasks } from "../../hooks/useTasks";

export interface Task {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function InputTask() {
  const { handleNewTaksChange, handleCreateTask, newTask } = useTasks();

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  const isNewTaskEmpty = newTask.length === 0;

  return (
    <form className={styles.formContainer} onSubmit={handleCreateTask}>
      <input
        onChange={handleNewTaksChange}
        onInvalid={handleNewTaskInvalid}
        name="task"
        value={newTask}
        type="text"
        placeholder="Adicione uma tarefa"
        required
      />

      <button type="submit" disabled={isNewTaskEmpty}>
        <span>Criar</span>
        <PlusCircle />
      </button>
    </form>
  );
}
