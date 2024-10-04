import { useState } from "react";
import {FaStar} from 'react-icons/fa';
import './style.css' 
export default function StarRating({noOfStars=7}){
    const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0);
    
    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex);
    }
    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex);
    }
    function handleMouseLeave(){
        setHover(rating);
    }
    console.log(rating);
    console.log(hover);
    return (
        <div className="star-rating"
        >
            {[...Array(noOfStars)].map((_,index)=>{
                //index+=1;
                return (
                    <FaStar
                    key={index}
                    className={index<=(hover||rating)?'active':'inactive'}
                    onClick={()=>handleClick(index)}
                    onMouseMove={()=>handleMouseEnter(index)}
                    onMouseLeave={()=>handleMouseLeave()}
                    size={40}
                    >
            
                    </FaStar>
                )
            })}

        </div>
        
    )
}