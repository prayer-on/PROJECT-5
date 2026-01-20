import { Link } from "react-router-dom";

function Card({property}) {
    return(    
    <Link to={`/detail/${property.id}`}>
        <div className="wrapper-card">
            <div className="card">
                {property.title}
            </div>
        </div>    
    </Link>
    );
}

export default Card