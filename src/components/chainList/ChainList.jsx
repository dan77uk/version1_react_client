/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import LoadingIcon from "../LoadingIcon";
import styles from "./chainList.module.css";
import Table from "react-bootstrap/Table";

export default function ChainList({ users, chainList }) {
  const [documentChain, setDocumentChain] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updatedDocumentChain = chainList.map((user) => {
      const result = users.find((res) => res.id === user.userId);
      const updatedUser = {
        ...result,
        approved: user.approved,
        position: user.position,
        timestamp: user.timeStamp,
      };
      return updatedUser;
    });

    setDocumentChain(updatedDocumentChain);
    setIsLoading(false);
  }, [chainList, users]);

  return isLoading ? (
    <LoadingIcon />
  ) : (
    <section className={styles.wrapper}>
      <h4>Approval Chain</h4>
      <Table striped>
        <thead>
          <tr>
            <th style={{ fontWeight: 800 }}>Individual</th>
            <th style={{ fontWeight: 800 }}>Date</th>
            <th style={{ fontWeight: 800 }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {documentChain.map((user, index) => {
            return (
              <tr key={user.name}>
                <td>{user.name}</td>
                <td>Need a timestamp</td>
                <td>
                  {index === 0 ? "Created" : user.approved ? "Approved" : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </section>
  );
}
