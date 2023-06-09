import axios from "axios";

// const v1Api = axios.create({
//   baseURL: "http://localhost:3001",
// });

const v1Api = axios.create({
  baseURL: "http://54.72.240.2:80",
});

export const getDocuments = () => {
  return v1Api.get("V1Approved/docs/byUser?userId=4").then((res) => {
    return res.data;
  });
};

// export const getDocuments = () => {
//   return v1Api.get("/documentModels").then((res) => {
//     return res.data;
//   });
// };

export const getUsers = () => {
  return v1Api.get("/users").then((res) => {
    return res.data;
  });
};

export const getDocumentById = (id) => {
  return v1Api.get(`/V1Approved/docs/docInfo?documentId=${id}`).then((res) => {
    return res.data;
  });
};

export const postNewDocument = (obj) => {
  console.log(obj);
  return v1Api.post(`/V1Approved/addDocument`, obj).then((res) => {
    return res.status;
  });
};

export const approveDocument = (userId, documentId) => {
  return v1Api
    .put(`/V1Approved/approval?userId=${userId}&documentId=${documentId}`)
    .then((res) => {
      console.log(res.status);
      return res.status;
    });
};
