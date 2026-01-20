import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Star({rating}) {
    
    const range = [1, 2, 3, 4, 5];

    return (
        <div>
            {range.map((rangeElement) => (
                <FontAwesomeIcon
                    key={rangeElement.toString()}
                    icon={faStar}
                    className={rating >= rangeElement ? "star-active" : "star-inactive"}/>
            ))}
        </div>
    );
}

export default Star