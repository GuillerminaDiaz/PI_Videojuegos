import {  useEffect, useState } from "react";
import { validate } from "./validation/validation";
import { useDispatch, useSelector} from "react-redux";
import { createVideogame, getAllGenres,cleanVideogames, allVideogames } from "../../redux/actions";
import style from './Form.module.css'

const Form=()=>{
    
    const allVideogamesState= useSelector(state=> state.allVideogames)
    
    const dispatch= useDispatch();
   
    const [checked, setChecked]= useState({
        Action: false,
        Indie: false,
        Adventure: false,
        RPG: false,
        Shooter: false,
        Casual: false,
        Strategy: false,
        Simulation: false,
        Puzzle: false,
        Arcade: false,
        Platformer: false,
        MassivelyMultiplayer: false,
        Racing: false,
        Sports: false,
        Fighting: false,
        BoardGames: false,
        Family: false,
        Educational: false,
        Card: false,
    })
    const[input, setInput]= useState({
        name:'',
        description:'',
        platforms:[],
        release_date:'',
        rating: '',
        genre: [],
        image:''

    });

    const [errors, setErrors]= useState({});

    useEffect(()=>{
        dispatch(allVideogames())
        dispatch(getAllGenres())
        return ()=> dispatch(cleanVideogames())
    },[dispatch])
    const handlechange=(event)=>{
        setInput(
            event.target.name==='platforms'
            ? {...input, platforms: event.target.value.split(',')}
            :{...input, [event.target.name]: event.target.value}  
        )
        setErrors(validate({...input, [event.target.name]: event.target.value}, allVideogamesState))

    };

    const handleChangeBox=(event)=>{
        if(!checked[event.target.name]){
            setChecked({
                ...checked,
                [event.target.name]: true
            });
            setInput({
               ...input,
                genre: [...input.genre, event.target.name]
            });
            setErrors(validate({
                ...input, 
                genre: [...input.genre, event.target.name]
            }))
        }else{
            setChecked({
                ...checked,
                [event.target.name]: false
            });
            setInput({
               ...input,
                genre: input.genre.filter(genre=> genre !==event.target.name)
            });
            setErrors(validate(
                {...input, 
                genre: input.genre.filter(genre=> genre !==event.target.name)
            }))
        }
    };
    
    

    const handleSubmit=(event)=>{
        event.preventDefault()
        dispatch(createVideogame(input))
        alert('Videogame created')
        setInput({
            name:'',
            description:'',
            platforms:[],
            release_date:'',
            rating: '',
            genre: [],
            image:''
        })
        setChecked({
            Action: false,
            Indie: false,
            Adventure: false,
            RPG: false,
            Shooter: false,
            Casual: false,
            Strategy: false,
            Simulation: false,
            Puzzle: false,
            Arcade: false,
            Platformer: false,
            MassivelyMultiplayer: false,
            Racing: false,
            Sports: false,
            Fighting: false,
            BoardGames: false,
            Family: false,
            Educational: false,
            Card: false,
        })
        
        
        
    }
    const nameGames= allVideogamesState.map((game)=> game.name.toLowerCase())
    return(
        <form onSubmit={handleSubmit}>
            <h1 className={style.title}>CREATE YOR VIDEOGAME</h1>
           <div className={style.divInputs}>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' onChange={handlechange} value={input.name} placeholder="Name..."/>
            { errors.name && <span>{errors.name}</span> }
           </div >
            
           
           <div className={style.divInputs}>
            <label htmlFor="platforms">Platforms:</label>
            <input type="text" name='platforms' onChange={handlechange} value={input.platforms} placeholder="Example: PC, Xbox,..."/>
            { errors.platforms && <span>{errors.platforms}</span> }
           </div>
           
           
           <div className={style.divInputs}>
            <label htmlFor="release_date">Date Created:</label>
            <input type="date" max={Date.now()} name='release_date' onChange={handlechange} value={input.release_date} placeholder="Date created..."/>
            { errors.release_date && <span>{errors.release_date}</span> }
            
           </div> 
           

           <div className={style.divInputs}>
            <label htmlFor="rating">Rating:</label>
            <input type="number" name='rating' onChange={handlechange} value={input.rating} placeholder="Rating..." min={0} max={5} step='0.01'/>
            { errors.rating && <span>{errors.rating}</span> }
           </div>

           <div className={style.divInputs}>
            <label htmlFor="description">Description:</label>
            <textarea name="description" onChange={handlechange} value={input.description} placeholder="Videogame description..."></textarea>
            { errors.description && <span>{errors.description}</span> }
           </div>

           <div className={style.divInputs}>
            <label htmlFor="image" className={style.txtcb}>Image:</label>
            <input type="text" name='image' onChange={handlechange} value={input.image} placeholder="Image URL..."/>
            {errors.image && <span className={style.errorcb}>{errors.image}</span> }
           </div>
           {input.image && <div>
                <img
                    alt="not found"
                    width={"250px"}
                    src={input.image}
                />
            </div>}

                <label htmlFor="genre" className={style.txtcb}>Videogame genre/s:</label>
            <div className={style.checkboxes}>
                <label htmlFor="Action"><input name='Action' type="checkbox" checked={checked.Action} onChange={handleChangeBox}  />Action</label>
                <label htmlFor="Indie"><input name='Indie' type="checkbox" checked={checked.Indie} onChange={handleChangeBox}  />Indie</label>
                <label htmlFor="Adventure"><input name='Adventure' type="checkbox" checked={checked.Adventure} onChange={handleChangeBox}  />Adventure</label>
                <label htmlFor="RPG"><input name='RPG' type="checkbox" checked={checked.RPG} onChange={handleChangeBox}  />RPG</label>
                <label htmlFor="Shooter"><input name='Shooter' type="checkbox" checked={checked.Shooter} onChange={handleChangeBox} />Shooter</label>
                <label htmlFor="Casual"><input name='Casual' type="checkbox" checked={checked.Casual} onChange={handleChangeBox}  />Casual</label>
                <label htmlFor="Strategy"><input name='Strategy' type="checkbox" checked={checked.Strategy} onChange={handleChangeBox}  />Strategy</label>
                <label htmlFor="Simulation"><input name='Simulation' type="checkbox" checked={checked.Simulation} onChange={handleChangeBox}  />Simulation</label>
                <label htmlFor="Puzzle"><input name='Puzzle' type="checkbox" checked={checked.Puzzle} onChange={handleChangeBox}  />Puzzle</label>
                <label htmlFor="Arcade"><input name='Arcade' type="checkbox" checked={checked.Arcade} onChange={handleChangeBox}  />Arcade</label>
                <label htmlFor="Platformer"><input name='Platformer' type="checkbox" checked={checked.Platformer} onChange={handleChangeBox} />Platformer</label>
                <label htmlFor="Racing"><input name='Racing' type="checkbox" checked={checked.Racing} onChange={handleChangeBox}  />Racing</label>
                <label htmlFor="Sports"><input name='Sports' type="checkbox" checked={checked.Sports} onChange={handleChangeBox}  />Sports</label>
                <label htmlFor="Fighting"><input name='Fighting' type="checkbox" checked={checked.Fighting} onChange={handleChangeBox} />Fighting</label>
                <label htmlFor="BoardGames"><input name='BoardGames' type="checkbox" checked={checked.BoardGames} onChange={handleChangeBox}  />Board Games</label>
                <label htmlFor="Family"><input name='Family' type="checkbox" checked={checked.Family} onChange={handleChangeBox}  />Family</label>
                <label htmlFor="Educational"><input name='Educational' type="checkbox" checked={checked.Educational} onChange={handleChangeBox}  />Educational</label>
                <label htmlFor="Card"><input name='Card' type="checkbox" checked={checked.Card} onChange={handleChangeBox}  />Card</label>
                <label htmlFor="MassivelyMultiplayer" className={style.xllabel}><input name='MassivelyMultiplayer' type="checkbox" checked={checked.MassivelyMultiplayer} onChange={handleChangeBox}  />Massively Multiplayer</label>
            
            
           </div>
                {errors.genres&& <span className={style.errorcb}>{errors.genres}</span> }
           
           
            
           <button type="submit" className={style.btnCreate} disabled={
            Object.entries(errors).length > 0 
            || input.name === ''
            || input.description ===''
            || input.platforms.length===0
            || input.release_date  ===''
            || input.rating  ===''
            || input.genre.length ===0
            || input.image  ===''
            || nameGames.includes(input.name)
            }
            >
            CREATE
            </button>
           
        </form>
    )
};

export default Form;