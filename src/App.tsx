import { Header } from "./components/Header";
import "./styles/global.css";
import styles from "./App.module.css";
import { InputTask } from "./components/InputTask";
import { ResumeTask } from "./components/ResumeTask";
import { TaskContextProvider } from "./context/TasksContext";

export function App() {
  return (
    <TaskContextProvider>
      <section>
        <Header />
        <div className={styles.wrapper}>
          <InputTask />
          <ResumeTask />
        </div>
      </section>
    </TaskContextProvider>
  );
}
