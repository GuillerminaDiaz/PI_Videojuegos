import gif from '../../images/a8cce7e5fb8f774dc79a06e3f727a070_w200.webp'
import style from './Loading.module.css'
const Loading=()=>{
    return(
        <div className={style.div}>
            <h1 className={style.h1}>Loading...</h1>
            <img src={gif} alt="gif" />
        </div>
        
    )
};

export default Loading;