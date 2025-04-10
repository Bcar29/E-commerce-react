import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { faLocationDot, faCity, faSortNumericDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const CartValidation = ({ cart, setCart }) => {
  // importation de l'utilisateur
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [order, setOrder] = useState({
    pays: '',
    ville: '',
    zip_code: '',
    product: cart,
    user: ''

  })

  useEffect(() => {
    if (!user) {
      navigate('/signin');
      return;
    }
    else {
      setOrder({
        pays: '',
        ville: '',
        zip_code: '',
        product: cart,
        user: user.email
      })
    }
  }, [])


  // fonction pour recuperer le contenu du formulaire
  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value })
  }

  // fonction pour soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const resp = await axios.post("http://127.0.0.1:8000/commandes/", order)
      console.log(resp.data.msg, resp.data.addresse)
      setCart([])
      navigate("/history")

    } catch (error) {
      console.log(error)
    }
  }


  return (

    <motion.div className="tw-bg-white tw-shadow-lg tw-rounded-lg tw-p-4 tw-w-1/3 tw-mx-auto tw-my-4"
      initial={{ y: -50, opacity: 0 }}   // Commence légèrement au-dessus avec opacité 0
      animate={{ y: 0, opacity: 1 }}     // Descend en position normale avec opacité 1
      exit={{ y: -50, opacity: 0 }}      // Remonte en disparaissant quand on quitte
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {console.log(order)}
      <h2 className="tw-text-xl tw-font-semibold tw-mb-4 tw-text-center">
        <FontAwesomeIcon icon={faLocationDot} className="tw-mr-2 tw-text-amber-500" />
        Votre addresse de livraison
      </h2>

      <form action="" method="post" className="tw-flex tw-flex-col tw-gap-4" onSubmit={handleSubmit}>
        <div className="tw-flex tw-items-center tw-border tw-border-gray-300 tw-rounded tw-px-3 tw-py-2 tw-bg-gray-50">
          <FontAwesomeIcon icon={faLocationDot} className="tw-text-amber-500 tw-mr-2" />
          <select name="pays" id="" className="tw-flex-1 tw-outline-none tw-bg-transparent" onChange={handleChange}>
            <option value="">Choisir le pays</option>
            <option value="guinnee" >Guinnée</option>
            <option value="senegal">Senegal</option>
            <option value="ivoire">Cote D'ivoire</option>
            <option value="mali">Mali</option>
          </select>
        </div>

        <div className="tw-flex tw-items-center tw-border tw-border-gray-300 tw-rounded tw-px-3 tw-py-2 tw-bg-gray-50">
          <FontAwesomeIcon icon={faCity} className="tw-text-amber-500 tw-mr-2" />
          <input
            type="text"
            name="ville"
            placeholder="Votre Ville"
            className="tw-flex-1 tw-outline-none tw-bg-transparent"
            onChange={handleChange}
          />
        </div>

        <div className="tw-flex tw-items-center tw-border tw-border-gray-300 tw-rounded tw-px-3 tw-py-2 tw-bg-gray-50">
          <FontAwesomeIcon icon={faSortNumericDown} className="tw-text-amber-500 tw-mr-2" />
          <input
            type="text"
            name="zip_code"
            placeholder="Numero de la rue"
            className="tw-flex-1 tw-outline-none tw-bg-transparent"
            onChange={handleChange}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}   // Effet de survol qui agrandit légèrement le bouton
          whileTap={{ scale: 0.95 }}    // Effet d'appui qui le rétrécit un peu
          type="submit"
          className={`tw-text-white tw-py-2 tw-rounded tw-font-bold  tw-bg-blue-600 hover:tw-bg-blue-700`}

        >
          Valider
          <FontAwesomeIcon icon={faCheck} className="tw-text-white tw-ml-2 fs-4" />
        </motion.button>


      </form>

    </motion.div>
  );
};

export default CartValidation;
