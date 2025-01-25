
import { faSearch, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header className="navbar navbar-expand-sm navbar-dark tw-bg-slate-900" style={{ position: "sticky", top: "0", zIndex: "1000" }}>
            <div className="container-fluid " style={{ alignItems: "center" }}>
                <a href="" className="navbar-brand ">
                    <span>Alfa</span>
                </a>

                <span className="navbar-text">
                    Datascientist
                </span>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-content">
                    <span className="navbar-toggler-icon" ></span>
                </button>
                {/* debut navbar collapse */}
                <div className="collapse navbar-collapse " id="navbar-content">
                    <ul className="navbar-nav" style={{ position: "relative", top: "1px", }}>
                        <li className="nav-item"><Link to="/" className="nav-link text-white fs-5 ">Accueil</Link></li>
                        <li className="nav-item"><Link href="" className="nav-link text-white fs-5">Produit</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link text-white fs-5">Contact</Link></li>

                        {/* debut du dropdown  */}
                        <div className="dropdown ">
                            <button className="btn  dropdown-toggle text-white fs-5 h5" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                Mon espace
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark bg-muted" aria-labelledby="dropdownMenuButton2">
                                <li>
                                    <a href="" className="dropdown-item ">Ajouter</a>
                                </li>
                                <li>
                                    <a href="" className="dropdown-item ">valider livraison</a>
                                </li>
                                <li><hr className="dropdown-divider" /></li>

                                <li>
                                    <a href="" className="dropdown-item ">Deconnexion</a>
                                </li>

                                <li>
                                    <a href="" className="dropdown-item">Inscription</a>
                                </li>
                                <li>
                                    <a href="" className="dropdown-item">Connexion</a>
                                </li>


                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="">Change password</a></li>

                                <li><a className="dropdown-item" href="">Reset password</a></li>
                            </ul>
                        </div>
                        {/* end dropdown  */}
                    </ul>

                    {/* formulaire de Rechercher  */}
                    <div className="ml-auto mt-2 d-flex ">
                        <form action="" method="get" className="m-1">
                            <div className="input-group">
                                <input type="search" name="query" id="" placeholder="Rechercher" className="form-control" />
                                <button type="submit" className="btn btn-primary">
                                    <FontAwesomeIcon className='text text-white ' icon={faSearch}></FontAwesomeIcon>
                                </button>
                            </div>
                        </form>
                        {/* end formulaire de Rechercher  */}
                        <div className="">
                            <a href="" className="">
                                <FontAwesomeIcon className='tw-text-amber-500 fs-4 mt-2' icon={faCartArrowDown}></FontAwesomeIcon>
                                <sup style={{ color: "antiquewhite" }} className="fs-3"> 3</sup>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="ml-auto">
                    <li>
                        <Link to="/signup" className="btn hover:tw-border hover:tw-rounded-md text-white tw-text-lg">Connexion</Link>
                    </li>
                </div>
            </div>
            {/* end navbar collapse  */}
            <hr className="tw-bg-slate-50 tw-h-1"/>
        </header>
    )
}