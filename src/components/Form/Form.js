import { useContext } from "react";
import Context from "../Context/Context";
import Pagination from "../Pagination/Pagination";
import AccessData from "./AccessData/AccessData";
import Login from "./Login/Login";
import PersonalData from "./PersonalData/PersonalData";

const Form = () => {
  const { page } = useContext(Context);

  const getCurrentPage = () => {
    switch (page) {
      case 0:
        return <PersonalData />;
      case 1:
        return <AccessData />;
      case 2:
        return <Login />;
      default:
    }
  };
  const currentPage = getCurrentPage();

  return (
    <form className="form-container">
      {currentPage}
      <Pagination />
    </form>
  );
};

export default Form;
