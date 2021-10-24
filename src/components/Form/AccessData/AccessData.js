const AccessData = () => {
  return (
    <>
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
        <label htmlFor="form_password-repeat">Repeat your password</label>
        <input
          type="password"
          className="form-control"
          id="form_password-repeat"
          placeholder="Repeat your password"
        ></input>
      </div>
    </>
  );
};

export default AccessData;
