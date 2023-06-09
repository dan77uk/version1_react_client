import styles from "./documentSidebar.module.css";

export default function DocumentSidebar() {
  const documentsList = [
    {
      id: 1,
      title: "DWP_aurora_migration-ToR",
      overdue: false,
    },
    {
      id: 2,
      title: "Home_Office-Fraud_detection_system-ToR",
      overdue: false,
    },
    {
      id: 3,
      title: "National_Highways-Payment_gateway-CR",
      overdue: true,
    },
    {
      id: 4,
      title: "National_Highways-Payment_gateway-CR.test",
      overdue: false,
    },
  ];

  return (
    <div className={styles.sidebar}>
      <h2 className="headline">Incoming/Processed Approvals</h2>
      <ul>
        {documentsList.map((document) => {
          return (
            <li key={document.id}>
              <h3>
                {document.title}
                {document.overdue ? <span>Overdue</span> : null}
              </h3>
              <a href="#">View Progress</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
