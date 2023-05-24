
import style from './Landing.module.css'
import { useNavigate } from "react-router-dom";

const Landing=()=>{
    const navigate= useNavigate();
    return(
        <div className={style.div}>
            <h1 className={style.h1}>VIDEOGAMES</h1>
            
            <button className={style.btn} onClick={()=> navigate('/home')}>START</button>
        </div>
    )
};

export default Landing;