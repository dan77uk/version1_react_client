import axios from "axios";

const v1Api = axios.create({
  baseURL: "http://localhost:3001",
});

export const getDocuments = () => {
  return v1Api.get("/documents").then((res) => {
    return res.data;
  });
};

export const getUsers = () => {
  return v1Api.get("/users").then((res) => {
    return res.data;
  });
};

export const getDocumentById = () => {
  return v1Api.get(`/docInfo`).then((res) => {
    return res.data[0];
  });
};
