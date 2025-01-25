import '../assets/css/footer.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <section className="info_section layout_padding2-top tw-bg-slate-950">
            <div className="container-fluid">
                <div className="info_form">
                    <form action="">
                        <input type="email" id="newslester" placeholder="Entre votre email pour vous inscrire à notre newslester" />
                        <div className="d-flex justify-content-end">
                            <button>subscribe</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 offset-md-1">
                        <h6>
                            Menus
                        </h6>
                        <ul className="menus">
                            <li className=" active">
                                <a className="" href="">Accueil <span className="sr-only"></span></a>
                            </li>
                            <li className="">
                                <a className="" href="">Produit </a>
                            </li>
                            <li className="">
                                <a className="" href="">Contact</a>
                            </li>

                            <li className="">
                                <a className="" href="">Connexion</a>
                            </li>

                            <li className="">
                                <a className="" href="">Deconnexion</a>
                            </li>

                        </ul>
                    </div>


                    <div className="col-md-3">
                        <h6>
                            Nous Contactez
                        </h6>
                        <div className="info_link-box">
                            <a href="">
                                
                                <span> <FontAwesomeIcon className='text text-info' icon={faLocationDot}></FontAwesomeIcon> GUINNEE, GU 535022</span>

                            </a>

                            <a href="">
                                
                                <span> <FontAwesomeIcon className='text text-info' icon={faPhone}></FontAwesomeIcon> +224 621 68 24 96</span>

                            </a>
                            <a href="">
                                
                                <span> <FontAwesomeIcon className='text text-info' icon={faEnvelope}></FontAwesomeIcon> FansClub@gmail.com</span>

                            </a>
                            <a href="">
                                
                                <span><FontAwesomeIcon className='text text-info' icon={faEnvelope}></FontAwesomeIcon> Alfadev@gmail.com  </span>
                                
                            </a>
                        </div>
                    </div>

                    <div className="info_social col-md-3">
                        <h6>
                            Nous Suivre sur
                        </h6>
                        <div className="info-social">
                            <div>
                                <a href="">
                                    
                                    <span><FontAwesomeIcon className='text text-info' icon={faFacebook}></FontAwesomeIcon> Facebook</span>
                                </a>
                            </div>

                            <div>
                                <a href="">
                                    
                                    <span> <FontAwesomeIcon className='text text-info' icon={faInstagram}></FontAwesomeIcon> Linkdin</span>
                                </a>
                            </div>

                            <div>
                                <a href="">
                                    <span><FontAwesomeIcon className='text text-info' icon={faLinkedin}></FontAwesomeIcon> Instagram</span>
                                </a>
                            </div>

                            <div>
                                <a href="">
                                    
                                    <span><FontAwesomeIcon className='text text-info' icon={faTwitter}></FontAwesomeIcon> Twitter</span>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="fas fa-arrow-up"></i></a>
        </section >
    )
}