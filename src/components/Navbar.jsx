import { Link } from "react-router-dom";
import logo from "../assets/arijit_logo.png";

export default function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Arijit Logo" className="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className={`nav-link`} to="/">
                Home
              </Link>
              <Link className={`nav-link`} to="/about">
                About
              </Link>
              <Link className={`nav-link`} to="/portfolio">
                Portfolio
              </Link>
              <Link className={`nav-link`} to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
