import {Link} from "react-router-dom"

function ErrSection() {
    return(
        <section className="error-section">
            <h1>404</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <div><Link to ="/">Return to home page</Link></div>
        </section>
    );
}

export default ErrSection