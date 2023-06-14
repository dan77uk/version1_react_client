import { useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { useState, useEffect } from "react";
import { getDocumentById, getUsers } from "../../api/api";
import styles from "./singleDocument.module.css";
import { useNavigate } from "react-router-dom";
import LoadingIcon from "../LoadingIcon";
import ChainList from "../chainList/ChainList";
import Modal from "../requestChangeModal/Modal";
import Header from "../header/Header";

export default function SingleDocument() {
  let history = useNavigate();
  const { document_id } = useParams();
  const [singleDoc, setSingleDoc] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [usersLoading, setUsersLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getDocumentById(document_id).then((result) => {
      setSingleDoc(result);
      setIsLoading(false);
    });
    // .then(() => {
    //   getUsers().then((result) => {
    //     setUsers(result);
    //     setIsLoading(false);
    //     setUsersLoading(false);
    //   });
    // });
  }, []);

  return isLoading ? (
    <LoadingIcon />
  ) : (
    <div className={styles.container}>
      <Header text="Back" link="/" />
      <section className={styles.wrapper}>
        <h2 className={styles.documentHeading}>
          {singleDoc.customer}-{singleDoc.project}-{singleDoc.name}
        </h2>
        <div className={styles.documentInfoWrapper}>
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
              Review Document
            </a>
            <Accordion flush defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Add a Comment</Accordion.Header>
                <Accordion.Body className={styles.commentSection}>
                  <textarea />
                  <button className={styles.button}>Submit comment</button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div id={styles.buttonWrapper}>
              <button id={styles.approve}>Approve Document</button>
              <button onClick={() => setShowModal(true)} id={styles.request}>
                Request Changes
              </button>
              <button id={styles.reject}>Reject Document</button>
            </div>
          </article>
          {/* {!isLoading && !usersLoading ? (
          <ChainList users={users} chainList={singleDoc.chainList} />
        ) : null} */}
        </div>
        {showModal ? (
          <Modal props={singleDoc} hideModal={setShowModal} />
        ) : null}
      </section>
    </div>
  );
}
