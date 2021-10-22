import PersonalData from "./PersonalData/PersonalData";

const Form = () => {
  return (
    <form className="form-container">
      <PersonalData />
      <div className="form-group">
        <label htmlFor="form_username">Username</label>
        <input
          type="text"
          className="form-control"
          id="form_username"
          placeholder="Enter username"
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="form_password">Password</label>
        <input
          type="password"
          className="form-control"
          id="form_password"
          placeholder="Enter your password"
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="form_password">Repeat your password</label>
        <input
          type="password"
          className="form-control"
          id="form_password"
          placeholder="Repeat your password"
        ></input>
      </div>

      <div className="form-group">
        <label htmlFor="form_username">Username</label>
        <input
          type="text"
          className="form-control"
          id="form_username"
          placeholder="Enter username"
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="form_password">Password</label>
        <input
          type="password"
          className="form-control"
          id="form_password"
          placeholder="Enter your password"
        ></input>
      </div>
      <div class="custom-control custom-checkbox mt-2">
        <input
          type="checkbox"
          class="custom-control-input"
          id="remember-password"
        ></input>
        <label class="custom-control-label m-2" for="remember-password">
          Remember password
        </label>
      </div>

      <section className="navigation d-flex justify-content-between">
        <button class="btn btn-primary mt-4">Go back</button>
        <button class="btn btn-primary mt-4">Next</button>
      </section>
    </form>
  );
};

export default Form;
