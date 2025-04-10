import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";


const ProductDetail = ({ donnes, setCart }) => {

    const { id } = useParams();
    const produit = donnes.find(product => product.id === parseInt(id));

    if (!produit) return "Produit introuvable";




    const { login, user } = useContext(AuthContext);
    const navigate = useNavigate();

    // Fonction pour ajouter un produit au panier
    const addToCart = (product) => {
        if (!user) {
            navigate("/signin");
            return;
        }
        console.log(product)
        setCart((prevCart) => {
            // Vérifier si le produit existe déjà dans le panier
            const productExisting = prevCart.find((item) => Number(item.id) === Number(product.id));
            console.log("produit existe : ", productExisting)

            if (productExisting) {
                // Mettre à jour la quantité si le produit existe déjà
                toast.info("Quantité mise à jour 🛒", { position: "top-right", autoClose: 2000 });
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Ajouter un nouveau produit s'il n'existe pas encore
                toast.success("Produit ajouté au panier ✅", { position: "top-right", autoClose: 2000 });

                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };
    // end Fonction pour ajouter un produit au panier



    return (
        <div className="container">
            <div className="row">
                <h1 className="tw-text-center tw-text-slate-900">Détails du {produit.name}</h1>
                {produit.product.map((donne, index) => (
                    <div key={index} className='col-6 col-sm-4 col-md-3'>
                        <div className="card shadow-lg">
                            <img
                                src={`http://127.0.0.1:8000/${donne.thumbnail}`}
                                alt={donne.name}
                                className="card-img-top img-fluid"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <h5>{donne.name} </h5>
                                <p className="text-muted">{donne.description}</p>

                                {/* Prix du produit */}
                                <h6 className="text-primary font-weight-bold">
                                    ${donne.price}
                                </h6>

                                {/* Bouton d'ajout au panier */}
                                <button
                                    className="btn btn-success mt-2"
                                    onClick={() => addToCart(donne)}
                                >
                                    <FontAwesomeIcon icon={faShoppingCart} /> Ajouter au panier
                                </button>
                                {/* end Bouton d'ajout au panier */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default ProductDetail;
