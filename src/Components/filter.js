import {useState} from "react" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Filter({title}) {

const [isOpen, setIsOpen] = useState(0)

    return(
         <div className="wrapper-filter">
        <select className="filter"
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        onChange={() => setIsOpen(false)}>
        <option>
            {title}
        </option>
        </select>
        <FontAwesomeIcon icon={isOpen? faAngleDown : faAngleUp} />
    </div>
    );
}

export default Filter