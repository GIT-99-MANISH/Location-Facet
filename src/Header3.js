import React from 'react'
import {TbArrowBarRight} from "react-icons/tb";

const Header3 = (props) => {
  return (
    <div class="col-sm-3 p-1 text-black">
        <h2>Locations
        <TbArrowBarRight size={20} className="icons" onClick={props.verticalHandler}/>
        </h2>
    </div>
  )
}

export default Header3