import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import style from './Detail.module.css'
import Loading from '../Loading/Loading'

const Detail=()=>{
    const { idVideogame }= useParams();
    
    const [gameDetail, setGameDetail]= useState({});

    useEffect(()=>{
        axios(`http://localhost:3001/videogames/${idVideogame}`)
        .then(response => response.data)
        .then(( data ) => {
           if (data.name) {
              setGameDetail(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setGameDetail({});
    },[idVideogame])
    
    return(
        <>
            {Object.entries(gameDetail).length === 0 && <div className={style.divLoad}> <Loading/> </div>}
            {Object.entries(gameDetail).length > 0 && 
                <div className={style.divDetail}>
                    <img src={gameDetail?.image} alt={gameDetail?.name} className={style.img}/>
                    

                    
                    <div className={style.divText}>
                    <h1 className={style.h1}>{gameDetail?.name}</h1>
                    <h4>Description: </h4><p>{gameDetail?.description}</p>
                    <p>Released: {gameDetail?.release_date}</p>
                    <p>Platforms: {gameDetail?.platforms?.join(', ')}</p>
                    <p>Rating: {gameDetail?.rating}</p>
                    <p>Genres: {gameDetail?.Genres?.join(', ')}</p>
                    </div>
                    
                </div>
            }
        </>
    )
};

export default Detail;