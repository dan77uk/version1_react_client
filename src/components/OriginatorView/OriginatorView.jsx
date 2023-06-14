import { useEffect, useState } from "react";
import { getDocuments } from "../../api/api";
import Header from "../header/Header";
import OriginatorViewCard from "../OriginatorViewCard/OriginatorViewCard";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./originatorView.css"
import LoadingIcon from "../LoadingIcon";


export default function OriginatorView() {
    const [documents, setDocuments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      getDocuments().then((result) => {
        setDocuments(result);
        setIsLoading(false);
      });
    }, []);

  return isLoading ? (
    <LoadingIcon />
  )  : (
    <div>
      <Header text="Back" link="/" />
      <div className="container-wrapper">
        <h2 className="headline">Manage previously submitted requests</h2>
        <ul>
        {documents.map((document) => {
          return (
            <OriginatorViewCard key={document.documentId} document={document} />
          );
        })}
        </ul>
        <Link to={"/createNewRequest"}>
          <Button variant="primary" className="button">
            Create approval request
          </Button>
        </Link>

        <div></div>
      </div>
    </div>
  );
}
