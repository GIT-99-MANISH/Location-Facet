import React from 'react'
import { BiX } from "react-icons/bi";
import JSONDATA from "./db.json";
import ReactCountryFlag from "react-country-flag";
import {useState} from "react";

const Content = () => {
  const [minimize , setMinimize] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const deselectAll = () => {
    let cros=document.getElementsByName('cros');
    let cityCheckLen=cros.length;
    for(var x=0;x<cityCheckLen;x++) {
        cros[x].checked=false;
    }
  }

  const alphabets = [];
    for(let x = 65; x < 91; x++){
        alphabets[x] = String.fromCharCode(x);
    }

    const pt = JSONDATA.reduce((acc, value) => {
      acc[value.City[0]]=React.createRef();
      return acc;
    }, {});

    const onAlphabetSelect = (m) => {
      const hold = document.getElementById(m);
      if (hold)
        hold.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
    };
  return (
    <div className='content'>
        <div className={`content ${minimize ? 'content-active': ''}`}>
        </div>
        <div className="search">
          <span className="fa fa-search"></span>
          <input type="text" placeholder="Filter Locations" onChange={event => {setSearchTerm(event.target.value)}}/>
          <p>  <BiX size={20} className='cross' onClick={deselectAll}/>Clear All  </p>
        </div>

        <div className='wholeContent'>
        <div className='dataList'>
        {JSONDATA.filter((val)=> {
          if(searchTerm=="") {
            return val
          }else if(val.City.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
        }).sort((a,b) => a.City>b.City?1:-1)
        .map((val, key) => {
          return <div id={val.City.charAt(0)}><h5 
            key={val.City.charAt(0)}
            ref={pt[val.City.charAt(0)]}>
            <input type="checkbox" name='cros' className='checks'/>
          <ReactCountryFlag countryCode={val.code} svg className='emojiFlag'/>
           {val.City}-{val.Country} 
          </h5>
      </div>;
        })}
      </div>
        <div className='alphabetList'>
          {alphabets.map((item)=>(
               <div className='alpha' key={item}>
                 <button id='textButton'  onClick={()=>onAlphabetSelect(item)}> 
                   {item.toUpperCase()}
                </button>
                </div> 
              
            ))}
        </div>
        </div>
   </div>
  )
}

export default Content;