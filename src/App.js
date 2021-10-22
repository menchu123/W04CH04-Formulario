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
        <section className="navigation d-flex justify-content-between">
          <button class="btn btn-primary mt-4">Go back</button>
          <button class="btn btn-primary mt-4">Next</button>
        </section>
      </form>
    </section>
  );
}

export default App;
