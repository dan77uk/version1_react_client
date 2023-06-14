import { useEffect, useState } from "react";
import { getDocuments } from "../../api/api";
import DocumentList from "../documentList/DocumentList";
// import DocumentSidebar from "../documentSidebar/DocumentSidebar";
import Welcome from "../welcome/Welcome";
import styles from "./homepage.module.css";

export default function MainContent() {
  const [documents, setDocuments] = useState([]);
  // const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getDocuments().then((result) => {
      setDocuments(result);
      setIsLoading(false);
    });
  }, []);

  return !isLoading ? (
    <main className={styles.wrapper}>
      <Welcome docsToApprove={documents.length} />
      <DocumentList documents={documents} />
      {/* <DocumentSidebar /> */}
    </main>
  ) : (
    <p>Loading</p>
  );
}
