import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHistory, faSignIn, faSignOut, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const UserDropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const { logout, user } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogout = () => {
        logout();
        navigate("/");
    }

    return (
        <div
            className="position-relative "
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
        >
            {/* Icône utilisateur */}
            <FontAwesomeIcon className="text-amber-500 text-white fs-4" icon={faUser} />
            {/* {user && (<span className="tw-text-white">{user.email}</span>)} */}
            

            {/* Dropdown Connexion */}
            {showDropdown && (
                <div
                    className="position-absolute mt-2 text-white p-2 rounded shadow tw-bg-white"
                    style={{ minWidth: "150px", left: "50%", transform: "translateX(-50%)" }}
                >
                    {!user && (
                        <>  {/* boutton de connexion */}
                            <Link to="/signin" className="tw-text-slate-900 text-decoration-none tw-flex tw-items-center fs-5">
                                <FontAwesomeIcon className=" tw-text-orange-600 tw-mr-2" icon={faSignIn} />
                                Connexion
                            </Link>
                            <hr className="tw-text-slate-900" />
                            <Link to="/signup" className="tw-text-slate-900 text-decoration-none tw-flex tw-items-center fs-5">
                                <FontAwesomeIcon className=" tw-text-orange-600 tw-mr-2" icon={faUserCheck} />
                                Inscription
                            </Link>
                        </>
                    )}

                    {/* boutton de deconnexion */}
                    {user && (
                        <>
                            <button
                                className="tw-text-slate-900 text-decoration-none tw-flex tw-items-center fs-5"
                                onClick={handleLogout}
                            >
                                <FontAwesomeIcon className=" tw-text-orange-600 tw-mr-2" icon={faSignOut} />
                                Déconnexion
                            </button>

                            <hr className="tw-text-slate-900" />

                            <Link to="/history" className="tw-text-slate-900 text-decoration-none tw-flex tw-items-center fs-5">
                                <FontAwesomeIcon className=" tw-text-orange-600 tw-mr-2" icon={faHistory} />
                                historique
                            </Link>

                        </>
                    )}
                    {/* end button de deconnexion */}



                </div>
            )}
        </div>
    );
};

export default UserDropdown;
