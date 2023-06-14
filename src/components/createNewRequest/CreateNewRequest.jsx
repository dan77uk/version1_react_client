import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./createNewRequest.css";
import Header from "../header/Header";

export default function CreateNewRequest() {
  const [formData, setFormData] = useState({
    customer: "",
    project: "",
    name: "",
    description: "",
    documentLink: "",
    chainList: "",
  });

  //   "customer": "DWP",
  // //     "project": "AWS Migration",
  // //     "name": "Migration Plan",
  // //     "description": "Overview of migration strategy",
  // //     "documentLink": "sharepoint.com/test",
  // //     "currentApprover": null,
  // //     "originator": null,

  const handleFormSubmit = (event) => {
    event.preventDefault();
    formData.chainList = chainList;
    // const completedFormData = [...formData, chainList]
    console.log(formData);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const [chainList, setChainList] = useState([{ id: "", userId: "" }]);
  const handleChainListChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...chainList];
    list[index][name] = value;
    setChainList(list);
    console.log(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...chainList];
    list.splice(index, 1);
    setChainList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setChainList([...chainList, { id: "", userId: "" }]);
  };

  return (
    <div>
      <Header text="Back" link="/originator" />
      <div className="container-wrapper">
        <h2 className="headline">Create Approval Request</h2>
        <div className="form">
          <div className="form-sections">
            <h3 className="form-section-headings">Document Details</h3>
            <Form.Group className="mb-3" controlId="customer">
              <Form.Label>Customer</Form.Label>
              <Form.Control
                type="text"
                name="customer"
                placeholder="Enter Customer name"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="project">
              <Form.Label>Project</Form.Label>
              <Form.Control
                type="text"
                name="project"
                placeholder="Enter Project name"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Document Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Document name"
                onChange={handleInputChange}
              />
            </Form.Group>
          </div>

          <div className="form-sections">
            <h3 className="form-section-headings">Approval Chain</h3>
            {chainList.map((x, i) => {
              return (
                <div className="box">
                  <input
                    name="id"
                    className="input-style"
                    placeholder="Enter chain position"
                    value={x.id}
                    onChange={(e) => handleChainListChange(e, i)}
                  />
                  <input
                    className="input-style"
                    name="userId"
                    placeholder="Enter userId"
                    value={x.userId}
                    onChange={(e) => handleChainListChange(e, i)}
                  />
                  <div className="btn-box">
                    {chainList.length !== 1 && (
                      <button
                        className="button"
                        onClick={() => handleRemoveClick(i)}
                      >
                        Remove
                      </button>
                    )}
                    {chainList.length - 1 === i && (
                      <button onClick={handleAddClick} className="button">Add</button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="form-sections">
            <h3 className="form-section-headings">Description</h3>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Add description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                onChange={handleInputChange}
              />
            </Form.Group>
          </div>
          <div className="form-sections">
            <h3 className="form-section-headings">Add Document</h3>
            <Form.Group className="mb-3" controlId="documentLink">
              <Form.Label>Document Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Document link"
                name="documentLink"
                onChange={handleInputChange}
              />
            </Form.Group>
          </div>
          <div className="form-sections">
            <h3 className="form-section-headings">
              Estimated date of submission
            </h3>
            <Form.Group className="mb-3" controlId="submissionDate">
              <Form.Label>Submission date</Form.Label>
              <Form.Control
                type="date"
                name="submissionDate"
                onChange={handleInputChange}
              />
            </Form.Group>
          </div>

          <Button
            variant="primary"
            className="button"
            type="submit"
            onClick={handleFormSubmit}
          >
            Send request
          </Button>
          <Button
            variant="primary"
            className="button"
          >
            Save draft
          </Button>
        </div>
      </div>
    </div>
  );
}
