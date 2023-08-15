import { useTasks } from "../../hooks/useTasks";
import { EmptyList } from "../EmptyList";
import { TaskItem } from "../TaskItem";
import styles from "./styles.module.css";

export function ResumeTask() {
  const { tasks, TotaltasksCompleted } = useTasks();

  return (
    <section className={styles.resumeTasks}>
      <div className={styles.detailsTasks}>
        <div className={styles.totalTask}>
          <span>Tarefas criadas</span>
          <div className={styles.totalTaskCreated}>{tasks.length}</div>
        </div>

        <div className={styles.tasksCompleted}>
          <span>Concluidas</span>
          <div className={styles.totalTaskCompleted}>
            {TotaltasksCompleted >= 1
              ? `${TotaltasksCompleted} de ${tasks.length}`
              : TotaltasksCompleted}
          </div>
        </div>
      </div>

      {tasks?.length !== 0 ? <TaskItem /> : <EmptyList />}
    </section>
  );
}
