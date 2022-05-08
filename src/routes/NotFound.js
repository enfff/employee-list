import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>Woops something went wrong</h1>
            <Link to='/'>Homepage</Link>
        </div>
    );
}

export default NotFound;