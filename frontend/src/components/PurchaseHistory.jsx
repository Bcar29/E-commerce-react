import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import {faCalendarAlt,faMoneyBillWave,faCheckCircle,faClock,faTimesCircle, faBox} from "@fortawesome/free-solid-svg-icons";

const PurchaseHistory = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/signin');
      return;
    }
  })

  // recuperation des commandes a le travers le context
  const { orders } = useContext(OrderContext);

  // filtrer les produits en fonction de l'utilisateur connecté
  const history = orders.filter((order) => order.user.email === user.email)

  return (
    <div className="tw-max-w-3xl tw-mx-auto tw-mt-6">
      <h2 className="tw-text-2xl tw-font-bold tw-text-center">📜 Historique des Achats pour le compte <br /> {user && (<strong >{user.email}</strong>)}</h2>
      {history.length === 0 ? (
        <p className="tw-text-gray-500">Aucun achat effectué.</p>
      ) : (
        history.map((order) => (
          <div
            key={order.id}
            className="tw-mb-4 tw-p-4 tw-shadow-lg tw-border tw-rounded-lg tw-bg-white"
          >
            <div className="tw-flex tw-justify-between">
              <div>
                <p className="tw-text-lg tw-font-semibold">Commande #{order.id}</p>
                <p className="tw-text-gray-500">
                  <FontAwesomeIcon icon={faCalendarAlt} className="tw-mr-2 tw-text-blue-500" />
                  Date: {order.ordered_date}
                </p>
                <p className="tw-text-gray-500">
                  <FontAwesomeIcon icon={faMoneyBillWave} className="tw-mr-2 tw-text-green-500" />
                  Total: {order.montant}€
                </p>
              </div>
              <div>
                <span
                  className={`tw-px-3 tw-py-1 tw-text-sm tw-font-medium tw-rounded tw-flex tw-items-center tw-gap-2 ${order.delivred === "Livrre"
                    ? "tw-bg-green-500 tw-text-white"
                    : order.delivred === "En_attent"
                      ? "tw-bg-yellow-500 tw-text-white"
                      : "tw-bg-red-500 tw-text-white"
                    }`}
                >
                  <FontAwesomeIcon
                    icon={
                      order.delivred === "Livrre"
                        ? faCheckCircle
                        : order.delivred === "En_attent"
                          ? faClock
                          : faTimesCircle
                    }
                  />
                  {order.delivred}
                </span>
              </div>
            </div>
            <ul className="tw-mt-2 tw-text-gray-700">
              {order.products.map((item, index) => (
                <li key={index} className="tw-flex tw-items-center tw-gap-2">
                  <FontAwesomeIcon icon={faBox} className="tw-text-orange-500" />
                  {item.name} x {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default PurchaseHistory;
