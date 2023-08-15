import logoImg from "../../assets/logo.svg";
import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <img src={logoImg} alt="Todo List" />
    </header>
  );
}
