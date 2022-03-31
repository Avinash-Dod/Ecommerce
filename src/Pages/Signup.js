import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import './Login_signup.css'
const st ={
  "max-width":"500px",
  "margin":"auto",
  "height":"fit-content",
}

const SignUp = () => {
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCpassword] = useState('');
    const [mno, setMno] = useState('');
  
    function userNameHandler(event) {
      setUsername(event.target.value);
    }
    function passwordHandler(event) {
      setPassword(event.target.value);
    }
    function cPasswordHandler(event) {
      setCpassword(event.target.value);
    }
    function mnoHandler(event) {
      setMno(event.target.value);
    }
    function onSubmitHandler(event) {
      event.preventDefault();
      const userData = {
        userName: username,
        password: password,
        cPassword:cPassword,
        mno:mno,
  
  
      };
  
      console.log(userData)
      setUsername('');
      setPassword('');
      setCpassword('')
      setMno('')
  
      const Api = async () => {
        const result = await fetch('https://fakestoreapi.com/products/1')
        console.log(result)
  
      }
      Api();
    }

  return (
    <div>
      <Header />
      <h2>SignUp Page</h2>
      <div className="find-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="login">
                <div className="Head">
              <h2>Register Form</h2>
              </div>
              <form style={st} onSubmit={onSubmitHandler}>

<div className="input-container well">
  <i className="fa fa-user icon"></i>
  <input className="input-field" type="text" placeholder="Username" name="username" onChange={userNameHandler} value={username} />
</div>
<div className="input-container well">
  <i className="fa fa-user icon"></i>
  <input className="input-field" type="text" placeholder="Mobile Number" name="mno" onChange={mnoHandler} value={mno} />
</div>


<div className="input-container">
  <i className="fa fa-key icon"></i>
  <input className="input-field" type="password" placeholder="Password" name="psw" onChange={passwordHandler} value={password} />
</div>
<div className="input-container">
  <i className="fa fa-key icon"></i>
  <input className="input-field" type="password" placeholder="Confirm Password" name="cpsw" onChange={cPasswordHandler} value={cPassword} />
</div>

<button type="submit" className="btn primary-btn">Register </button>
<div className="link-register">
  <span class="psw"></span>
</div>
</form>
              </div>
            </div>

          </div>
        </div>



      </div>
      <Footer />
    </div>
  )
}
export default SignUp;