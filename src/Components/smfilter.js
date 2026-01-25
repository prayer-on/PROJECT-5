import {useState} from "react" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";


function SmFilter({title, content}) {

const [isOpen, setIsOpen] = useState(false)

    return(
    <div className="wrapper-small-filter">
        <select className="small-filter"
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        onChange={() => setIsOpen(false)}>
        <option>
            {title}
        </option>
        </select>
        <FontAwesomeIcon icon={isOpen? faAngleDown : faAngleUp} />
        {isOpen && <p>{content}</p>}
    </div>
    );
}

export default SmFilter