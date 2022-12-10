import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { signUpUser } from "./AuthSlice";
import { useNavigate } from 'react-router-dom'



function Login() {


  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [login, setLogin] = useState(false);


  let dispatch = useDispatch();
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({
    username: '',
    password: ''
  })
  useEffect(() => {
    console.log('ok')
    if (localStorage.getItem("token")) {
      navigate("/")
    }
  }, [])




  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLogin(!login)
     let ok = localStorage.getItem("token")
    if (ok) {
      console.log(ok)
      return navigate("/")
    }
    var { uname, pass } = document.forms[0];

    const UserLogin = userLogin.find((user) => user.username === uname.value);

    if (userLogin) {
      if (UserLogin.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );



  function loginFun() {
    dispatch(signUpUser(userLogin))
  }
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input value={userLogin.username} onChange={(e) => { setUserLogin({ ...userLogin, username: e.target.value }) }} type="text" name="uname" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input value={userLogin.password} onChange={(e) => { setUserLogin({ ...userLogin, password: e.target.value }) }} type="password" name="pass" required />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <a href='/forget' className="atext" ><i class="bi bi-question-circle"></i>
          Forget password?
        </a>
        <div className="button-container">
          <input type="submit" onClick={loginFun} />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>

        {isSubmitted ? <Navigate to="/" replace={true} /> : renderForm}

      </div>
    </div>
  );
}

export default Login;