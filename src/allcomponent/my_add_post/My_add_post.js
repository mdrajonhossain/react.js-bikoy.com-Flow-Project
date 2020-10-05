
import React from 'react';
import './Addpostcomponenttag.css';
import { connect } from 'react-redux';
import Headercomponent from '../header/Headercomponent'; 
import Foodercomponent from '../fooder/Foodercomponent'; 
  
 
 

function My_add_post(props) {
 
  return (
  	<div className="">

      	<div className="container-fluid bg-info manushadow">
        	 <Headercomponent/>
        </div>



        <div className="container-fluid slidercss">
            

        </div>
 
        <div className="container-fluid centercontain">
          
        </div>
 


        <div className="container-fluid bg-info fooderbox">
            <Foodercomponent/>
        </div>

    </div>
  );
}

export default My_add_post
