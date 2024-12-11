import { useState } from "react";

export default function LikeButton(){
let [isLiked,setisLiked]=useState(false);
let [clicks,setClicks]=useState(0);

let toggleLike = ()=>{
    setisLiked(!isLiked);
    setClicks(clicks=clicks+1);
}

let styles = {color:"red"};

    return ( <div>
        <h1>Click Count={clicks}</h1>
        <p onClick={toggleLike}>
            {
            isLiked ? ( <i className="fa-solid fa-heart" style={styles}></i> )
            : ( <i className="fa-regular fa-heart"></i> )} 
            </p>
    </div> 
    )
};