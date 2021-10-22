import "./App.css";

function App() {
  return (
    <section className="form-container container">
      <form>
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
      </form>
    </section>
  );
}

export default App;
