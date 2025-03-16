import { faSearch, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Search() {
    

    return (
        <form action="" method="get" className="m-1" >
            <div className="input-group">
                <input type="search" name="query" id="" placeholder="Rechercher" className="form-control"  onChange={(e) => setQuery(e.target.value)} />
                <button type="submit" className="btn btn-primary">
                    <FontAwesomeIcon className='text text-white ' icon={faSearch}></FontAwesomeIcon>
                </button>
            </div>
        </form>
    )

}