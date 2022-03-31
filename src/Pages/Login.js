import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import './Login_signup.css'
const st = {
  "max-width": "500px",
  "margin": "auto",
  "height": "fit-content",
}

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  function userNameHandler(event) {
    setUsername(event.target.value);
  }
  function passwordHandler(event) {
    setPassword(event.target.value);
  }
 
  function onSubmitHandler(event) {
    event.preventDefault();
    const userData = {
      userName: username,
      password: password,
     

    };

    console.log(userData)
    setUsername('');
    setPassword('');
   

    const Api = async () => {
      const result = await fetch('https://fakestoreapi.com/products/1')
      console.log(result)

    }
    Api();
  };


  return (
    <>
      <Header />
      <h2>Login Page</h2>
      <div className="find-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="login ">
                <div className="Head">
                  <h2>Login Form</h2>
                </div>
                <form style={st} onSubmit={onSubmitHandler}>

                  <div className="input-container well">
                    <i className="fa fa-user icon"></i>
                    <input className="input-field" type="text" placeholder="Username" name="username" onChange={userNameHandler} value={username} />
                  </div>
                 


                  <div className="input-container">
                    <i className="fa fa-key icon"></i>
                    <input className="input-field" type="password" placeholder="Password" name="psw" onChange={passwordHandler} value={password} />
                  </div>
                  

                  <button type="submit" className="btn primary-btn">Login </button>
                  <div className="link-register">
                    <span class="psw">Not a member? <a href=" #"><Link to="/signup">Register</Link></a></span>
                    <span class="psw"> Forgot <a href=" #">Password?</a></span>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>



      </div>
      <Footer />
    </>
  )
}
export default Login;