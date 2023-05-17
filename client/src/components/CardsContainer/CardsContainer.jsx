// import Card from "../Card/Card"
// import { useSelector} from 'react-redux';
// import Paginate from "../Paginate/Paginate";


// const CardContainer=()=>{
//   const videogames= useSelector(state=> state.videogames);
//   const numPage= useSelector(state=> state.numPage);

//   let from= (numPage - 1) * 15;
//   let to= numPage *15;
//   let numPages= Math.ceil(videogames.length/15);
//   let viewVideogames= videogames.slice(from,to);
//     return(
//         <div>
//             {viewVideogames.map(game=>{
//                 return( 
//                     <Card 
//                         key={game.id}
//                         id={game.id}
//                         image={game.image}
//                         name={game.name}
//                         genres={game.Genres}
//                     />
//                 )
//             })
//             }
//             <Paginate numPages={numPages}/>

//         </div>
//     )
// };

// export default CardContainer;