import { useEffect, useState } from "react";
import { getDocuments } from "../../api/api";
import DocumentList from "../documentList/DocumentList";
import DocumentSidebar from "../documentSidebar/DocumentSidebar";
import Welcome from "../welcome/Welcome";
import styles from "./main.module.css";

export default function MainContent() {
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getDocuments().then((result) => {
      const usersDocs = result.filter((doc) => doc.current_approver == 2);
      setDocuments(usersDocs);
      setIsLoading(false);
    });
  }, []);

  return !isLoading ? (
    <main className={styles.wrapper}>
      <Welcome docsToApprove={documents.length} />
      <DocumentList documents={documents} />
      <DocumentSidebar />
    </main>
  ) : null;
}
