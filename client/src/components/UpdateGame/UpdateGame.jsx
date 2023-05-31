import { useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import style from './UpdateGame.module.css'

const UpdateGame=()=>{
    const {idVideogame}= useParams();
    const navigate= useNavigate();
    const [newInput, setNewInput]= useState({         
    description: '',
    platforms:[],
    rating:'',
    image:''
    });


    const handleChange=(event)=>{
        setNewInput(
            event.target.name==='platforms'
            ? {...newInput, platforms: event.target.value.split(',')}
            : {...newInput, [event.target.name]: event.target.value}
            );
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.put(`http://localhost:3001/videogames/${idVideogame}`, newInput)
        .then(response=> response.data)
        .then((data)=>{
            if(data.name){
                alert('The videogame was successfully updated');
            }else{
                alert('Something went wrong, the videogame did not change')
            }
        })
        setNewInput({
            description: '',
            platforms:[],
            rating:'',
            image:''
        })
    };
    
    const emptyPlatforms= newInput.platforms.includes('') || newInput.platforms.length===0; 
    return(
        <form onSubmit={handleSubmit}>
            <div className={style.divInputs}>
            <label htmlFor="description">Description: <textarea name="description" value={newInput.description} onChange={handleChange}/></label>
            <label htmlFor="platforms">Platforms: <input type="text" name='platforms' value={newInput.platforms} onChange={handleChange} /></label>
            <label htmlFor="rating">Rating: <input type="number" name='rating' value={newInput.rating} onChange={handleChange} min={0} max={5} step='0.01'/></label>
            <label htmlFor="image">Image: <input type="text" name='image' value={newInput.image} onChange={handleChange} /></label>
            </div>

            {newInput.image && <div>
                <img
                    alt="not found"
                    width={"250px"}
                    src={newInput.image}
                />
            </div>}
            <button disabled={newInput.description==='' && emptyPlatforms && newInput.rating==='' && newInput.image===''} className={style.btnUpdt}>Change Videogame</button>
            <button onClick={()=> navigate(`/detail/${idVideogame}`)} className={style.btnBack}>Back to detail</button>
        </form>
    )
};

export default UpdateGame;