import DocumentListCard from "../documentListCard/DocumentListCard";
import styles from "./documentList.module.css";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";

export default function DocumentList({ documents }) {
  return (
    <div className={styles.documentList}>
      <div className="headline">
        <h2>Documents Awaiting Your Approval</h2>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Filter Documents
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Recently added</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Priority</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <ul>
        {documents.map((document) => {
          return <DocumentListCard key={document.id} document={document} />;
        })}
      </ul>
    </div>
  );
}

DocumentList.propTypes = {
  documents: PropTypes.array,
};
