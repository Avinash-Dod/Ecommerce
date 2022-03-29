import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header class="">
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a class="navbar-brand" href="index.html"><h2><i class="fa fa-shopping-bag" aria-hidden="true"></i> Imperial <em>Shopping</em></h2></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active ">
                  <Link className="nav-link" to="/" ><i class="fa fa-home" aria-hidden="true"></i> Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contact"><i class="fa fa-envelope" aria-hidden="true"></i> Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about"><i class="fa fa-info-circle" aria-hidden="true"></i> About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login"><i class="fa fa-user" aria-hidden="true"></i> Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/favourite"><i class="fa fa-heart" aria-hidden="true"></i> Favourite</Link>
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



