import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import style from './Detail.module.css'

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
    console.log(gameDetail)
    return(
        <div>
            <h1>DETAIL</h1>
            <img src={gameDetail?.image} alt={gameDetail?.name} className={style.img}/>
            <h2>Name: {gameDetail?.name}</h2>
            <h3>Released: {gameDetail?.release_date}</h3>
            <p>Description: {gameDetail?.description}</p>
            <h3>Platforms: {gameDetail?.platforms?.join(', ')}</h3>
            <h3>Rating: {gameDetail?.rating}</h3>
            <h3>Genres: {gameDetail?.Genres?.join(', ')}</h3>
            
        </div>
    )
};

export default Detail;