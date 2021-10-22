import AccessData from "./AccessData/AccessData";
import Login from "./Login/Login";
import PersonalData from "./PersonalData/PersonalData";

const Form = () => {
  return (
    <form className="form-container">
      <PersonalData />
      <AccessData />
      <Login />
      <section className="navigation d-flex justify-content-between">
        <button class="btn btn-primary mt-4">Go back</button>
        <button class="btn btn-primary mt-4">Next</button>
      </section>
    </form>
  );
};

export default Form;
