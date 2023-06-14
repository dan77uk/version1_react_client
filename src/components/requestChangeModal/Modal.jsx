import styles from "./modal.module.css";

export default function Modal({ props, hideModal }) {
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].checked);
  }
  return (
    <section className={styles.wrapper}>
      <article>
        <h2>Request Changes</h2>
        <h3>
          {props.customer}-{props.project}-{props.name}
        </h3>
        <p>{props.description}</p>
        <a href="#">Review Documents</a>
        <form onSubmit={handleFormSubmit}>
          <div className={styles.commentWrapper}>
            <label htmlFor="write-comment">Describe Changes</label>
            <textarea placeholder="Write comment" id="write-comment" />
          </div>
          <div className={styles.buttonWrapper}>
            <div>
              <label htmlFor="notify-previous">
                Notify Previous Reviewers?
              </label>
              <input type="checkbox" id="notify-previous" />
            </div>
            <button id={styles.requestChange} type="submit">
              Submit Change Request
            </button>

            <button onClick={() => hideModal(false)} id={styles.cancel}>
              Cancel
            </button>
          </div>
        </form>
      </article>
    </section>
  );
}
