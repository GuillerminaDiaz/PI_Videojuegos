import { NavLink, useLocation, useNavigate } from "react-router-dom";
import style from './Footer.module.css';

const Footer=()=>{
    const navigate= useNavigate();
    const location= useLocation();

    const handleClick = (event)=>{
        if(location.pathname=== '/createGame') navigate('/home')
        else navigate('/home')
    };

    return(
        <div className={style.div}>
            {
            location.pathname=== '/home'
            ? <NavLink to='/' className={style.link}>Back</NavLink>
            :<button onClick={handleClick} className={style.btn}>Back</button>
            }
            
        </div>
    )
};

export default Footer;