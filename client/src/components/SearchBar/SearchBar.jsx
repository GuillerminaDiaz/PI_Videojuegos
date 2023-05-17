import { useState } from "react";
import { useDispatch } from "react-redux";
import { cleanName, searchVideogames } from "../../redux/actions";
import style from'./SearchBar.module.css'

const SearchBar=()=>{
    const dispatch= useDispatch();
    const [name, setName]=useState('');
    const handleChange=(event)=>{
        setName(event.target.value)
    };

    
  const onSearch= (name)=>{
    dispatch(cleanName());
    dispatch(searchVideogames(name))
   
  };

    return(
        <div className={style.div}>
            <input type="text" placeholder='Search videogame...' value={name} onChange={handleChange} className={style.input}/>
            <button onClick={()=>{onSearch(name); setName('')}} disabled={!name} className={style.btn}>Search</button>
        </div>
    )
};

export default SearchBar;
