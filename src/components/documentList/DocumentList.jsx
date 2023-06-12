import DocumentListCard from "../documentListCard/DocumentListCard";
import styles from "./documentList.module.css";
import PropTypes from "prop-types";

export default function DocumentList({ documents }) {
  // const documentsList = [
  //   {
  //     title: "DWP_aurora_migration-ToR",
  //     chainPrevious: "Ian Sutherland",
  //     chainNext: "Enda Diggins",
  //     deadline: "Friday 16th June 2023",
  //   },
  //   {
  //     title: "Home_Office-Fraud_detection_system-ToR",
  //     chainPrevious: "Ian Sutherland",
  //     chainNext: "Enda Diggins",
  //     deadline: "Friday 16th June 2023",
  //   },
  //   {
  //     title: "National_Highways-Payment_gateway-CR",
  //     chainPrevious: "Ian Sutherland",
  //     chainNext: "Enda Diggins",
  //     deadline: "Friday 16th June 2023",
  //   },
  //   {
  //     title: "National_Highways-Payment_gateway-CR.test",
  //     chainPrevious: "Ian Sutherland",
  //     chainNext: "Enda Diggins",
  //     deadline: "Friday 16th June 2023",
  //   },
  // ];

  return (
    <div className={styles.documentList}>
      <h2 className="headline">Documents Awaiting Your Approval</h2>
      <ul>
        {documents.map((document) => {
          return <DocumentListCard key={document} document={document} />;
        })}
      </ul>
    </div>
  );
}

DocumentList.propTypes = {
  documents: PropTypes.array,
};
