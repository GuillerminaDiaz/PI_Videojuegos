import { Link } from "react-router-dom";
const NavBar=()=>{
    return(
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/createGame'>Create Videogame</Link>
        </div>
        
    )
};

export default NavBar;