import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import './Login_signup.css'
const st ={
  "max-width":"500px",
  "margin":"auto",
  "height":"fit-content",
}

const Login = () => {

  return (
    <>
      <Header />
      <h2>Login Page</h2>
      <div className="find-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="login">
                <div className="Head">
              <h2>Login Form</h2>
              </div>
                <form style={st}>
                  
                  <div className="input-container well">
                    <i className="fa fa-user icon"></i>
                    <input className="input-field" type="text" placeholder="Username" name="usrnm" />
                  </div>

                  

                  <div className="input-container">
                    <i className="fa fa-key icon"></i>
                    <input className="input-field" type="password" placeholder="Password" name="psw" />
                  </div>

                  <button type="submit" className="btn">Login </button>
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