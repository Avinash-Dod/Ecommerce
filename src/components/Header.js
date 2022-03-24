import { Link } from "react-router-dom";
function Header() {
    return (
      <>
      <header className="">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="# "><h2>Sixteen <em>Clothing</em></h2></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active ">
              <Link className="text-active " to="/" >Home</Link>
              </li> 
             
              <li className="nav-item">
              <Link className="text-white" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
              <Link className="text-white" to="/about">About</Link>
              </li>
              <li className="nav-item">
              <Link className="text-white" to="/login">Login</Link>
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