import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleDocument from "./components/singleDocument/SingleDocument.jsx";
import CreateNewRequest from "./components/createNewRequest/CreateNewRequest.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/documentId/:document_id",
    element: <SingleDocument />,
  },
  {
    path: "/createNewRequest",
    element: <CreateNewRequest />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// {
//     "customer": "DWP",
//     "project": "AWS Migration",
//     "name": "Migration Plan",
//     "description": "Overview of migration strategy",
//     "documentLink": "sharepoint.com/test",
//     "currentApprover": null,
//     "originator": null,
//     "chainList": [
//     {
//         "userId": 6,
//         "position": 1,
//         "approved": false,
//         "timeStamp": null
//     },
//     {
//         "userId": 5,
//         "position": 2,
//         "approved": false,
//         "timeStamp": null
//     },
//     {
//         "userId": 8,
//         "position": 3,
//         "approved": false,
//         "timeStamp": null
//     }
//     ]
// }
