import Header from "./components/header/Header";
import MainContent from "./components/homepage/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <Header text="Create Approval Request" link="createNewRequest"/>
      <MainContent />
    </>
  );
}
