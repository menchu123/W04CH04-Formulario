import { useState } from "react";
import "./App.css";
import Context from "./components/Context/Context";
import Form from "./components/Form/Form";

function App() {
  const initialData = {
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialData);

  const changeData = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <Context.Provider
      value={{
        userData,
        setUserData,
        changeData,
      }}
    >
      <section className="container d-flex justify-content-center align-items-center mh-100">
        <Form />
      </section>
    </Context.Provider>
  );
}

export default App;
