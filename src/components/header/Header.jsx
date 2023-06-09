import styles from "./header.module.css";
export default function Header() {
  return (
    <header className={styles.wrapper}>
      <section>
        <h2>Version 1 </h2>
        <button>Create/Edit Approval Request</button>
      </section>
    </header>
  );
}
