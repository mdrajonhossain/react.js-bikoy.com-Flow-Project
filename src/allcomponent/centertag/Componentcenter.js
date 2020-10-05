import React from 'react';
import './Componentcenter.css';
import Slidertag from './slidertag/Slidertag';

import Subcentertag from './subcentertag/Subcentertag';
import Buttomtagpost from './buttomtag/Buttomtagpost';
 
 

function Componentcenter() {
 
  return (
  	<div className=""> 	
 
		<Subcentertag/>
		
		<Buttomtagpost/>

		
  </div>
 
   
  );
}

 

export default Componentcenter
