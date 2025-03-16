import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";


const url = `http://127.0.0.1:8000/familles/`;

const ProductCategories = () => {
    const [donnes, setDonnes] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeSubCategory, setActiveSubCategory] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(resp => {
                // console.log(resp.data);
                setDonnes(resp.data);
            })
            .catch(error => console.error("Erreur de chargement des données", error));
    }, []);

    return (
        <div className="container">
            <div
                className="d-flex flex-wrap gap-3 p-3 bg-light rounded shadow-lg"
                style={{ borderRadius: "12px" }}
            >
                {/* Liste des catégories principales */}
                {donnes.map((category, index) => (
                    <div
                        key={index}
                        className="position-relative"
                        onMouseEnter={() => setActiveCategory(index)}
                        onMouseLeave={() => setActiveCategory(null)}
                    >
                        <a
                            href="#"
                            className="d-block px-4 py-2 text-decoration-none fw-bold text-dark rounded"
                            style={{
                                transition: "background 0.3s, transform 0.2s",
                                borderRadius: "8px",
                                backgroundColor: activeCategory === index ? "#007bff" : "#f8f9fa",
                                color: activeCategory === index ? "white" : "black"
                            }}
                        >
                            {category.name}
                        </a>

                        {/* Affichage des sous-catégories */}
                        {activeCategory === index && (
                            <div
                                className="d-flex flex-wrap gap-3 p-3 bg-light rounded shadow-lg"
                                style={{
                                    
                                    position: "absolute",
                                    top: "100%",
                                    left: "0",
                                    minWidth: "220px",
                                    borderRadius: "8px",
                                    zIndex: "10"
                                }}
                            >
                                {category.categories.map((sub, subIndex) => (
                                    <div key={subIndex} className="position-relative">
                                        <a
                                            href="#"
                                            className="d-block px-3 py-2 text-decoration-none text-dark fw-semibold"
                                            style={{
                                                borderRadius: "6px",
                                                transition: "background 0.3s",
                                                backgroundColor: activeSubCategory === subIndex ? "#f1f1f1" : "white"
                                            }}
                                            onMouseEnter={() => setActiveSubCategory(subIndex)}
                                            
                                        >
                                            {sub.name}
                                        </a>

                                        {/* Affichage des sous-types */}
                                        {activeSubCategory === subIndex && (
                                            <div
                                                className="position-absolute bg-white shadow rounded p-2"
                                                style={{
                                                    top: "0",
                                                    left: "100%",
                                                    minWidth: "180px",
                                                    borderRadius: "8px",
                                                    zIndex: "20"
                                                }}
                                            >
                                                {sub.types.map((ssub, ssubIndex) => (
                                                    <Link
                                                        key={ssubIndex}
                                                        to={`/product/${ssub.id}`}
                                                        className="d-block px-3  text-decoration-none text-dark fw-normal"
                                                        style={{
                                                            borderRadius: "6px",
                                                            transition: "background 0.3s"
                                                        }}
                                                    >
                                                        {ssub.name}
                                                        <hr />
                                                    </Link>
                                                    
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCategories;
