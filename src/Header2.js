import React from 'react'
import {FaRegWindowMaximize} from "react-icons/fa";
import{BiArrowToLeft} from "react-icons/bi";

const Header2 = (props) => {
  return (
    <div class="col-sm-4 p-1 text-black">
        <h2>Locations 
            <FaRegWindowMaximize size={15} className="icons" onClick={props.handler}/>
            <BiArrowToLeft size={20} className="icon" onClick = {props.verticalHandler}/>
        </h2>
    </div>
  )
}

export default Header2