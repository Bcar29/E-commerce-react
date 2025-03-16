import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [result, setResult] = useState(null);
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    setResult(null);

    try {
      const response = await axios.post("http://127.0.0.1:8000/accounts/login/", formData);
      setResult(response.data);
    } catch (err) {
      setErr(err.response.data);
    }
  };


  return (
    <div className="tw-w-full tw-my-2 tw-p-4">
      <motion.div
        initial={{ y: -50, opacity: 0 }}   // Commence légèrement au-dessus avec opacité 0
        animate={{ y: 0, opacity: 1 }}     // Descend en position normale avec opacité 1
        exit={{ y: -50, opacity: 0 }}      // Remonte en disparaissant quand on quitte
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="tw-bg-white tw-shadow-lg tw-rounded-lg tw-w-full tw-mx-auto tw-max-w-md tw-p-8 tw-border tw-relative"
      >
        <h3 className="tw-text-center tw-text-zinc-600 tw-font-semibold tw-italic tw-mb-4">
          Veuillez vous <span className="tw-text-blue-600">connecter</span>
        </h3>
        <form onSubmit={handleSubmit} className="tw-flex tw-flex-col tw-gap-4">
          <div className="tw-relative tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-border-blue-500">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="tw-text-zinc-500 tw-absolute tw-top-3 tw-left-3 tw-text-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Entrer votre adresse mail"
              className="tw-p-2 tw-pl-10 tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm tw-w-full tw-transition-all tw-duration-300 focus:tw-border-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="tw-relative tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-border-blue-500">
            <FontAwesomeIcon
              icon={faLock}
              className="tw-text-zinc-500 tw-absolute tw-top-3 tw-left-3 tw-text-lg"
            />
            <input
              type="password"
              name="password"
              placeholder="Entrer votre mot de passe"
              className="tw-p-2 tw-pl-10 tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm tw-w-full tw-transition-all tw-duration-300 focus:tw-border-blue-500"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {err && <span className="tw-text-red-500 tw-text-sm">{err.message}</span>}
          <button
            type="submit"
            className="tw-bg-green-600 tw-py-2 tw-px-4 hover:tw-bg-green-700 tw-text-white tw-font-semibold tw-rounded-md tw-shadow-lg tw-transition-all tw-duration-300 tw-ease-in-out mt-4"
          >
            Se connecter
          </button>
        </form>
        <p className="tw-text-center tw-text-gray-500 tw-mt-4">
          Vous n'avez pas de compte ? <Link to="/signup" className="tw-text-blue-500">S'inscrire</Link>
        </p>
      </motion.div>
    </div>
  );
}
