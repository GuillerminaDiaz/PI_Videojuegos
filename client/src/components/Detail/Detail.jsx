import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
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
              alert('Videogame does not exist');
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
                    <h4>Description: </h4><div dangerouslySetInnerHTML={{__html: gameDetail?.description}} />
                    <p>Released: {gameDetail?.release_date}</p>
                    <p>Platforms: {gameDetail?.platforms?.join(', ')}</p>
                    <p>Rating: {gameDetail?.rating}</p>
                    <p>Genres: {gameDetail?.Genres?.join(', ')}</p>
                    {isNaN(idVideogame) && <div className={style.divBtnsCreated}>  
                        <button className={style.btnDelete}><NavLink to='deleteGame' className={style.navLinks}>Delete Videogame</NavLink></button>
                        <button className={style.btnUpdate}><NavLink to={`/detail/${idVideogame}/updateGame`} className={style.navLinks}>Update Videogame</NavLink></button>
                        </div>
                    }
                    
                    </div>
                    <Outlet idVideogame={idVideogame}/>
                </div>
            }
        </>
    )
};

export default Detail;