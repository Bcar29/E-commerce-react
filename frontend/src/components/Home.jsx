
import CarouselComponent from './Carousel'
import img4 from '../assets/img/img4.jpg'

import { Link } from "react-router-dom";

export default function Home({ donnes }) {
    console.log(donnes)


    return (
        <>
            {/* le Carousel */}
            <CarouselComponent />
            {/* end le Carousel */}

            {/* l'apperçu de l'Entreprise */}
            <div className="container-fluid" style={{ margin: "16px 24px !important" }} >
                <div className="row align-items-center shadow-lg p-4 rounded" >
                    {/* Image à gauche */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <img
                            src={img4}
                            alt="Entreprise E-commerce"
                            className="img-fluid rounded shadow-lg"
                        />
                    </div>

                    {/* Texte à droite */}
                    <div className="col-md-6">
                        <h2 className="fw-bold mb-3 tw-text-orange-500">
                            <i className="fas fa-store me-2"></i> Bienvenue chez Alfa-Shop
                        </h2>
                        <p className="text-dark fs-5 ">
                            🌟 Découvrez une <strong className='tw-text-orange-500'>expérience d'achat unique</strong>, où qualité et accessibilité se rencontrent.
                            Nous proposons une large gamme de <strong className='tw-text-orange-500'>produits haut de gamme</strong> à des <strong>prix compétitifs</strong>.
                        </p>
                        <p className="text-muted fs-5">
                            <strong>🚀 Livraison rapide & sécurisée</strong><br />
                            <strong>💳 Paiements 100% sécurisés</strong><br />
                            <strong>🎯 Service client réactif 24/7</strong><br />
                        </p>
                        <a href="/shop" className="btn btn-primary px-2 fs-5 shadow-lg">
                            <i className="fas fa-shopping-cart"></i> Explorer nos produits
                        </a>
                    </div>
                </div>
            </div>
            {/* end l'apperçu de l'Entreprise */}

            {/* echantillon de produits */}
            <div className="container-fluid" style={{ margin: "16px 24px !important" }}>
                <div className="row align-items-center shadow-lg p-4 rounded" >
                    {donnes.map(donne => (
                        <div key={donne.id} className='tw-text tw-text-center col-6 col-sm-4 col-md-2'>
                            <div className="">
                                <h2>{donne.name}</h2>
                                <div className="card">
                                    <img src={`http://127.0.0.1:8000/${donne.product[0].thumbnail}`} alt="" className="card-img-top img-fluid" style={{ height: "150px", objectFit: "cover" }} />
                                    
                                    <div className="card-body" style={{ padding: '4px !important' }}>

                                        <h3 className='text-truncate'>{donne.product[0].name}</h3>
                                        <Link to={`/product/${donne.id}`} className="btn btn-primary text-truncate">
                                            Voir plus
                                        </Link>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* end echantillon de produits */}

        </>
    )
}