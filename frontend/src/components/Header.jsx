import { faSearch, faCartArrowDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCategories from "./productCategorie";
import Search from "./Search";
import UserDropdown from "./UserIcon";

export default function Header({ cart, donnes }) {
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
        <div className="container-fluid" >
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
          {/* end Menu Toggle for mobile */}

          {/* Navbar Collapse */}
          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""} w-100 tw-flex tw-flex-col tw-justify-start sm:tw-flex-row md:tw-flex-row sm:tw-justify-around`} id="navbar-content">
            {/* menu de navigation  */}
            <ul className="navbar-nav ml-auto tw-text-left">
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
                  Produits
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-white fs-5 hover:text-amber-500">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/graph" className="nav-link text-white fs-5 hover:text-amber-500">
                  Dashboard
                </Link>
              </li>
            </ul>
            <div className="tw-flex tw-justify-around w-100">
              {/* Search bar */}
              <div className="tw-flex">
                <Search donnes={donnes}/>
                <Link to="/test" className="mr-3">
                  <FontAwesomeIcon className="text-amber-500 fs-4" icon={faCartArrowDown} />
                  {cart.length}
                </Link>
              </div>
              {/*end Search bar */}

              {/* le Dropdown sous l'icone user  */}
              <UserDropdown />
              {/* end Dropdown sous l'icone user  */}
            </div>
          </div>
          {/* end Navbar Collapse */}
        </div>

        <hr className="tw-bg-slate-50 tw-h-1" />
      </header>

      {/* Product Categories Dropdown */}
      <div style={{ position: "fixed", zIndex: "1000" }} onMouseLeave={() => setCat(!cat)}>
        {cat && <ProductCategories setCat={setCat} />}
      </div>
      {/* end Product Categories Dropdown */}
    </div>
  );
}
