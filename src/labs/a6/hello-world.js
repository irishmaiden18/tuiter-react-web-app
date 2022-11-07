import Nav from "../../nav";
import {Link} from "react-router-dom";

function HelloWorld() {
    return(
        <div>
            <Nav/>
            <h1>Hello World!</h1>
            <Link to="/bibliography">References</Link>
        </div>
    );
};
export default HelloWorld;