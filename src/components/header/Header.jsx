import { Link } from "react-router-dom";
import styles from "./header.module.css";
export default function Header() {
  return (
    <header className={styles.wrapper}>
      <section>
        <h2>Version 1 </h2>
        <button>
          <Link to={"createNewRequest"}>Originator View</Link>
        </button>
      </section>
    </header>
  );
}
