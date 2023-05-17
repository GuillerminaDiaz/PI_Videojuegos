import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage,handleNumberPage } from "../../redux/actions";

const Paginate=({numPages})=>{
    const numPage= useSelector(state=> state.numPage);
    const dispatch= useDispatch();
    const next=()=>{
        numPage !== numPages && dispatch(nextPage());
    };
    const prev=()=>{
        numPage !== 1 && dispatch(prevPage());
    };
    const number=(pageNum)=>{
        dispatch(handleNumberPage(pageNum))
    };
    return(
        <div>
            {numPage !== 1 &&  <button onClick={prev}>Prev</button>}
            
            
            {
                numPages.map((page, i)=> <button key={i} onClick={()=>number(i+1)}>{i+1}</button> )
            }
            
            {numPage !== numPages.length && <button onClick={next}>Next</button>}
           
        </div>
    );
};

export default Paginate;