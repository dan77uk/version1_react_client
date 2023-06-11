import styles from "./welcome.module.css";

export default function Welcome(docsToApprove) {
  return (
    <section className={styles.wrapper}>
      <h3>
        Welcome Pamela, you have{" "}
        <span>{docsToApprove.docsToApprove} Documents</span> currently awaiting
        your approval
      </h3>
    </section>
  );
}
