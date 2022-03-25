import { Link } from "react-router-dom";
const stylecss={
  "color": "#f33f3f",
  "font-weight": "bold",

  
}
const marginTop={
  "margin-top":"5px",
}
function Header() {
    return (
      <>
      <header className="">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/ " style={marginTop}><h2>Sixteen <em>Clothing</em></h2></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active ">
              <Link style={stylecss} to="/" >Home</Link>
              </li> 
             
              <li className="nav-item">
              <Link style={stylecss} to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
              <Link style={stylecss} to="/about">About</Link>
              </li>
              <li className="nav-item">
              <Link style={stylecss} to="/login">Login</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </header>

      </>
    )
}
export default Header;