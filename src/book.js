import React, {useState} from "react";
import Expandbook from './Expandbook'

const Book=({id,image,discription,author})=>{
    const[show,setShow]=useState(false);
    const expand=()=>{
        setTimeout(()=>{
            setShow(true)
        })
    }
    return(
        <>
        <div className="bookbackground" onClick={()=>{console.log({author})}}>
            <div className="bookimage"
                style={{background:`url(${image})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}
                onMouseEnter={expand}
                onMouseLeave={()=>{setShow(false)}}
            >
                {show && <Expandbook key={id} props={{id,image,discription,author}}/>}
            </div>
        </div>
        </>
    )
}
export default Book;