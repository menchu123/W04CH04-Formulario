const Login = () => {
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
    </>
  );
};

export default Login;
