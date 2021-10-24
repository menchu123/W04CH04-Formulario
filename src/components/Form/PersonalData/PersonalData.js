const PersonalData = () => {
  return (
    <>
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
            className="form-control"
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
    </>
  );
};

export default PersonalData;
