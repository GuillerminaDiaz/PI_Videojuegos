import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { allVideogames, cleanName, getAllGenres } from "../../redux/actions";
import style from './Nav.module.css'
import img from '../../images/ec31558dd23da051a70c0d242ac57a7e.jpg'

const NavBar=()=>{
    const dispatch= useDispatch();
    const location= useLocation();

    const allVideogamesHome=()=>{
        dispatch(cleanName())
        dispatch(getAllGenres())
        dispatch(allVideogames())
    };
    return(
        <div >
        <div className={style.div}>
            <button onClick={allVideogamesHome} className={style.btn}><NavLink to='/home' className={style.link}>Home</NavLink></button> 
            <button className={style.btn}><NavLink to='/createGame'  className={style.link}>Create Videogame</NavLink></button>
             <button onClick={allVideogamesHome} className={style.btn}><NavLink to='/home' className={style.link}>All Videogames</NavLink></button>
            {location.pathname!=='/createGame' && <SearchBar/>} 
            
        </div>
        { location.pathname==='/home'  && <img src={img} alt="-" className={style.img}/>}
        </div>
        
        
    )
};

export default NavBar;