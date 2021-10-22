import "./App.css";

function App() {
  return (
    <section className="container d-flex justify-content-center align-items-center mh-100">
      <form className="form-container">
        <div className="form-group">
          <label htmlFor="form_name">Name</label>
          <input
            type="text"
            className="form-control"
            id="form_name"
            placeholder="Enter name"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="form_lastname">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="form_lastname"
            placeholder="Enter your last name"
          ></input>
        </div>
        <div className="row">
          <div className="form-group col-10">
            <label htmlFor="form_birthdate">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              id="form_birthdate"
            ></input>
          </div>
          <div className="form-group col-2">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              class="form-control"
              id="age"
              value="27"
              readOnly
            ></input>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="form_email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            pattern="[^ @]*@[^ @]*"
            placeholder="Enter your email"
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
    </section>
  );
}

export default App;
