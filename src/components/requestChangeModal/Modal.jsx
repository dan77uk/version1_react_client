import styles from "./modal.module.css";

export default function ChangeModal({ props, hideModal }) {
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].checked);
  }
  return (
    <section className={styles.wrapper}>
      <article>
        <h2 className={styles.requestHeading}>Request Changes</h2>
        <h3>
          {props.customer}-{props.project}-{props.name}
        </h3>
        <p>{props.description}</p>
        <a href="#" className={styles.documentLink}>Review Documents</a>
        <form onSubmit={handleFormSubmit}>
          <div className={styles.commentWrapper}>
            <label htmlFor="write-comment">Add comment:</label>
            <textarea
              placeholder="Describe your requested changes..."
              id="write-comment"
              className="bg-light"
            />
          </div>
          <div className={styles.buttonWrapper}>
            <div className={styles.notify}>
              <label htmlFor="notify-previous">
                Notify Previous Reviewers?
              </label>
              <input type="checkbox" id="notify-previous" />
            </div>
            <div className={styles.buttons}>
              <button id={styles.requestChange} type="submit">
                Submit request
              </button>
              <button onClick={() => hideModal(false)} id={styles.cancel}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </article>
    </section>
  );
}
