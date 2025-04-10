import { faSearch, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


export default function Search({ donnes }) {
    const [query, setQuery] = useState("")

    const prod = donnes.filter(product => {
        if (query) {
            return product.name.toLowerCase().includes(query.toLowerCase()) || product.product[0].name.toLowerCase().includes(query.toLowerCase())
        }
    }
    )

    const handleNotFound = () =>{
        toast.warning("Produit non trouver ", { position: "top-right", autoClose: 4000 });
        console.log('non trouver')
    }

    const btnSearch = prod[0] ? <Link to={`/product/${prod[0].id}`} className="btn btn-primary">
        <FontAwesomeIcon className='text text-white ' icon={faSearch}></FontAwesomeIcon>
    </Link> : <Link  className="btn btn-primary" onClick={handleNotFound}>
        <FontAwesomeIcon className='text text-white ' icon={faSearch}></FontAwesomeIcon>
    </Link>


    return (
        <form action="" method="get" className="m-1" >
            <div className="input-group">
                <input type="search" name="query" id="" placeholder="Rechercher" className="form-control" onChange={(e) => setQuery(e.target.value)} required/>
                {btnSearch}
            </div>
        </form>
    )
}