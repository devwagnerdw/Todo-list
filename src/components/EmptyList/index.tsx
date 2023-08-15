import styles from "./styles.module.css";

import Clipboard from "../../assets/clipboard.svg";
export function EmptyList() {
  return (
    <div className={styles.Container}>
      <div className={styles.containerContent}>
        <img src={Clipboard} alt="" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
