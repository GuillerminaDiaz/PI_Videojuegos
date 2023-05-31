import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import style from './DeletedGame.module.css'

const DeletedGame=()=>{
    const {idVideogame}= useParams();
    console.log(idVideogame)
    const navigate= useNavigate();
    const handleClick=(idVideogame)=>{
        axios.delete(`http://localhost:3001/videogames/${idVideogame}`)
        .then(response => response.data)
        .then(( data ) => {
           if (data.name) {
            alert('Deleted videogame');
            navigate('/home');
           } else {
              alert('Something went wrong, the videogame was not deleted');
           }
           
        });
    };

    return(
        <div>
            <h4>Are you sure you want to delete the game?</h4>
            <div className={style.divbtns}>
            <button onClick={()=>handleClick(idVideogame)} className={style.btnDel}>DELETE</button>
            <button className={style.btnBack}><NavLink to={`/detail/${idVideogame}`} className={style.link}>Back</NavLink></button>
            </div>
        </div>
    )
};

export default DeletedGame;