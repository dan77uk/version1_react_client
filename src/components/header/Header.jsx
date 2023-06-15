import { Link } from "react-router-dom";
import styles from "./header.module.css";
export default function Header(props) {
  return (
    <header className={styles.wrapper}>
      <section>
        <img
          src="../src/assets/Version1Logo.webp"
          alt=""
          className={styles.logo}
        />
        <button>
          //<Link to={props.link}>{props.text}</Link>
          <Link to={"createNewRequest"}>Originator View</Link>

        </button>
      </section>
    </header>
  );
}
