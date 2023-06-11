import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://v1-mock-server.vercel.app/",
});

export const getDocuments = () => {
  return newsApi.get("/documents").then((res) => {
    return res.data;
  });
};
