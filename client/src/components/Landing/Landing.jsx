import { Link } from "react-router-dom";

const Landing=()=>{
    return(
        <div>
            <h1>VIDEOGAMES</h1>
            <button>
                <Link to='/home'>start</Link>
            </button>
        </div>
    )
};

export default Landing;