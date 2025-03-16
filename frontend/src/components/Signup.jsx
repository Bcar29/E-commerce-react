import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Signup() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [password2, setPassword2] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== password2) {
            toast.error("Les mots de passe ne correspondent pas !");
            return;
        }

        try {
            const response = await axios.post("http://127.0.0.1:8000/accounts/register/", formData);
            toast.success("Inscription réussie !");
            setFormData({ email: "", password: "" });
            setPassword2("");
        } catch (err) {
            if (err.response && err.response.data.error) {
                toast.error(err.response.data.error);
            } else {
                toast.error("Une erreur est survenue !");
            }
        }
    };

    const isDisabled = formData.password.length < 8 || formData.password !== password2;

    return (
        <div className="tw-flex tw-justify-center tw-items-center tw-min-h-screen">
            <motion.div
                initial={{ y: -50, opacity: 0 }}   // Commence légèrement au-dessus avec opacité 0
                animate={{ y: 0, opacity: 1 }}     // Descend en position normale avec opacité 1
                exit={{ y: -50, opacity: 0 }}      // Remonte en disparaissant quand on quitte
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="tw-bg-white tw-shadow-lg tw-rounded-lg tw-w-full tw-max-w-md tw-p-8 tw-border tw-relative"
            >
                <h2 className="tw-text-center tw-text-3xl tw-font-semibold tw-text-gray-800">Créer un compte</h2>
                <p className="tw-text-center tw-text-gray-500 tw-mb-6">Inscrivez-vous pour commencer vos achats</p>

                <form onSubmit={handleSubmit} className="tw-flex tw-flex-col tw-gap-4">
                    {/* Champ Email */}
                    <div className="tw-flex tw-items-center tw-border tw-border-gray-300 tw-rounded tw-px-3 tw-py-2 tw-bg-gray-50">
                        <FontAwesomeIcon icon={faEnvelope} className="tw-text-gray-500 tw-mr-2" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Adresse email"
                            className="tw-flex-1 tw-outline-none tw-bg-transparent"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Champ Mot de passe */}
                    <div className="tw-flex tw-items-center tw-border tw-border-gray-300 tw-rounded tw-px-3 tw-py-2 tw-bg-gray-50">
                        <FontAwesomeIcon icon={faLock} className="tw-text-gray-500 tw-mr-2" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Mot de passe"
                            className="tw-flex-1 tw-outline-none tw-bg-transparent"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Champ Confirmation du mot de passe */}
                    <div className="tw-flex tw-items-center tw-border tw-border-gray-300 tw-rounded tw-px-3 tw-py-2 tw-bg-gray-50">
                        <FontAwesomeIcon icon={faLock} className="tw-text-gray-500 tw-mr-2" />
                        <input
                            type="password"
                            placeholder="Confirmer le mot de passe"
                            className="tw-flex-1 tw-outline-none tw-bg-transparent"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                        />
                    </div>

                    {/* Bouton S'inscrire */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}   // Effet de survol qui agrandit légèrement le bouton
                        whileTap={{ scale: 0.95 }}    // Effet d'appui qui le rétrécit un peu
                        type="submit"
                        className={`tw-text-white tw-py-2 tw-rounded tw-font-semibold ${
                            isDisabled ? "tw-bg-gray-400" : "tw-bg-blue-600 hover:tw-bg-blue-700"
                        }`}
                        disabled={isDisabled}
                    >
                        S'inscrire
                    </motion.button>

                    <p className="tw-text-center tw-text-gray-600">
                        Déjà un compte ? <Link to="/signin" className="tw-text-blue-500 hover:tw-underline">Se connecter</Link>
                    </p>
                </form>
            </motion.div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        </div>
    );
}
