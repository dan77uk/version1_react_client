import styles from "./welcome.module.css";
export default function Welcome() {
  return (
    <section className={styles.wrapper}>
      <h3>
        Welcome Pamela, you have <span>5 Documents</span> currently awaiting
        your approval
      </h3>
    </section>
  );
}
