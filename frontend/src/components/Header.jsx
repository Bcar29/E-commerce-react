import { faSearch, faCartArrowDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCategories from "./productCategorie";
import Search from "./Search";

export default function Header({cart}) {
  const [cat, setCat] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [divmasquer, setDivmasquer] = useState(false)
  const masquerCat = () => {
    if (divmasquer) {
      setCat(false)
    }  
  }
  return (
    <div className="tw-relative">
      <header className="navbar navbar-expand-lg navbar-dark tw-bg-slate-900" style={{ position: "sticky", top: "0", zIndex: "1000" }}>
        <div className="container-fluid" style={{ alignItems: "center" }}>
          {/* Logo */}
          <a href="#" className="navbar-brand">
            <span className="text-2xl text-white font-semibold">Alfa</span>
          </a>

          {/* Menu Toggle for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-controls="navbar-content"
            aria-expanded={menuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Collapse */}
          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbar-content">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white fs-5 hover:text-amber-500">
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link text-white fs-5 hover:text-amber-500"
                  onMouseOver={() => setCat(true)}
                  onMouseLeave={masquerCat}
                >
                  Catégories
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-white fs-5 hover:text-amber-500">
                  Contact
                </Link>
              </li>
            </ul>
            {/* Search bar */}
            <div className="d-flex ml-auto ">
              <Search />
              <Link to="/test" className="mr-3">
                <FontAwesomeIcon className="text-amber-500 fs-4" icon={faCartArrowDown} />
                {cart.length}
              </Link>
            </div>

            {/* Cart and User icon */}
            <div className="d-flex align-items-center ml-3 ms-auto">

              <Link to="/signin" className="text-white fs-4">
                <FontAwesomeIcon className="text-amber-500" icon={faUser} />
                <span className="tw-ml-3">Connexion</span>
              </Link>
            </div>
          </div>
        </div>
        {/* Navbar Collapse End */}

        {/* Horizontal Line */}
        <hr className="tw-bg-slate-50 tw-h-1" />
      </header>

      {/* Product Categories Dropdown */}
      <div style={{ position: "fixed", zIndex: "1000" }} onMouseLeave={() => setCat(!cat)}>
        {cat && <ProductCategories />}
      </div>
    </div>
  );
}
