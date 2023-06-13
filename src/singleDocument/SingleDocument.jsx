// import { useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { useState, useEffect } from "react";
import { getDocumentById } from "../api/api";
import styles from "./singleDocument.module.css";
import { useNavigate } from "react-router-dom";

export default function SingleDocument() {
  let history = useNavigate();
  // const { document_id } = useParams();
  const [singleDoc, setSingleDoc] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getDocumentById().then((result) => {
      console.log(result);
      setSingleDoc(result);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <section className={styles.wrapper}>
      <p id={styles.back} onClick={() => history(-1)}>
        Back
      </p>
      <h2>
        {singleDoc.customer}-{singleDoc.project}-{singleDoc.name}
      </h2>
      <article>
        <h2>
          {singleDoc.customer}
          <span>
            Submission Date:{" "}
            {singleDoc.submissionDate
              ? singleDoc.submissionDate
              : "No date set"}
          </span>
        </h2>
        <h3>
          {singleDoc.customer}-{singleDoc.project}-{singleDoc.name}
        </h3>
        <p>{singleDoc.description}</p>
        <a href={singleDoc.documentLink} id={styles.reviewDocs}>
          Review Documents
        </a>

        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Add a Comment</Accordion.Header>
            <Accordion.Body>
              <textarea />
              <button>Submit comment</button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </article>
    </section>
  );
}
