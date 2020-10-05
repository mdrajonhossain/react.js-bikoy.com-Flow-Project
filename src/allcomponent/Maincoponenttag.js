import React from 'react';
import './Maincoponenttag.css';
import { connect } from 'react-redux';
import Headercomponent from './header/Headercomponent'; 
import Foodercomponent from './fooder/Foodercomponent'; 
import Componentcenter from './centertag/Componentcenter'; 
import Slidertag from './centertag/slidertag/Slidertag'; 
 

function Maincoponenttag(props) {
 
  return (
  	<div className="">

      	<div className="container-fluid bg-info manushadow">
        	 <Headercomponent/>
        </div>

        <div className="container-fluid slidercss">
           <Slidertag/>
        </div>
 
        <div className="container-fluid centercontain">
           <Componentcenter/>
        </div>
 
        <div className="container-fluid bg-info fooderbox">
            <Foodercomponent/>
        </div>

    </div>
  );
}

export default Maincoponenttag
