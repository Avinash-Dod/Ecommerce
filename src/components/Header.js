import { Link } from "react-router-dom";
const stylecss={
  "color": "#ffff",
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
          <a className="navbar-brand" href="/ " style={marginTop}><h2><i class="fa fa-shopping-cart" aria-hidden="true"></i> Imperial <em>Shopping</em></h2></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active ">
              <Link style={stylecss} to="/" ><i class="fa fa-home" aria-hidden="true"></i> Home</Link>
              </li> 
             
              <li className="nav-item">
              <Link style={stylecss} to="/contact"><i class="fa fa-envelope" aria-hidden="true"></i> Contact</Link>
              </li>
              <li className="nav-item">
              <Link style={stylecss} to="/about"><i class="fa fa-info-circle" aria-hidden="true"></i> About</Link>
              </li>
              <li className="nav-item">
              <Link style={stylecss} to="/login"><i class="fa fa-user" aria-hidden="true"></i> Login</Link>
              </li>
              <li className="nav-item">
              <Link style={stylecss} to="/cart"><i class="fa fa-shopping-bag" aria-hidden="true"></i> Cart</Link>
              </li>
              <li className="nav-item">
              <Link style={stylecss} to="/cart"><i class="fa fa-heart" aria-hidden="true"></i> Favourite</Link>
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