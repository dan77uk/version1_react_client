import { useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { useState, useEffect } from "react";
import { getDocumentById, getUsers, approveDocument } from "../../api/api";
import styles from "./singleDocument.module.css";
import { useNavigate } from "react-router-dom";
import LoadingIcon from "../LoadingIcon";
import ChainList from "../chainList/ChainList";
import ChangeModal from "../requestChangeModal/Modal";
import Header from "../header/Header";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function SingleDocument() {
  let history = useNavigate();
  const { document_id } = useParams();
  const [singleDoc, setSingleDoc] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [usersLoading, setUsersLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showApproveModal, setShowApproveModal] = useState(false);

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

  function submitApproveDocument(userId, documentId) {
    approveDocument(4, document_id).then(() => {
      setShowApproveModal(true);
    });
  }

  return isLoading ? (
    <LoadingIcon />
  ) : (
    <div className={styles.container}>
      <Header text="Back" link="/" />
      <section className={styles.wrapper}>
        {showApproveModal ? (
          <MyVerticallyCenteredModal
            show={showApproveModal}
            onHide={() => setShowApproveModal(false)}
          />
        ) : null}
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
              Review document
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
              <button id={styles.approve} onClick={submitApproveDocument}>
                Approve document
              </button>
              <button onClick={() => setShowModal(true)} id={styles.request}>
                Request changes
              </button>
              <button id={styles.reject}>Reject document</button>
            </div>
          </article>
          {/* {!isLoading && !usersLoading ? (
          <ChainList users={users} chainList={singleDoc.chainList} />
        ) : null} */}
        </div>
        {showModal ? (
          <ChangeModal props={singleDoc} hideModal={setShowModal} />
        ) : null}
      </section>
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"className={styles.successMessage}>Success</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className={styles.docApproved}>Your document has been approved.</h4>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        <Button className={styles.button}>
          <Link to="/">Return to Document List</Link>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
