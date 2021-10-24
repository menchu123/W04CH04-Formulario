import Pagination from "../Pagination/Pagination";
import AccessData from "./AccessData/AccessData";
import Login from "./Login/Login";
import PersonalData from "./PersonalData/PersonalData";

const Form = () => {
  return (
    <form className="form-container">
      <PersonalData />
      <AccessData />
      <Login />
      <Pagination />
    </form>
  );
};

export default Form;
