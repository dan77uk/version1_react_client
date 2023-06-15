/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import styles from "./documentListCard.module.css";
import { Link } from "react-router-dom";

export default function DocumentListCard({ document }) {
  return (
    <li className={styles.card}>
      <h3>
        {document.customer}-{document.project}-{document.name}
        <span>
          Submission Date:{" "}
          {!document.deadline ? "No deadline" : document.deadline}
        </span>
      </h3>
      <p>
        {document.chainPrevious} {">"} YOU {">"} {document.chainNext}{" "}
        <a href="#">View full chain</a>
      </p>
      <p>{document.description}</p>
      <Link to={`documentId/${document.documentId}`}>
        Read and review document
      </Link>
    </li>
  );
}
