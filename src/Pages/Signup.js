import Footer from "../components/Footer";
import Header from "../components/Header";
import './Login_signup.css'
const st ={
  "max-width":"500px",
  "margin":"auto",
  "height":"fit-content",
}

const SignUp = () => {

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
                <form style={st}>
                  
                  <div className="input-container well">
                    <i className="fa fa-user icon"></i>
                    <input className="input-field" type="text" placeholder="Username" name="usrnm" />
                  </div>

                  <div className="input-container">
                    <i className="fa fa-envelope icon"></i>
                    <input className="input-field" type="text" placeholder="Email" name="email" />
                  </div>

                  <div className="input-container">
                    <i className="fa fa-key icon"></i>
                    <input className="input-field" type="password" placeholder="Password" name="psw" />
                  </div>

                  <button type="submit" className="btn primary-btn">Register</button>
                  <div className="link-register">
                  <span class="psw">&nbsp;</span>
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