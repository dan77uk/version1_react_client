import Button from "react-bootstrap/Button";
import "./originatorViewCard.css";

export default function OriginatorViewCard({ document }) {
  return (
    <div>
      <li className="list-item">
        <div className="card-details">
          <h3>
            {document.customer}-{document.project}-{document.name}
          </h3>
          <p>
            {document.chainPrevious} {">"} YOU {">"} {document.chainNext}{" "}
            <a href="#" className="view-chain">
              View Full Chain
            </a>
          </p>
          <p>
            {" "}
            {!document.deadline
              ? "No estimated submission date."
              : `Estimated submission date: ${document.deadline}`}
          </p>
        </div>
        <div className="cancel-edit-button">
          <Button variant="primary" className="button" type="submit">
            Cancel
          </Button>
          <Button variant="primary" className="button">
            Edit
          </Button>
        </div>
      </li>
    </div>
  );
}
