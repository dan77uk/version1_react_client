import DocumentList from "../documentList/DocumentList";
import DocumentSidebar from "../documentSidebar/DocumentSidebar";
import Welcome from "../welcome/Welcome";
import styles from "./main.module.css";

export default function MainContent() {
  return (
    <main className={styles.wrapper}>
      <Welcome />
      <DocumentList />
      <DocumentSidebar />
    </main>
  );
}
