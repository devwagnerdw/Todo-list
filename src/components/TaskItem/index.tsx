import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import styles from "./styles.module.css";
import { useTasks } from "../../hooks/useTasks";

export function TaskItem() {
  const { tasks, handleToggleTaskCompletion, handleRemoveTask } = useTasks();

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} className={styles.taskContainer}>
          <div className={styles.taskContent}>
            <button onClick={() => handleToggleTaskCompletion(task.id)}>
              {task.isCompleted ? <CheckCircle /> : <Circle />}
            </button>
            <p
              className={
                task.isCompleted ? styles.completed : styles.notCompleted
              }
            >
              {task.content}
            </p>
          </div>

          <button
            className={styles.trashIcon}
            onClick={() => handleRemoveTask(task.id)}
          >
            <Trash />
          </button>
        </div>
      ))}
    </>
  );
}
