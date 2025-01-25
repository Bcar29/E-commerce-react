import { faPhone, faEnvelope, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
    return (
        <section className="section contact tw-p-3 tw-bg-gradient-to-br tw-from-purple-500 tw-to-violet-800 ">
            <div className="row gy-4">
                <div className="col-xl-6">
                    <div className="row">
                        <div className="col-lg-6 ">
                            <div className="info-box card p-3 mb-4">
                                <h3>
                                    <FontAwesomeIcon className='text text-info mx-3' icon={faLocationDot}></FontAwesomeIcon>
                                    Addresse</h3>
                                <p>H108 HAFIA,<br />GUINNEE, GU 535022</p>
                            </div>
                        </div>

                        <div className="col-lg-6 ">
                            <div className="info-box card  p-3 mb-4">
                                <h3>
                                    <FontAwesomeIcon className='text text-info mx-3' icon={faPhone}></FontAwesomeIcon>
                                    Nous Appellez</h3>
                                <p>+224 621 68 24 96<br />+224 666 98 10 57</p>
                            </div>
                        </div>

                        <div className="col-lg-6 ">
                            <div className="info-box card p-3 mb-4">
                                <h3>
                                    <FontAwesomeIcon className='text text-info mx-3' icon={faEnvelope}></FontAwesomeIcon>
                                    Nos Email</h3>
                                <p>info@example.com<br />contact@example.com</p>
                            </div>
                        </div>

                        <div className="col-lg-6 ">
                            <div className="info-box card p-3 mb-4">
                                <h3>
                                    <FontAwesomeIcon className='text text-info mx-3' icon={faClock}></FontAwesomeIcon>
                                    Jour Ouvert</h3>
                                <p>Lundi - Samedi<br />08H:00 - 18H:00</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-xl-6">
                    <div className="card p-4">
                        <form action="" method="post" className="">

                            <div className="row gy-4">
                                <div className="col-md-6 my-3">
                                    <input type="text" name="nom" className="form-control" placeholder="Votre Nom" required />
                                </div>

                                <div className="col-md-6  my-3">
                                    <input type="email" className="form-control" name="email" placeholder="Votre Email" required />
                                </div>

                                <div className="col-md-12 my-2">
                                    <input type="text" className="form-control" name="sujet" placeholder="Sujet" required />
                                </div>

                                <div className="col-md-12 my-3">
                                    <textarea className="form-control" name="message" rows="3" placeholder="Message" required></textarea>
                                </div>

                                <div className="col-md-12 text-center mt-1" >
                                    <button type="submit" className="btn btn-primary w-100 ">Envoyer !!</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>

    )
}