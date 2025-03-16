import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const ProductDetail = ({ donnes, addToCart }) => {
    const { id } = useParams();
    const produit = donnes.find(product => product.id === parseInt(id));

    if (!produit) return "Produit introuvable";

    return (
        <div className="container">
            <div className="row">
                <h1 className="tw-text-center tw-text-slate-900">Détails du {produit.name}</h1>
                {produit.product.map((donne, index) => (
                    <div key={index} className='col-6 col-sm-4 col-md-3'>
                        <div className="card shadow-lg">
                            <img
                                src={donne.thumbnail}
                                alt={donne.name}
                                className="card-img-top img-fluid"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <h5>{donne.name}</h5>
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
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default ProductDetail;
