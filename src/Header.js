import React from 'react'
import { BiArrowToLeft } from "react-icons/bi";
import { VscChromeMinimize } from "react-icons/vsc";

const Header = (props) => {
  return (
    <div className='Header'>
        <h2>Locations 
          <VscChromeMinimize size={20} className='icons' onClick={props.handler}/>
          <BiArrowToLeft size={20} className='icon'onClick={props.verticalHandler} />
        </h2>
    </div>
  )
}

export default Header