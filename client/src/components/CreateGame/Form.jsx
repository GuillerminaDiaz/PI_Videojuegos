import {  useEffect, useState } from "react";
import { validate } from "./validation/validation";
import { useDispatch, useSelector} from "react-redux";
import { createVideogame, getAllGenres,cleanVideogames } from "../../redux/actions";
//import UploadAndDisplayImage from "../ImageUpload/ImageUpload";

const Form=()=>{
    const [selectedImage, setSelectedImage]= useState(null);
    const allVideogames= useSelector(state=> state.allVideogames)
    console.log(allVideogames)
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
        dispatch(getAllGenres())
        return ()=> dispatch(cleanVideogames())
    },[dispatch])
    const handlechange=(event)=>{
        setInput(
            event.target.name==='platforms'
            ? {...input, platforms: event.target.value.split(',')}
            :{...input, [event.target.name]: event.target.value}  
        )
        setErrors(validate({...input, [event.target.name]: event.target.value}, allVideogames))

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
    
    const handleImage=(event)=>{
        const url= URL.createObjectURL(event.target.files[0])
        setSelectedImage(event.target.files[0])
        setInput(
            url!==''&& {
            ...input,
            image: url
        })
        setErrors(validate( url!==''&& {
            ...input,
            image: url
        }))
    }

    const handleRemoveImg=()=>{
        setSelectedImage('')
        setInput({...input, image: ''})
        setErrors(validate({...input, image: ''}))
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
        setSelectedImage(null)
        
        
    }
    return(
        <form onSubmit={handleSubmit}>
           <div>
            <label htmlFor="name">NAME</label>
            <input type="text" name='name' onChange={handlechange} value={input.name}/>
            { errors.name && <span>{errors.name}</span> }
           </div>
            <hr />
           <div>
            <label htmlFor="description">DECRIPTION</label>
            <textarea name="description" onChange={handlechange} value={input.description}></textarea>
            { errors.description && <span>{errors.description}</span> }
           </div>
           <hr />
           <div>
            <label htmlFor="platforms">PLATFORMS</label>
            <input type="text" name='platforms' onChange={handlechange} value={input.platforms}/>
            { errors.platforms && <span>{errors.platforms}</span> }
           </div>
           
           <hr />
           <div>
            <label htmlFor="release_date">DATE</label>
            <input type="date" max={Date.now()} name='release_date' onChange={handlechange} value={input.release_date}/>
            { errors.release_date && <span>{errors.release_date}</span> }
            
           </div> 
           <hr />

           <div>
            <label htmlFor="rating">RATING</label>
            <input type="number" name='rating' onChange={handlechange} value={input.rating}/>
            { errors.rating && <span>{errors.rating}</span> }
           </div>

            <div>
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
                <label htmlFor="MassivelyMultiplayer"><input name='MassivelyMultiplayer' type="checkbox" checked={checked.MassivelyMultiplayer} onChange={handleChangeBox}  />Massively Multiplayer</label>
                <label htmlFor="Racing"><input name='Racing' type="checkbox" checked={checked.Racing} onChange={handleChangeBox}  />Racing</label>
                <label htmlFor="Sports"><input name='Sports' type="checkbox" checked={checked.Sports} onChange={handleChangeBox}  />Sports</label>
                <label htmlFor="Fighting"><input name='Fighting' type="checkbox" checked={checked.Fighting} onChange={handleChangeBox} />Fighting</label>
                <label htmlFor="BoardGames"><input name='BoardGames' type="checkbox" checked={checked.BoardGames} onChange={handleChangeBox}  />Board Games</label>
                <label htmlFor="Family"><input name='Family' type="checkbox" checked={checked.Family} onChange={handleChangeBox}  />Family</label>
                <label htmlFor="Educational"><input name='Educational' type="checkbox" checked={checked.Educational} onChange={handleChangeBox}  />Educational</label>
                <label htmlFor="Card"><input name='Card' type="checkbox" checked={checked.Card} onChange={handleChangeBox}  />Card</label>
            
                {errors.genres&& <span>{errors.genres}</span> }
            
           </div>
           
           <div>
            <label htmlFor="image">IMAGE</label>
            <input type="file" onChange={handleImage} />
            {errors.image && <span>{errors.image}</span> }
           </div>
           {selectedImage && <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={handleRemoveImg}>Remove</button>
        </div>}
           
            
           <button type="submit" disabled={Object.entries(errors).length > 0}>CREATE</button>
           
        </form>
    )
};

export default Form;