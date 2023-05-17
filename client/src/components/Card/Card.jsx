import style from './Card.module.css'
import {Link} from 'react-router-dom';
const Card=({id,image,name,genres})=>{
    return(
        <div className={style.card}>
            <img src={image} alt={name} className={style.img}/>
            <Link to={`/detail/${id}`}>{name}</Link>
            <h3>{genres.join(', ')}</h3>
            
        </div>
    )
};

export default Card;