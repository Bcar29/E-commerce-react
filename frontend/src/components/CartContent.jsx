
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function CartContent({ cart, setCart }) {


  // Fonction pour supprimer un produit du panier
  const removeFromCart = (name) => {
    setCart((prevCart) => {
      const updateCart = prevCart
        .map((item) => (item.name === name ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)

      localStorage.setItem("cart", JSON.stringify(updateCart))

      return updateCart
    })
  };

  // Calcul du prix total
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <motion.div className="tw-bg-white tw-shadow-lg tw-rounded-lg tw-p-4 tw-w-96 tw-mx-auto tw-my-4"
      initial={{ y: -50, opacity: 0 }}   // Commence légèrement au-dessus avec opacité 0
      animate={{ y: 0, opacity: 1 }}     // Descend en position normale avec opacité 1
      exit={{ y: -50, opacity: 0 }}      // Remonte en disparaissant quand on quitte
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <h2 className="tw-text-xl tw-font-semibold tw-mb-4 tw-text-center">
        <FontAwesomeIcon icon={faShoppingCart} className="tw-mr-2 tw-text-amber-500" />
        Mon Panier
      </h2>

      {/* Liste des produits */}
      {cart.length > 0 ? (
        <ul className="tw-space-y-3">
          {cart.map((item, index) => (
            <li
              key={index}
              className="tw-flex tw-items-center tw-justify-between tw-border-b tw-pb-2"
            >
              <img
                src={item.thumbnail}
                alt={item.name}
                className="tw-w-12 tw-h-12 tw-object-cover tw-rounded"
              />
              <span className="tw-flex-1 tw-ml-3 tw-text-slate-900">{item.name}</span>
              <span className="tw-flex-1 tw-ml-3 tw-text-slate-900">{item.quantity}</span>

              <span className="tw-text-amber-500 tw-font-semibold">
                ${item.price}
              </span>
              <button
                onClick={() => removeFromCart(item.name)}
                className="tw-text-red-500 hover:tw-text-red-700"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="tw-text-gray-500">Votre panier est vide.</p>
      )}

      {/* Total & Actions */}
      {cart.length > 0 && (
        <div className="tw-mt-4">
          <div className="tw-flex tw-justify-between tw-font-semibold">
            <span className="tw-text-slate-900">Total :</span>
            <span className="tw-text-amber-500">${totalPrice}</span>
          </div>
          <Link
            to="/checkout"
            className="tw-mt-3 tw-inline-block tw-bg-amber-500 tw-text-yellow-50 tw-text-center tw-py-2 tw-w-full tw-rounded-lg hover:tw-bg-amber-600"
          >
            Passer à la caisse
          </Link>
        </div>
      )}
    </motion.div>
  );
}