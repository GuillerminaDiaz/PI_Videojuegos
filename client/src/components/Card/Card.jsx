import style from './Card.module.css'
import {NavLink} from 'react-router-dom';
const Card=({id,image,name,genres})=>{
    return(
        <div className={style.card}>
            <img src={image} alt={name} className={style.img}/>
            <NavLink to={`/detail/${id}`} className={style.link}>{name}</NavLink>
            <div  className={style.divGenres}>
            <h3 className={style.text}>{genres?.join(' ')}</h3>
            </div>
            
        </div>
    )
};

export default Card;