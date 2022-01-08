import React, { useState } from 'react'
import { AiFillLike,AiOutlineLike } from "react-icons/ai";
import { IconContext } from "react-icons";
import "./Like.css";

function Like() {

const [like, setlike] = useState(false);

    return (

        <div onClick={()=>setlike(!like)}>
        <IconContext.Provider value={{ className: "top-react-icons" }}>
           {
               like?<AiFillLike />:<AiOutlineLike/>
           }
        </IconContext.Provider>
        </div>
    )
}

export default Like
