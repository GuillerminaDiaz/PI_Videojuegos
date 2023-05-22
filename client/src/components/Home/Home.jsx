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
            <div className={style.contentselect}>
                <select onChange={handleFilterOrigin}>
                    <option value="allVideogames">Videogames Origin</option>
                    <option value="allVideogames">All Videogames</option>
                    <option value="created">My Videogames</option>
                    <option value="api">Web Videogames</option>
                </select>
                <select onChange={handleFilterGenre}>
                    <option value="allVideogames">Genre</option>
                    <option value="allVideogames">All Videogames</option>
                    {
                        genres?.map((genre, i)=> <option key={i} value={genre.name}>{genre.name}</option> )
                    }
                </select>
                <select onChange={handleOrderName}>
                    <option value="no">Sort Alphabetically</option>
                    <option value="A">A-Z</option>
                    <option value="D">Z-A</option>
                </select>
                <select onChange={handleOrderRating}>
                    <option value="no">Order by rating</option>
                    <option value="A">Lower rating to higher rating</option>
                    <option value="D">Higher rating to lower rating</option>
                </select>
            </div>
            <div className={style.divCards}>
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
            </div>
            
            {renderVideogames.length===0 && <Loading/>}
            {renderVideogames.length>0 &&  <Paginate numPages={renderVideogames.slice(0, numPages)}/>}
           

        </div>
    )




};

export default Home;