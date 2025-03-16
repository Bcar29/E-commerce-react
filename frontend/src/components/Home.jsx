
import CarouselComponent from './Carousel'

import { Link } from "react-router-dom";

export default function Home({ donnes }) {

    return (
        <>
            <CarouselComponent />
            <div className="container">
                <div className="row">
                    {donnes.map(donne => (
                        <div key={donne.id} className='tw-text tw-text-center col-6 col-sm-4 col-md-2'>
                            <div className="">
                            <h2>{donne.name}</h2>
                                <div className="card">
                                    <img src={donne.product[0].thumbnail} alt="" className="card-img-top img-fluid" style={{ height: "150px", objectFit: "cover" }} />
                                        <hr />
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
        </>
    )
}