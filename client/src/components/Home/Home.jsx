import style from './Home.module.css'
import { useEffect } from "react";
import { allVideogames, cleanVideogames, filterByGenre, filterByOrigin, getAllGenres, orderAlphabetically, orderRating } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import Loading from '../Loading/Loading';

const Home=()=>{
    const dispatch= useDispatch();
    const genres= useSelector(state=> state.genres);
    const numPage= useSelector(state=> state.numPage);
    const renderVideogames= useSelector(state=> state.renderVideogames);
    let from= (numPage - 1) * 15;
    let to= numPage *15;
    let numPages= Math.ceil(renderVideogames.length/15);
    
    let viewVideogames=  renderVideogames?.slice(from,to);
   

  useEffect(()=>{
    dispatch(getAllGenres())
    dispatch(allVideogames())
    
    return ()=> dispatch(cleanVideogames())
  },[dispatch]);

    const handleFilterOrigin=(event)=>{
        dispatch(filterByOrigin(event.target.value))
    };

    const handleFilterGenre=(event)=>{
        dispatch(filterByGenre(event.target.value))
    }
    
    const handleOrderName=(event)=>{
        dispatch(orderAlphabetically(event.target.value))
    };

    const handleOrderRating=(event)=>{
        dispatch(orderRating(event.target.value))
    };

   
    return(
        <div className={style.background}>
            <select onChange={handleFilterOrigin}>
                <option>Videogames Origin</option>
                <option value="allVideogames">All Videogames</option>
                <option value="true">My Videogames</option>
                <option value="false">Web Videogames</option>
            </select>
            <select onChange={handleFilterGenre}>
                <option>Genre</option>
                <option value="allVideogames">All Videogames</option>
                {
                    genres?.map((genre, i)=> <option key={i} value={genre.name}>{genre.name}</option> )
                }
            </select>
            <select onChange={handleOrderName}>
                <option>Sort Alphabetically</option>
                <option value="A">A-Z</option>
                <option value="D">Z-A</option>
            </select>
            <select onChange={handleOrderRating}>
                <option value="">Order by rating</option>
                <option value="A">Lower rating to higher rating</option>
                <option value="D">Higher rating to lower rating</option>
            </select>
            {viewVideogames && viewVideogames.map(game=>{
                return( 
                    <Card 
                    key={game.id}
                    id={game.id}
                    image={game.image}
                    name={game.name}
                    genres={game.Genres}
                    />
                    )
                })
            }
            {renderVideogames.length===0 && <Loading/>}
            {renderVideogames.length>0 &&  <Paginate numPages={renderVideogames.slice(0, numPages)}/>}
           

        </div>
    )




};

export default Home;